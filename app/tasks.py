import os
import subprocess
import shutil
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Optional

from app.celery_app import celery_app
from app.models import Project, GPXTrack
from app.schemas import RenderParams
from sqlalchemy.orm import Session


DATA_ROOT = Path("/app/data")
RAW_ROOT = DATA_ROOT / "raw"
REGIONS_ROOT = DATA_ROOT / "raw" / "regions"
OUTPUT_ROOT = DATA_ROOT / "output"
VIEWER_ROOT = DATA_ROOT / "viewer"
PIPELINE_ROOT = Path("/app/pipeline/wintermaker")


@celery_app.task(bind=True)
def prepare_region_task(
    self, project_id: int, name: str, bbox: list[float], dem_year: Optional[int] = None
) -> Dict[str, Any]:
    """Prepare a wintermaker region (download + config)."""
    region_dir = REGIONS_ROOT / name

    cmd = [
        "python",
        "-m",
        "winterortho",
        "prepare-region",
        "--name",
        name,
        "--extent",
        ",".join(str(x) for x in bbox),
    ]
    if dem_year:
        cmd.extend(["--dem-year", str(dem_year)])

    try:
        result = subprocess.run(cmd, cwd=str(PIPELINE_ROOT), capture_output=True, text=True, timeout=300)
        if result.returncode != 0:
            return {
                "status": "failed",
                "message": f"prepare-region failed: {result.stderr}",
            }
        return {"status": "success", "message": "Region prepared successfully"}
    except Exception as e:
        return {"status": "failed", "message": str(e)}


@celery_app.task(bind=True)
def run_pipeline_task(
    self, project_id: int, tile_id: str, profile: str, config_path: str
) -> Dict[str, Any]:
    """Run the full pipeline: harmonize, masks, terrain, snow, render, qa."""
    cmd = [
        "python",
        "-m",
        "winterortho",
        "run-all",
        "--tile-id",
        tile_id,
        "--profile",
        profile,
        "--config",
        config_path,
    ]

    try:
        result = subprocess.run(cmd, cwd=str(PIPELINE_ROOT), capture_output=True, text=True, timeout=600)
        if result.returncode != 0:
            return {
                "status": "failed",
                "message": f"Pipeline failed: {result.stderr}",
            }

        return {
            "status": "success",
            "message": "Pipeline completed successfully",
        }
    except Exception as e:
        return {"status": "failed", "message": str(e)}


@celery_app.task(bind=True)
def run_snow_pipeline_task(
    self, project_id: int, tile_id: str, profile: str, config_path: str
) -> Dict[str, Any]:
    """Run only snow + render pipeline (assuming harmonize/masks/terrain are done)."""
    cmd = [
        "python",
        "-m",
        "winterortho",
        "run-all-snow",
        "--tile-id",
        tile_id,
        "--profile",
        profile,
        "--config",
        config_path,
    ]

    try:
        result = subprocess.run(cmd, cwd=str(PIPELINE_ROOT), capture_output=True, text=True, timeout=600)
        if result.returncode != 0:
            return {
                "status": "failed",
                "message": f"Snow pipeline failed: {result.stderr}",
            }

        return {
            "status": "success",
            "message": "Snow pipeline completed successfully",
        }
    except Exception as e:
        return {"status": "failed", "message": str(e)}


@celery_app.task(bind=True)
def export_viewer_task(
    self, project_id: int, tile_id: str, config_path: str, params: RenderParams
) -> Dict[str, Any]:
    """Export 3D viewer assets for a tile."""
    cmd = [
        "python",
        "-m",
        "winterortho",
        "viewer-export",
        "--tile-id",
        tile_id,
        "--config",
        config_path,
        "--stride",
        str(params.stride),
        "--max-texture-dim",
        str(params.max_texture_dim),
    ]

    try:
        result = subprocess.run(cmd, cwd=str(PIPELINE_ROOT), capture_output=True, text=True, timeout=300)
        if result.returncode != 0:
            return {
                "status": "failed",
                "message": f"Viewer export failed: {result.stderr}",
            }

        output_dir = VIEWER_ROOT / "data" / tile_id
        if output_dir.exists():
            return {
                "status": "success",
                "message": "Viewer exported successfully",
                "viewer_dir": str(output_dir),
            }

        return {
            "status": "failed",
            "message": "Viewer export succeeded but output directory not found",
        }
    except Exception as e:
        return {"status": "failed", "message": str(e)}


@celery_app.task(bind=True)
def upload_gpx_task(
    self, project_id: int, gpx_id: int, file_path: str
) -> Dict[str, Any]:
    """Process and store GPX track."""
    dest = RAW_ROOT / "gpx" / f"project_{project_id}_{gpx_id}.gpx"
    dest.parent.mkdir(parents=True, exist_ok=True)

    try:
        shutil.move(file_path, dest)
        return {
            "status": "success",
            "message": "GPX uploaded successfully",
            "file_path": str(dest),
        }
    except Exception as e:
        return {"status": "failed", "message": str(e)}

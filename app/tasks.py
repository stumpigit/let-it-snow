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
WINTERMAKER_PATH = Path("/app/pipeline/wintermaker")


# Import wintermaker library
import sys
sys.path.insert(0, str(WINTERMAKER_PATH))
from winter_ortho import run_all_async, prepare_region_async, export_viewer_async


@celery_app.task(bind=True)
def prepare_region_task(
    self, project_id: int, name: str, bbox: list[float], dem_year: Optional[int] = None
) -> Dict[str, Any]:
    """Prepare a wintermaker region (download + config)."""
    region_dir = REGIONS_ROOT / name
    extent = ",".join(str(x) for x in bbox)

    def on_progress(msg: str) -> None:
        self.update_state(state="PROGRESS", meta={"message": msg})

    try:
        result = prepare_region_async(
            name=name,
            extent=extent,
            dem_year=dem_year or 2023,
            on_progress=on_progress,
        )
        return {
            "status": "success",
            "message": "Region prepared successfully",
            "config_path": result.config_path,
        }
    except Exception as e:
        return {"status": "failed", "message": str(e)}


@celery_app.task(bind=True)
def run_pipeline_task(
    self, project_id: int, tile_id: str, profile: str, config_path: str
) -> Dict[str, Any]:
    """Run the full pipeline: harmonize, masks, terrain, snow, render, qa."""
    config_path_obj = Path(config_path)

    def on_step(step_name: str, current: int, total: int) -> None:
        progress = current / total if total > 0 else 0
        self.update_state(state="PROGRESS", meta={"step": step_name, "progress": progress})

    try:
        result = run_all_async(
            tile_id=tile_id,
            profile_name=profile,
            config_path=str(config_path_obj) if config_path_obj.exists() else None,
            on_step=on_step,
        )
        return {
            "status": "success",
            "message": "Pipeline completed successfully",
            "result": result,
        }
    except Exception as e:
        return {"status": "failed", "message": str(e)}


@celery_app.task(bind=True)
def run_snow_pipeline_task(
    self, project_id: int, tile_id: str, profile: str, config_path: str
) -> Dict[str, Any]:
    """Run only snow + render pipeline (assuming harmonize/masks/terrain are done)."""
    config_path_obj = Path(config_path)

    def on_step(step_name: str, current: int, total: int) -> None:
        progress = current / total if total > 0 else 0
        self.update_state(state="PROGRESS", meta={"step": step_name, "progress": progress})

    try:
        result = run_all_async(
            tile_id=tile_id,
            profile_name=profile,
            config_path=str(config_path_obj) if config_path_obj.exists() else None,
            on_step=on_step,
        )
        return {
            "status": "success",
            "message": "Snow pipeline completed successfully",
            "result": result,
        }
    except Exception as e:
        return {"status": "failed", "message": str(e)}


@celery_app.task(bind=True)
def export_viewer_task(
    self, project_id: int, tile_id: str, config_path: str, params: RenderParams
) -> Dict[str, Any]:
    """Export 3D viewer assets for a tile."""
    config_path_obj = Path(config_path)

    try:
        result = export_viewer_async(
            tile_id=tile_id,
            config_path=str(config_path_obj) if config_path_obj.exists() else None,
            stride=params.stride,
            max_texture_dim=params.max_texture_dim,
        )
        output_dir = VIEWER_ROOT / "data" / tile_id
        output_dir.mkdir(parents=True, exist_ok=True)

        return {
            "status": "success",
            "message": "Viewer exported successfully",
            "viewer_dir": str(output_dir),
            "result": {
                "vertex_count": result.vertex_count,
                "triangle_count": result.triangle_count,
                "stride": result.stride,
                "texture_width": result.texture_width,
                "texture_height": result.texture_height,
                "max_texture_dim": result.max_texture_dim,
            },
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

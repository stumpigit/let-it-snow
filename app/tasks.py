import os
import re
import subprocess
import shutil
import sys
import logging
import json
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Optional

from app.celery_app import celery_app
from app.database import SessionLocal
from app.models import Project, GPXTrack
from app.paths import resolve_gpx_path
from app.schemas import RenderParams
from sqlalchemy import select
from sqlalchemy.orm import Session

logger = logging.getLogger(__name__)


PROJECT_ROOT = Path(__file__).resolve().parent.parent
REGION_NAME_RE = re.compile(r"^[a-z][a-z0-9_-]*$")


def _resolve_wintermaker_path() -> Path:
    if env_path := os.getenv("WINTERMAKER_PATH"):
        return Path(env_path)
    pointer = PROJECT_ROOT / "pipeline" / "wintermaker"
    if pointer.is_file() and not pointer.is_symlink():
        return (pointer.parent / pointer.read_text().strip()).resolve()
    return pointer.resolve()


WINTERMAKER_PATH = _resolve_wintermaker_path()
DATA_ROOT = Path(os.getenv("WINTERMAKER_DATA", str(PROJECT_ROOT / "data")))
RAW_ROOT = DATA_ROOT / "raw"
REGIONS_ROOT = DATA_ROOT / "raw" / "regions"
OUTPUT_ROOT = DATA_ROOT / "output"
VIEWER_ROOT = DATA_ROOT / "viewer"
PIPELINE_ROOT = WINTERMAKER_PATH


def _import_winter_ortho():
    if str(WINTERMAKER_PATH) not in sys.path:
        sys.path.insert(0, str(WINTERMAKER_PATH))
    from winter_ortho import run_all_async, run_snow_async, prepare_region_async, export_viewer_async

    return run_all_async, run_snow_async, prepare_region_async, export_viewer_async


def normalize_region_name(name: str) -> str:
    """Wintermaker region names must be lowercase slugs."""
    slug = name.lower()
    slug = re.sub(r"[^a-z0-9_-]", "-", slug)
    slug = re.sub(r"-+", "-", slug).strip("-")
    if not REGION_NAME_RE.fullmatch(slug):
        raise ValueError(
            "name must start with a letter and contain only lowercase letters, digits, _ or -"
        )
    return slug


def tile_id_for_region(name: str) -> str:
    return f"{normalize_region_name(name)}_001"


def _region_config_for_tile(tile_id: str) -> Path | None:
    region_name = tile_id.removesuffix("_001") if tile_id.endswith("_001") else tile_id
    region_config = WINTERMAKER_PATH / "config" / "regions" / f"{region_name}.yaml"
    return region_config if region_config.is_file() else None


def _resolve_config_path(config_path: str | None, tile_id: str | None = None) -> str | None:
    if config_path and str(config_path).strip():
        path = Path(config_path)
        if path.is_file():
            return str(path)

    if tile_id:
        region_config = _region_config_for_tile(tile_id)
        if region_config:
            return str(region_config)

    return None


def normalize_tile_id(tile_id: str, config_path: str | None = None) -> str:
    if tile_id.endswith("_001"):
        return tile_id

    region_name = normalize_region_name(tile_id)
    candidate = f"{region_name}_001"
    resolved_config = _resolve_config_path(config_path, candidate)
    if not resolved_config:
        return candidate

    import yaml

    with open(resolved_config, encoding="utf-8") as handle:
        tiles = (yaml.safe_load(handle) or {}).get("tiles", {})
    if candidate in tiles:
        return candidate
    if region_name in tiles:
        return region_name
    return candidate


@celery_app.task(bind=True)
def prepare_region_task(
    self, project_id: int, name: str, bbox: list[float], dem_year: Optional[int] = None
) -> Dict[str, Any]:
    """Prepare a wintermaker region (download + config)."""
    region_name = normalize_region_name(name)
    region_dir = REGIONS_ROOT / region_name
    extent = ",".join(str(x) for x in bbox)

    def on_progress(msg: str) -> None:
        self.update_state(state="PROGRESS", meta={"message": msg})
        logger.info("prepare_region: %s", msg)

    try:
        _, _, prepare_region_async, _ = _import_winter_ortho()
        result = prepare_region_async(
            name=region_name,
            extent=extent,
            dem_year=dem_year or 2023,
            on_progress=on_progress,
        )
        return {
            "status": "success",
            "message": "Region prepared successfully",
            "config_path": result.config_path,
            "tile_id": result.tile_id,
            "region_name": region_name,
        }
    except Exception as e:
        return {"status": "failed", "message": str(e)}


@celery_app.task(bind=True)
def run_pipeline_task(
    self, project_id: int, tile_id: str, profile: str, config_path: str
) -> Dict[str, Any]:
    """Run the full pipeline: harmonize, masks, terrain, snow, render, qa."""
    resolved_tile_id = normalize_tile_id(tile_id, config_path)
    config_path_obj = _resolve_config_path(config_path, resolved_tile_id)
    started_at = datetime.utcnow().isoformat() + "Z"
    steps = [
        "Datenharmonisierung",
        "Geometrische Masken",
        "Terrain-Features",
        "Schneeoberfläche",
        "Schneebedeckungsmodell",
        "Winter-Rendering",
        "Qualitätskontrolle",
    ]

    self.update_state(
        state="PROGRESS",
        meta={
            "step": "Initialisierung",
            "message": "Task gestartet...",
            "progress": 0,
            "current": 0,
            "total": len(steps),
            "steps": steps,
            "project_id": project_id,
            "tile_id": resolved_tile_id,
            "profile": profile,
            "config_path": config_path_obj,
            "started_at": started_at,
            "updated_at": datetime.utcnow().isoformat() + "Z",
        },
    )
    active_step = ""

    def on_step(step_name: str, current: int, total: int) -> None:
        if total <= 0:
            return
        nonlocal active_step
        if step_name.startswith(("→ ", "i ", "! ")):
            detail_message = step_name
            step_title = active_step or (steps[current - 1] if 0 < current <= len(steps) else step_name)
        else:
            active_step = step_name
            detail_message = step_name
            step_title = step_name
        progress = current / total
        logger.info("pipeline [%d/%d]: %s", current, total, step_name)
        self.update_state(
            state="PROGRESS",
            meta={
                "step": step_title,
                "message": detail_message,
                "progress": progress,
                "current": current,
                "total": total,
                "steps": steps,
                "project_id": project_id,
                "tile_id": resolved_tile_id,
                "profile": profile,
                "config_path": config_path_obj,
                "started_at": started_at,
                "updated_at": datetime.utcnow().isoformat() + "Z",
            },
        )

    try:
        run_all_async, _, _, _ = _import_winter_ortho()
        result = run_all_async(
            tile_id=resolved_tile_id,
            profile_name=profile,
            config_path=config_path_obj,
            on_step=on_step,
        )
        return {
            "status": "success",
            "message": "Pipeline completed successfully",
            "result": result,
            "tile_id": resolved_tile_id,
            "config_path": config_path_obj,
        }
    except Exception as e:
        return {"status": "failed", "message": str(e)}


@celery_app.task(bind=True)
def run_snow_pipeline_task(
    self, project_id: int, tile_id: str, profile: str, config_path: str
) -> Dict[str, Any]:
    """Run only snow + render pipeline (assuming harmonize/masks/terrain are done)."""
    resolved_tile_id = normalize_tile_id(tile_id, config_path)
    config_path_obj = _resolve_config_path(config_path, resolved_tile_id)
    started_at = datetime.utcnow().isoformat() + "Z"
    steps = [
        "Schneeoberfläche",
        "Schneebedeckungsmodell",
        "Winter-Rendering",
        "Qualitätskontrolle",
    ]

    self.update_state(
        state="PROGRESS",
        meta={
            "step": "Initialisierung",
            "message": "Task gestartet...",
            "progress": 0,
            "current": 0,
            "total": len(steps),
            "steps": steps,
            "project_id": project_id,
            "tile_id": resolved_tile_id,
            "profile": profile,
            "config_path": config_path_obj,
            "started_at": started_at,
            "updated_at": datetime.utcnow().isoformat() + "Z",
        },
    )
    active_step = ""

    def on_step(step_name: str, current: int, total: int) -> None:
        if total <= 0:
            return
        nonlocal active_step
        if step_name.startswith(("→ ", "i ", "! ")):
            detail_message = step_name
            step_title = active_step or (steps[current - 1] if 0 < current <= len(steps) else step_name)
        else:
            active_step = step_name
            detail_message = step_name
            step_title = step_name
        progress = current / total
        logger.info("snow pipeline [%d/%d]: %s", current, total, step_name)
        self.update_state(
            state="PROGRESS",
            meta={
                "step": step_title,
                "message": detail_message,
                "progress": progress,
                "current": current,
                "total": total,
                "steps": steps,
                "project_id": project_id,
                "tile_id": resolved_tile_id,
                "profile": profile,
                "config_path": config_path_obj,
                "started_at": started_at,
                "updated_at": datetime.utcnow().isoformat() + "Z",
            },
        )

    try:
        _, run_snow_async, _, _ = _import_winter_ortho()
        result = run_snow_async(
            tile_id=resolved_tile_id,
            profile_name=profile,
            config_path=config_path_obj,
            on_step=on_step,
        )
        return {
            "status": "success",
            "message": "Snow pipeline completed successfully",
            "result": result,
            "tile_id": resolved_tile_id,
            "config_path": config_path_obj,
        }
    except Exception as e:
        return {"status": "failed", "message": str(e)}


def _as_render_params(params: RenderParams | dict) -> RenderParams:
    if isinstance(params, RenderParams):
        return params
    return RenderParams(**params)


def _get_project_gpx_paths(project_id: int) -> list[str]:
    db = SessionLocal()
    try:
        tracks = db.execute(
            select(GPXTrack).where(GPXTrack.project_id == project_id)
        ).scalars().all()
        paths: list[str] = []
        for track in tracks:
            path = resolve_gpx_path(track.file_path or "")
            if path is not None:
                paths.append(str(path))
        return paths
    finally:
        db.close()


@celery_app.task(bind=True)
def export_viewer_task(
    self, project_id: int, tile_id: str, config_path: str, params: dict
) -> Dict[str, Any]:
    """Export 3D viewer assets for a tile."""
    render_params = _as_render_params(params)
    resolved_tile_id = normalize_tile_id(tile_id, config_path)
    config_path_obj = _resolve_config_path(config_path, resolved_tile_id)

    try:
        _, _, _, export_viewer_async = _import_winter_ortho()
        gpx_paths = _get_project_gpx_paths(project_id)
        logger.info(
            "export_viewer: project_id=%s tile_id=%s gpx_files=%s",
            project_id,
            resolved_tile_id,
            len(gpx_paths),
        )
        result = export_viewer_async(
            tile_id=resolved_tile_id,
            config_path=config_path_obj,
            stride=render_params.stride,
            max_texture_dim=render_params.max_texture_dim,
            gpx_paths=gpx_paths or None,
            auto_gpx=not gpx_paths,
        )
        track_count = 0
        scene_path = Path(result.output_dir) / "scene.json"
        if scene_path.is_file():
            track_count = int(json.loads(scene_path.read_text()).get("track_count") or 0)
        logger.info(
            "export_viewer: project_id=%s tracks_exported=%s",
            project_id,
            track_count,
        )
        return {
            "status": "success",
            "message": "Viewer exported successfully",
            "viewer_dir": str(result.output_dir),
            "tile_id": resolved_tile_id,
            "scene_url": f"/viewer/data/{resolved_tile_id}/scene.json",
            "track_count": track_count,
            "gpx_files": len(gpx_paths),
            "result": {
                "vertex_count": result.vertex_count,
                "triangle_count": result.triangle_count,
                "stride": result.stride,
                "texture_width": result.texture_width,
                "texture_height": result.texture_height,
                "max_texture_dim": result.max_texture_dim,
                "track_count": track_count,
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

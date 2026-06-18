"""Detect completed pipeline steps from files on disk."""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any

import yaml

from app.paths import VIEWER_DATA_ROOT, WINTERMAKER_PATH

REGION_NAME_RE = re.compile(r"^[a-z][a-z0-9_-]*$")


def normalize_region_name(name: str) -> str:
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


def _exists(path: Path | str | None) -> bool:
    return bool(path) and Path(path).is_file()


def _percent(markers: list[Path | str | None]) -> int:
    if not markers:
        return 0
    present = sum(1 for marker in markers if _exists(marker))
    return round(100 * present / len(markers))


def _load_region_config(region_name: str) -> tuple[Path | None, dict[str, Any]]:
    config_path = WINTERMAKER_PATH / "config" / "regions" / f"{region_name}.yaml"
    if not config_path.is_file():
        return None, {}
    with config_path.open(encoding="utf-8") as handle:
        config = yaml.safe_load(handle) or {}
    return config_path, config


def _resolve_config_paths(config: dict[str, Any]) -> dict[str, Any]:
    """Resolve relative paths in a region config against the wintermaker root."""
    resolved = dict(config)
    paths = dict(resolved.get("paths", {}))
    for key in ("intermediate_root", "output_root", "orthophoto", "dem"):
        if key in paths:
            value = Path(paths[key])
            if not value.is_absolute():
                paths[key] = str(WINTERMAKER_PATH / value)
    tlm = dict(paths.get("tlm3d", {}))
    for layer, value in tlm.items():
        layer_path = Path(value)
        if not layer_path.is_absolute():
            tlm[layer] = str(WINTERMAKER_PATH / layer_path)
    paths["tlm3d"] = tlm
    resolved["paths"] = paths
    return resolved


def _tile_paths(config: dict[str, Any], tile_id: str) -> tuple[Path, Path]:
    intermediate = Path(config["paths"]["intermediate_root"]) / tile_id
    output = Path(config["paths"]["output_root"]) / tile_id
    return intermediate, output


def get_pipeline_status(project_name: str) -> dict[str, Any]:
    """Return pipeline progress (0–100 per stage) based on existing output files."""
    region_name = normalize_region_name(project_name)
    tile_id = tile_id_for_region(region_name)
    config_path, raw_config = _load_region_config(region_name)

    progress = {
        "prepare": 0,
        "harmonize": 0,
        "masks": 0,
        "terrain": 0,
        "snow": 0,
        "render": 0,
        "qa": 0,
        "viewer": 0,
    }
    scene_url: str | None = None

    if not config_path:
        return {
            "tile_id": tile_id,
            "config_path": None,
            "progress": progress,
            "scene_url": scene_url,
        }

    config = _resolve_config_paths(raw_config)
    paths = config["paths"]
    intermediate, output = _tile_paths(config, tile_id)

    tlm_files = list(paths.get("tlm3d", {}).values())
    prepare_markers: list[Path | str | None] = [
        config_path,
        paths.get("orthophoto"),
        paths.get("dem"),
    ]
    if tlm_files:
        prepare_markers.append(tlm_files[0])
    progress["prepare"] = _percent(prepare_markers)

    progress["harmonize"] = _percent(
        [
            intermediate / "rgb_summer.tif",
            intermediate / "dem_2m.tif",
            intermediate / "nodata_mask.tif",
        ]
    )
    progress["masks"] = _percent(
        [
            intermediate / "tlm_masks.tif",
            intermediate / "protect_mask.tif",
        ]
    )
    progress["terrain"] = 100 if _exists(intermediate / "terrain_features.tif") else 0

    snow_surface = intermediate / "snow_surface_dem.tif"
    snow_model = output / f"{tile_id}_snow_fraction.tif"
    if _exists(snow_model):
        progress["snow"] = 100
    elif _exists(snow_surface):
        progress["snow"] = 50

    progress["render"] = 100 if _exists(output / f"{tile_id}_winter_rgb.tif") else 0
    progress["qa"] = 100 if _exists(output / "qa_report.json") else 0

    scene_path = VIEWER_DATA_ROOT / tile_id / "scene.json"
    if scene_path.is_file():
        progress["viewer"] = 100
        scene_url = f"/viewer/data/{tile_id}/scene.json"

    return {
        "tile_id": tile_id,
        "config_path": str(config_path),
        "progress": progress,
        "scene_url": scene_url,
    }

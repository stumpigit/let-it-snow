import os
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent


def resolve_wintermaker_path() -> Path:
    if env_path := os.getenv("WINTERMAKER_PATH"):
        return Path(env_path)
    pointer = PROJECT_ROOT / "pipeline" / "wintermaker"
    if pointer.is_file() and not pointer.is_symlink():
        return (pointer.parent / pointer.read_text().strip()).resolve()
    return pointer.resolve()


WINTERMAKER_PATH = resolve_wintermaker_path()
VIEWER_DATA_ROOT = WINTERMAKER_PATH / "viewer" / "data"
DATA_ROOT = Path(os.getenv("WINTERMAKER_DATA", str(PROJECT_ROOT / "data")))


def resolve_gpx_path(stored: str) -> Path | None:
    """Resolve a GPX path from DB (absolute or relative to DATA_ROOT)."""
    if not stored:
        return None
    path = Path(stored)
    if path.is_file():
        return path
    relative = DATA_ROOT / stored
    if relative.is_file():
        return relative
    by_name = DATA_ROOT / "raw" / "gpx" / path.name
    if by_name.is_file():
        return by_name
    return None


def gpx_storage_path(project_id: int, track_id: int) -> Path:
    return DATA_ROOT / "raw" / "gpx" / f"project_{project_id}_{track_id}.gpx"

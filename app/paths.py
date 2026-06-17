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

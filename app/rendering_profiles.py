"""Rendering profile storage, loading, and documentation parsing."""

from __future__ import annotations

import copy
import os
import re
from pathlib import Path
from typing import Any

import yaml

from app.paths import DATA_ROOT, WINTERMAKER_PATH

DOCS_PATH = WINTERMAKER_PATH / "docs" / "rendering_profiles.md"
BASE_PROFILES_DIR = WINTERMAKER_PATH / "config" / "rendering_profiles"
DEFAULT_BASE_PROFILE = "default"
REGION_NAME_RE = re.compile(r"^[a-z][a-z0-9_-]*$")

SECTION_RE = re.compile(r"^## `([^`]+)`\s*$", re.MULTILINE)
PARAM_RE = re.compile(r"^### `([^`]+)`\s*$", re.MULTILINE)
TABLE_ROW_RE = re.compile(r"^\|\s*\*\*([^*]+)\*\*\s*\|\s*(.+?)\s*\|$", re.MULTILINE)


def normalize_region_name(name: str) -> str:
    slug = name.lower()
    slug = re.sub(r"[^a-z0-9_-]", "-", slug)
    slug = re.sub(r"-+", "-", slug).strip("-")
    if not REGION_NAME_RE.fullmatch(slug):
        raise ValueError(
            "name must start with a letter and contain only lowercase letters, digits, _ or -"
        )
    return slug


def project_workdir(project_id: int) -> Path:
    return DATA_ROOT / "projects" / f"project_{project_id}"


def project_profiles_dir(project_id: int) -> Path:
    return project_workdir(project_id) / "config" / "rendering_profiles"


def project_profile_path(project_id: int, profile_name: str) -> Path:
    return project_profiles_dir(project_id) / f"{profile_name}.yaml"


def list_base_profiles() -> list[str]:
    if not BASE_PROFILES_DIR.is_dir():
        return [DEFAULT_BASE_PROFILE]
    names = sorted(
        path.stem
        for path in BASE_PROFILES_DIR.glob("*.yaml")
        if path.is_file()
    )
    return names or [DEFAULT_BASE_PROFILE]


def load_base_profile(name: str = DEFAULT_BASE_PROFILE) -> dict[str, Any]:
    path = BASE_PROFILES_DIR / f"{name}.yaml"
    if not path.is_file():
        raise FileNotFoundError(f"Base rendering profile not found: {path}")
    return _load_yaml(path)


def has_custom_profile(project_id: int, profile_name: str) -> bool:
    return project_profile_path(project_id, profile_name).is_file()


def load_effective_profile(
    project_id: int,
    region_name: str,
    base_profile: str = DEFAULT_BASE_PROFILE,
) -> tuple[dict[str, Any], str, bool]:
    """Return (profile_data, active_profile_name, is_custom)."""
    custom_path = project_profile_path(project_id, region_name)
    if custom_path.is_file():
        return _load_yaml(custom_path), region_name, True
    base = load_base_profile(base_profile)
    return copy.deepcopy(base), base_profile, False


def flatten_profile(data: dict[str, Any], prefix: str = "") -> dict[str, Any]:
    flat: dict[str, Any] = {}
    for key, value in data.items():
        path = f"{prefix}.{key}" if prefix else key
        if isinstance(value, dict):
            flat.update(flatten_profile(value, path))
        else:
            flat[path] = value
    return flat


def unflatten_profile(flat: dict[str, Any]) -> dict[str, Any]:
    result: dict[str, Any] = {}
    for path, value in flat.items():
        keys = path.split(".")
        node = result
        for key in keys[:-1]:
            if key not in node or not isinstance(node[key], dict):
                node[key] = {}
            node = node[key]
        node[keys[-1]] = value
    return result


def apply_profile_changes(
    profile: dict[str, Any],
    changes: dict[str, Any],
) -> dict[str, Any]:
    flat = flatten_profile(profile)
    flat.update(changes)
    return unflatten_profile(flat)


def save_project_profile(
    project_id: int,
    region_name: str,
    base_profile: str,
    changes: dict[str, Any],
) -> tuple[str, str]:
    """Persist a project-specific rendering profile. Returns (profile_name, path)."""
    current, _, _ = load_effective_profile(project_id, region_name, base_profile)
    updated = apply_profile_changes(current, changes)
    updated["profile"] = region_name

    dest = project_profile_path(project_id, region_name)
    dest.parent.mkdir(parents=True, exist_ok=True)
    with dest.open("w", encoding="utf-8") as handle:
        yaml.safe_dump(updated, handle, sort_keys=False, allow_unicode=True)
    return region_name, str(dest)


def delete_project_profile(project_id: int, region_name: str) -> bool:
    path = project_profile_path(project_id, region_name)
    if path.is_file():
        path.unlink()
        return True
    return False


def resolve_pipeline_profile(project_id: int, region_name: str, requested: str) -> str:
    """Profile name passed to winter-ortho for a project."""
    if has_custom_profile(project_id, region_name):
        return region_name
    if requested in list_base_profiles():
        return requested
    return DEFAULT_BASE_PROFILE


def run_in_project_workdir(project_id: int, callback):
    """Run winter-ortho with cwd set so project rendering profiles are found first."""
    workdir = project_workdir(project_id)
    workdir.mkdir(parents=True, exist_ok=True)
    project_profiles_dir(project_id).mkdir(parents=True, exist_ok=True)
    previous = os.getcwd()
    try:
        os.chdir(workdir)
        return callback()
    finally:
        os.chdir(previous)


def _load_yaml(path: Path) -> dict[str, Any]:
    with path.open(encoding="utf-8") as handle:
        return yaml.safe_load(handle) or {}


def _parse_param_names(heading: str) -> list[str]:
    names: list[str] = []
    for part in heading.split(","):
        part = part.strip().strip("`")
        if part.startswith("classes."):
            continue
        if "{" in part:
            continue
        if part:
            names.append(part)
    return names


def _parse_table_block(block: str) -> dict[str, str]:
    fields: dict[str, str] = {}
    for match in TABLE_ROW_RE.finditer(block):
        key = match.group(1).strip()
        value = match.group(2).strip()
        fields[key] = value
    return fields


def parse_rendering_profile_docs() -> dict[str, Any]:
    """Parse wintermaker rendering_profiles.md into structured parameter docs."""
    if not DOCS_PATH.is_file():
        return {"sections": [], "params": {}}

    text = DOCS_PATH.read_text(encoding="utf-8")
    sections: list[dict[str, Any]] = []
    params: dict[str, dict[str, Any]] = {}

    section_splits = list(SECTION_RE.finditer(text))
    for index, match in enumerate(section_splits):
        section_id = match.group(1).strip()
        if section_id in {"Übersicht", "Profil abstimmen"} or section_id.startswith("rendering."):
            # Nested rendering.* sections are handled as separate ## headers
            pass
        start = match.end()
        end = section_splits[index + 1].start() if index + 1 < len(section_splits) else len(text)
        section_body = text[start:end]

        intro = section_body.split("### ", 1)[0].strip()
        intro = intro.strip("-").strip()
        section_params: list[str] = []

        param_splits = list(PARAM_RE.finditer(section_body))
        for p_index, param_match in enumerate(param_splits):
            heading = param_match.group(1)
            p_start = param_match.end()
            p_end = (
                param_splits[p_index + 1].start()
                if p_index + 1 < len(param_splits)
                else len(section_body)
            )
            param_block = section_body[p_start:p_end]
            table_fields = _parse_table_block(param_block)
            if not table_fields:
                continue

            param_names = _parse_param_names(heading)
            if not param_names:
                continue

            doc = {
                "type": table_fields.get("Typ", ""),
                "default": table_fields.get("Standard (`default`)", table_fields.get("Schlüssel (`default`)", "")),
                "used_in": table_fields.get("Verwendet", ""),
                "description": table_fields.get("Wirkung", ""),
            }

            for name in param_names:
                path = f"{section_id}.{name}" if section_id != "profile" else name
                if section_id == "profile":
                    path = "profile"
                entry = {**doc, "path": path, "name": name, "section": section_id}
                params[path] = entry
                section_params.append(path)

        if section_id in {"Übersicht", "Profil abstimmen"}:
            continue

        sections.append(
            {
                "id": section_id,
                "label": section_id,
                "description": intro,
                "param_paths": section_params,
            }
        )

    return {"sections": sections, "params": params}


def infer_value_kind(value: Any, doc_type: str = "") -> str:
    doc_lower = doc_type.lower()
    if isinstance(value, bool):
        return "boolean"
    if isinstance(value, list):
        if len(value) == 3 and all(isinstance(v, (int, float)) for v in value):
            if "rgb" in doc_lower or "r, g, b" in doc_lower:
                return "rgb"
        if all(isinstance(v, str) for v in value):
            return "string_list"
        return "array"
    if isinstance(value, (int, float)):
        return "number"
    if isinstance(value, str):
        return "string"
    return "unknown"


def build_profile_editor_payload(
    profile: dict[str, Any],
    docs: dict[str, Any],
    *,
    active_name: str,
    is_custom: bool,
    base_profile: str,
) -> dict[str, Any]:
    flat = flatten_profile(profile)
    doc_params: dict[str, dict[str, Any]] = docs.get("params", {})
    sections_out: list[dict[str, Any]] = []

    for section in docs.get("sections", []):
        fields: list[dict[str, Any]] = []
        for path in section.get("param_paths", []):
            if path not in flat:
                continue
            value = flat[path]
            doc = doc_params.get(path, {})
            fields.append(
                {
                    "path": path,
                    "name": doc.get("name", path.split(".")[-1]),
                    "value": value,
                    "value_kind": infer_value_kind(value, doc.get("type", "")),
                    "doc": {
                        "type": doc.get("type", ""),
                        "default": doc.get("default", ""),
                        "used_in": doc.get("used_in", ""),
                        "description": doc.get("description", ""),
                    },
                }
            )

        # Include YAML fields missing from docs (e.g. deeply nested class weights)
        section_prefix = section["id"] + "."
        for path, value in sorted(flat.items()):
            if not path.startswith(section_prefix):
                continue
            if any(f["path"] == path for f in fields):
                continue
            if isinstance(value, dict):
                continue
            fields.append(
                {
                    "path": path,
                    "name": path.split(".")[-1],
                    "value": value,
                    "value_kind": infer_value_kind(value),
                    "doc": None,
                }
            )

        if fields:
            sections_out.append(
                {
                    "id": section["id"],
                    "label": section["label"],
                    "description": section.get("description", ""),
                    "fields": fields,
                }
            )

    return {
        "profile_name": active_name,
        "base_profile": base_profile,
        "is_custom": is_custom,
        "sections": sections_out,
    }


def profile_response_for_project(
    project_id: int,
    region_name: str,
    base_profile: str = DEFAULT_BASE_PROFILE,
) -> dict[str, Any]:
    profile, active_name, is_custom = load_effective_profile(project_id, region_name, base_profile)
    docs = parse_rendering_profile_docs()
    payload = build_profile_editor_payload(
        profile,
        docs,
        active_name=active_name,
        is_custom=is_custom,
        base_profile=base_profile,
    )
    payload["region_name"] = region_name
    return payload

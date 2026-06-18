from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List


class ProjectCreate(BaseModel):
    name: str
    description: Optional[str] = None
    bbox: List[float]  # [minx, miny, maxx, maxy]


class ProjectUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None


class ProjectResponse(BaseModel):
    id: int
    name: str
    description: Optional[str]
    bbox: List[float]
    created_at: datetime
    updated_at: datetime


class GPXTrackCreate(BaseModel):
    project_id: int
    name: str
    file_path: str


class GPXTrackResponse(BaseModel):
    id: int
    project_id: int
    name: str
    file_path: str
    created_at: datetime


class RenderParams(BaseModel):
    profile: str
    resolution_m: float = 0.5
    max_texture_dim: int = 8192
    stride: int = 2


class PrepareRegionRequest(BaseModel):
    project_id: int
    name: str
    bbox: List[float]
    dem_year: Optional[int] = None


class PipelineRequest(BaseModel):
    project_id: int
    tile_id: str
    profile: str = "default"
    config_path: str = ""


class ExportViewerRequest(BaseModel):
    project_id: int
    tile_id: str
    config_path: str = ""
    params: RenderParams


class TaskStatusResponse(BaseModel):
    task_id: str
    status: str
    progress: float
    message: Optional[str] = None
    results: Optional[dict] = None


class PipelineStatusResponse(BaseModel):
    tile_id: str
    config_path: Optional[str] = None
    progress: dict[str, int]
    scene_url: Optional[str] = None

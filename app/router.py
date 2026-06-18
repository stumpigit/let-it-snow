from fastapi import APIRouter, Depends, HTTPException, File, Form, UploadFile
from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, JSON, Text, select
from sqlalchemy.orm import Session, sessionmaker, declarative_base
from datetime import datetime
from pathlib import Path
from typing import Optional, List
import os
import shutil
import subprocess

from app.schemas import (
    ProjectCreate,
    ProjectUpdate,
    ProjectResponse,
    GPXTrackResponse,
    RenderParams,
    PrepareRegionRequest,
    PipelineRequest,
    ExportViewerRequest,
    PipelineStatusResponse,
)
from app.pipeline_status import get_pipeline_status

# DB setup
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./app.db")
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Models
class Project(Base):
    __tablename__ = "projects"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(Text, nullable=True)
    bbox = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class GPXTrack(Base):
    __tablename__ = "gpx_tracks"
    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, nullable=False)
    name = Column(String)
    file_path = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

# Create tables
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

router = APIRouter()

@router.get("/")
def read_root():
    return {"message": "Let It Snow API"}

@router.get("/projects", response_model=List[ProjectResponse])
def list_projects(db: Session = Depends(get_db)):
    projects = db.execute(select(Project)).scalars().all()
    return projects

@router.post("/projects", response_model=ProjectResponse)
def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    db_project = Project(
        name=project.name,
        description=project.description,
        bbox=project.bbox,
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

@router.put("/projects/{project_id}", response_model=ProjectResponse)
def update_project(project_id: int, project: ProjectUpdate, db: Session = Depends(get_db)):
    db_project = db.execute(select(Project).where(Project.id == project_id)).scalars().first()
    if not db_project:
        raise HTTPException(status_code=404, detail="Project not found")
    if project.name:
        db_project.name = project.name
    if project.description:
        db_project.description = project.description
    db_project.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(db_project)
    return db_project

@router.get("/projects/{project_id}/pipeline-status", response_model=PipelineStatusResponse)
def project_pipeline_status(project_id: int, db: Session = Depends(get_db)):
    """Detect completed pipeline steps from files on disk."""
    db_project = db.execute(select(Project).where(Project.id == project_id)).scalars().first()
    if not db_project:
        raise HTTPException(status_code=404, detail="Project not found")
    return get_pipeline_status(db_project.name)


@router.delete("/projects/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    db_project = db.execute(select(Project).where(Project.id == project_id)).scalars().first()
    if not db_project:
        raise HTTPException(status_code=404, detail="Project not found")
    db.delete(db_project)
    db.commit()
    return {"message": "Project deleted"}

@router.post("/gpx", response_model=GPXTrackResponse)
async def upload_gpx(
    file: UploadFile = File(...),
    project_id: int = Form(...),
    name: Optional[str] = Form(None),
    db: Session = Depends(get_db),
):
    db_project = db.execute(
        select(Project).where(Project.id == project_id)
    ).scalars().first()
    if not db_project:
        raise HTTPException(status_code=404, detail="Project not found")

    track_name = name or file.filename or "track"

    db_track = GPXTrack(
        project_id=project_id,
        name=track_name,
        file_path="",
        created_at=datetime.utcnow(),
    )
    db.add(db_track)
    db.commit()
    db.refresh(db_track)

    data_root = Path(os.getenv("WINTERMAKER_DATA", str(Path(__file__).resolve().parent.parent / "data")))
    dest = data_root / "raw" / "gpx" / f"project_{project_id}_{db_track.id}.gpx"
    dest.parent.mkdir(parents=True, exist_ok=True)

    with dest.open("wb") as out:
        shutil.copyfileobj(file.file, out)

    db_track.file_path = str(dest)
    db.commit()
    db.refresh(db_track)
    return db_track

@router.get("/gpx", response_model=List[GPXTrackResponse])
def list_gpx(db: Session = Depends(get_db)):
    tracks = db.execute(select(GPXTrack)).scalars().all()
    return tracks

@router.post("/tasks/prepare")
def prepare_region(request: PrepareRegionRequest):
    """Start region preparation task (returns immediately with task_id)."""
    from app.tasks import prepare_region_task
    result = prepare_region_task.delay(
        request.project_id,
        request.name,
        request.bbox,
        request.dem_year,
    )
    return {"task_id": result.id}

@router.post("/tasks/run-pipeline")
def run_pipeline(request: PipelineRequest):
    """Start full pipeline task (returns immediately with task_id)."""
    from app.tasks import run_pipeline_task
    result = run_pipeline_task.delay(
        request.project_id,
        request.tile_id,
        request.profile,
        request.config_path,
    )
    return {"task_id": result.id}

@router.post("/tasks/run-snow")
def run_snow_pipeline(request: PipelineRequest):
    """Start snow-only pipeline task."""
    from app.tasks import run_snow_pipeline_task
    result = run_snow_pipeline_task.delay(
        request.project_id,
        request.tile_id,
        request.profile,
        request.config_path,
    )
    return {"task_id": result.id}

@router.post("/tasks/export-viewer")
def export_viewer(request: ExportViewerRequest):
    """Start viewer export task."""
    from app.tasks import export_viewer_task
    result = export_viewer_task.delay(
        request.project_id,
        request.tile_id,
        request.config_path,
        request.params.model_dump(),
    )
    return {"task_id": result.id}

@router.get("/tasks/{task_id}")
def get_task_status(task_id: str):
    """Get Celery task status."""
    from app.tasks import celery_app
    result = celery_app.AsyncResult(task_id)
    status = result.status
    progress = None
    message = None

    if status == "SUCCESS" and isinstance(result.result, dict):
        if result.result.get("status") == "failed":
            status = "FAILURE"
            message = result.result.get("message")
        else:
            progress = result.result
    elif status == "SUCCESS":
        progress = result.result
    elif status == "FAILURE":
        message = str(result.info) if result.info else None
    elif status == "PROGRESS" and isinstance(result.info, dict):
        progress = result.info

    return {
        "task_id": task_id,
        "status": status,
        "progress": progress,
        "message": message,
    }

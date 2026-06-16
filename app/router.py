from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, JSON, Text, select
from sqlalchemy.orm import sessionmaker, declarative_base
from datetime import datetime
from typing import Optional, List
import os
import subprocess

from app.schemas import ProjectCreate, ProjectUpdate, ProjectResponse, GPXTrackCreate, GPXTrackResponse, RenderParams

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

@router.delete("/projects/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    db_project = db.execute(select(Project).where(Project.id == project_id)).scalars().first()
    if not db_project:
        raise HTTPException(status_code=404, detail="Project not found")
    db.delete(db_project)
    db.commit()
    return {"message": "Project deleted"}

@router.post("/gpx")
def upload_gpx(track: GPXTrackCreate, db: Session = Depends(get_db)):
    # In production, handle file upload here
    db_track = GPXTrack(
        project_id=track.project_id,
        name=track.name,
        file_path=track.file_path,
        created_at=datetime.utcnow()
    )
    db.add(db_track)
    db.commit()
    db.refresh(db_track)
    return db_track

@router.get("/gpx", response_model=List[GPXTrackResponse])
def list_gpx(db: Session = Depends(get_db)):
    tracks = db.execute(select(GPXTrack)).scalars().all()
    return tracks

@router.post("/tasks/prepare")
def prepare_region(project_id: int, name: str, bbox: List[float], dem_year: Optional[int] = None):
    """Start region preparation task (returns immediately with task_id)."""
    from app.tasks import prepare_region_task
    result = prepare_region_task.delay(project_id, name, bbox, dem_year)
    return {"task_id": result.id}

@router.post("/tasks/run-pipeline")
def run_pipeline(project_id: int, tile_id: str, profile: str, config_path: str):
    """Start full pipeline task (returns immediately with task_id)."""
    from app.tasks import run_pipeline_task
    result = run_pipeline_task.delay(project_id, tile_id, profile, config_path)
    return {"task_id": result.id}

@router.post("/tasks/run-snow")
def run_snow_pipeline(project_id: int, tile_id: str, profile: str, config_path: str):
    """Start snow-only pipeline task."""
    from app.tasks import run_snow_pipeline_task
    result = run_snow_pipeline_task.delay(project_id, tile_id, profile, config_path)
    return {"task_id": result.id}

@router.post("/tasks/export-viewer")
def export_viewer(project_id: int, tile_id: str, config_path: str, params: RenderParams):
    """Start viewer export task."""
    from app.tasks import export_viewer_task
    result = export_viewer_task.delay(project_id, tile_id, config_path, params)
    return {"task_id": result.id}

@router.get("/tasks/{task_id}")
def get_task_status(task_id: str):
    """Get Celery task status."""
    from app.tasks import celery_app
    result = celery_app.AsyncResult(task_id)
    return {
        "task_id": task_id,
        "status": result.status,
        "progress": result.result if result.status == "SUCCESS" else None,
        "message": result.info if result.status == "FAILURE" else None,
    }

from sqlalchemy import Column, Integer, String, Float, DateTime, JSON, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(Text, nullable=True)
    bbox = Column(JSON)  # [minx, miny, maxx, maxy]
    created_at = Column(DateTime, nullable=False)
    updated_at = Column(DateTime, nullable=False)


class GPXTrack(Base):
    __tablename__ = "gpx_tracks"

    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, nullable=False)
    name = Column(String)
    file_path = Column(String)
    created_at = Column(DateTime, nullable=False)

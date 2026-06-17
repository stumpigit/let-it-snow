from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.paths import VIEWER_DATA_ROOT
from app.router import router

app = FastAPI(
    title="Let It Snow API",
    description="Multi-user 3D WebApp for winter orthophoto rendering",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

if VIEWER_DATA_ROOT.is_dir():
    app.mount(
        "/viewer/data",
        StaticFiles(directory=str(VIEWER_DATA_ROOT)),
        name="viewer-data",
    )

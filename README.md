# Let It Snow

Multi-user 3D WebApp for winter orthophoto rendering based on [wintermaker](https://github.com/stumpigit/wintermaker).

## Architecture

See `architecture.html` for a full system diagram.

### Layers

- **Frontend:** Svelte 5 + Three.js + GPX support
- **Backend:** FastAPI + Celery + PostgreSQL + Redis
- **Pipeline:** wintermaker (CLI integration)

## Prerequisites

- Python 3.10+
- Node.js 18+
- Docker (for PostgreSQL and Redis)

## Setup

### 1. Clone repositories

```bash
git clone https://github.com/stumpigit/let-it-snow.git
cd let-it-snow

# Required for Celery pipeline tasks — path is referenced by pipeline/wintermaker
git clone https://github.com/stumpigit/wintermaker.git wintermaker-upstream
```

### 2. Install Python dependencies

```bash
pip install -r requirements.txt
pip install -e wintermaker-upstream
```

### 3. Start infrastructure

```bash
# PostgreSQL + Redis only (for local development)
docker compose up -d postgres redis
```

Or run the full stack in Docker:

```bash
docker compose up -d
```

### 4. Run services

In separate terminals:

```bash
# API
uvicorn app.main:app --host 0.0.0.0 --port 8000

# Celery worker (requires wintermaker-upstream)
celery -A app.worker.celery_app worker --loglevel=info
(bzw. mit Python3.12: python3.12 -m celery -A app.worker.celery_app worker --loglevel=info)

# Frontend
cd frontend && npm install && npm run dev
```

### Environment variables

Optional overrides (defaults work for local development):

```bash
DATABASE_URL=postgresql://letitsnow:letitsnow@localhost:5432/letitsnow
REDIS_URL=redis://localhost:6379/0
WINTERMAKER_PATH=/path/to/wintermaker-upstream   # auto-resolved from pipeline/wintermaker
WINTERMAKER_DATA=./data                          # pipeline input/output directory
```

## Development

- Backend: `app/`
- Frontend: `frontend/`
- Pipeline: `pipeline/` (pointer to `wintermaker-upstream`)

More detail: `docs/SETUP.md`, `docs/backend.md`, `docs/pipeline.md`.

## License

MIT
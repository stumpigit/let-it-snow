# Let It Snow

Multi-user 3D WebApp for winter orthophoto rendering based on [wintermaker](https://github.com/stumpigit/wintermaker).

## Architecture

See `architecture.html` for a full system diagram.

### Layers

- **Frontend:** Svelte 5 + Three.js + GPX support
- **Backend:** FastAPI + Celery + PostgreSQL + Redis
- **Pipeline:** wintermaker (CLI integration)

## Setup

```bash
# Clone
git clone https://github.com/stumpigit/let-it-snow.git
cd let-it-snow

# Install dependencies
docker compose up -d

# Run migrations (if needed)
# python -m alembic upgrade head

# Start backend
uvicorn app.main:app --host 0.0.0.0 --port 8000

# Start Celery worker
celery -A app.worker.celery_app worker --loglevel=info

# Start frontend
cd frontend && npm install && npm run dev
```

## Development

- Backend: `app/`
- Frontend: `frontend/`
- Pipeline: `pipeline/` (wintermaker wrapper)

## License

MIT

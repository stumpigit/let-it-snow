# Let It Snow — Backend

## Architecture

- **FastAPI** — REST API
- **SQLAlchemy** — PostgreSQL ORM
- **Celery** — Async task processing
- **Redis** — Task queue + session cache

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Health check |
| GET | `/projects` | List all projects |
| POST | `/projects` | Create project |
| PUT | `/projects/{id}` | Update project |
| DELETE | `/projects/{id}` | Delete project |
| POST | `/gpx` | Upload GPX track |
| GET | `/gpx` | List GPX tracks |
| POST | `/tasks/prepare` | Start region prep |
| POST | `/tasks/run-pipeline` | Run full pipeline |
| POST | `/tasks/run-snow` | Run snow-only pipeline |
| POST | `/tasks/export-viewer` | Export 3D viewer assets |
| GET | `/tasks/{task_id}` | Task status |

## Environment

```bash
DATABASE_URL=postgresql://user:pass@host:5432/db
REDIS_URL=redis://host:6379/0
WINTERMAKER_PATH=/app/pipeline/wintermaker
WINTERMAKER_DATA=/app/data
```

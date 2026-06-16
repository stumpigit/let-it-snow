# Let It Snow — Setup

## Local Development

```bash
# Clone repo
git clone https://github.com/stumpigit/let-it-snow.git
cd let-it-snow

# Start dependencies
docker compose up -d postgres redis

# Backend
cd /root/workspace/let-it-snow
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000

# Frontend
cd frontend
npm install
npm run dev
```

## Docker

```bash
docker compose up -d
```

## HAProxy

See `HAProxy.md` for production routing.

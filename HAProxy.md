# HAProxy Integration

The Let It Snow app should be accessible at:
- **Frontend:** `https://hermes.suter-burri.ch/letsnow/`
- **Backend API:** `https://hermes.suter-burri.ch/api/letsnow/`

## HAProxy Configuration

Add to your HAProxy config (frontend section):

```
frontend https_front
  # ... existing rules ...

  # Let It Snow
  acl is_letsnow path_beg /letsnow/
  use_backend letsnow_frontend if is_letsnow

  acl is_letsnow_api path_beg /api/letsnow/
  use_backend letsnow_backend if is_letsnow_api
```

Backend configuration:

```
backend letsnow_frontend
  balance roundrobin
  server letsnow-frontend 127.0.0.1:5173 check

backend letsnow_backend
  balance roundrobin
  server letsnow-backend 127.0.0.1:8000 check
```

Or if running in Docker:

```
backend letsnow_frontend
  balance roundrobin
  server letsnow-frontend letsnow-frontend-1:5173 check

backend letsnow_backend
  balance roundrobin
  server letsnow-backend letsnow-backend-1:8000 check
```

## SSL Termination

SSL is handled by HAProxy (Let's Encrypt). The app serves over HTTP internally.

## Path rewriting

If needed, add path prefix stripping in frontend:

```
http-request del-header Host
http-request set-header Host letsnow-backend-1
http-request set-header X-Forwarded-Prefix /letsnow
```

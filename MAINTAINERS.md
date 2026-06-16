# Let It Snow — Maintainers

- Christoph Suter (stumpigit)

---

## Workflow

1. All changes via PRs
2. Code review required before merge
3. CI: linter + type checks
4. Manual QA for new features

## Release Process

1. Update version in `app/__init__.py`
2. Tag with `vX.Y.Z`
3. Build Docker images
4. Deploy to production

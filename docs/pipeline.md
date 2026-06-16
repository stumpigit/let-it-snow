# Let It Snow — Pipeline

## Overview

Uses [wintermaker](https://github.com/stumpigit/wintermaker) for orthophoto generation.

## Steps

1. **prepare-region** — Download data (SWISSIMAGE, swissALTI3D, swissTLM3D)
2. **run-all** — Full pipeline: harmonize → masks → terrain → snow → render → qa
3. **run-all-snow** — Snow-only (skip harmonize/masks/terrain)
4. **viewer-export** — Export 3D assets

## Profiles

Configured via `config/rendering_profiles/{name}.yaml`.

- **default** — Standard winter look
- Custom profiles can be added

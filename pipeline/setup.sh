#!/bin/bash
set -e

# Create data directories
mkdir -p data/raw/regions
mkdir -p data/intermediate/tiles
mkdir -p data/output/tiles
mkdir -p data/viewer/data

# Link wintermaker
ln -sf /app/pipeline/wintermaker/wintermaker .

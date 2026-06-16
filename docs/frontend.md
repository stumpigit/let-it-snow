# Let It Snow — Frontend

## Stack

- **Svelte 5** — UI framework
- **Three.js** — 3D viewer
- **TypeScript** — Type safety

## Components

### ThreeViewer

3D viewer for winter orthophoto + DEM.

```svelte
<ThreeViewer 
  sceneUrl="/path/to/scene.json"
  showSnow={true}
  elevationFactor={1.0}
/>
```

### GPXViewer

Display GPX tracks on the map.

```svelte
<GPXViewer>
  <ThreeViewer {...props} />
</GPXViewer>
```

## API

```typescript
const res = await fetch('/api/projects');
const projects = await res.json();
```

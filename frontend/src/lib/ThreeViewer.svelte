<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { TerrainViewer } from './ThreeViewer';

  let {
    sceneUrl = '',
    textureMode = 'winter',
    elevationModel = 'snow_surface',
    elevationFactor = 1.0,
  }: {
    sceneUrl?: string;
    textureMode?: 'winter' | 'summer';
    elevationModel?: 'snow_surface' | 'base';
    elevationFactor?: number;
  } = $props();

  let container: HTMLDivElement;
  let viewer = $state<TerrainViewer | null>(null);
  let status = $state('Keine Szene geladen');
  let error = $state('');
  let loadProgress = $state(0);
  let loading = $state(false);
  let loadedSceneUrl = $state('');

  onMount(() => {
    viewer = new TerrainViewer(container);
    return () => {
      viewer?.dispose();
      viewer = null;
      loadedSceneUrl = '';
    };
  });

  $effect(() => {
    const activeViewer = viewer;
    const url = sceneUrl;

    if (!url) {
      status = 'Viewer-Daten exportieren, um das Gelände anzuzeigen';
      loading = false;
      loadProgress = 0;
      error = '';
      loadedSceneUrl = '';
      return;
    }

    if (!activeViewer) {
      status = 'Viewer wird initialisiert…';
      loading = true;
      loadProgress = 0;
      error = '';
      return;
    }

    if (url === loadedSceneUrl) return;

    let cancelled = false;

    (async () => {
      error = '';
      status = 'Lade Szene…';
      loading = true;
      loadProgress = 0.02;
      await tick();

      try {
        const message = await activeViewer.loadScene(url, {
          textureMode,
          elevationModel,
          elevationFactor,
          onProgress: (stage, progress) => {
            if (cancelled) return;
            status = stage;
            loadProgress = Math.max(0.02, Math.min(1, progress));
          },
        });
        if (!cancelled) {
          loadedSceneUrl = url;
          status = message;
          loadProgress = 1;
          await tick();
          loading = false;
        }
      } catch (e) {
        if (!cancelled) {
          error = e instanceof Error ? e.message : String(e);
          status = 'Laden fehlgeschlagen';
          loading = false;
          loadedSceneUrl = '';
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  });

  $effect(() => {
    const activeViewer = viewer;
    const url = sceneUrl;
    const tex = textureMode;
    const elev = elevationModel;
    const factor = elevationFactor;

    if (!activeViewer || !url || url !== loadedSceneUrl) return;

    try {
      status = activeViewer.updateOptions({
        textureMode: tex,
        elevationModel: elev,
        elevationFactor: factor,
      });
      error = '';
    } catch (e) {
      error = e instanceof Error ? e.message : String(e);
    }
  });
</script>

<div class="viewer-shell">
  <div class="viewer-stage">
    <div class="viewer-container" bind:this={container}></div>
    {#if loading}
      <div class="viewer-loading-overlay" aria-live="polite" aria-busy="true">
        <div class="viewer-loading-card">
          <strong>{status}</strong>
          <div class="load-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(loadProgress * 100)}>
            <div class="load-progress-fill" style="width: {Math.round(loadProgress * 100)}%"></div>
          </div>
          <small>{Math.round(loadProgress * 100)}%</small>
        </div>
      </div>
    {/if}
  </div>
  <div class="viewer-status">
    {#if error}
      <span class="error">{error}</span>
    {/if}
  </div>
</div>

<style>
  .viewer-shell {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
    min-height: 0;
    height: 100%;
  }

  .viewer-stage {
    position: relative;
    flex: 1;
    min-height: 0;
  }

  .viewer-container {
    position: absolute;
    inset: 0;
    border: 1px solid #334155;
    border-radius: 0.5rem;
    overflow: hidden;
    background: #0f172a;
  }

  .viewer-container :global(canvas) {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;
  }

  .viewer-status {
    flex-shrink: 0;
    font-size: 0.875rem;
    color: #94a3b8;
    display: grid;
    gap: 0.35rem;
  }

  .load-progress {
    width: 100%;
    height: 10px;
    border-radius: 999px;
    background: #1e293b;
    overflow: hidden;
  }

  .load-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #22d3ee 0%, #3b82f6 100%);
    transition: width 180ms linear;
  }

  .viewer-loading-overlay {
    position: absolute;
    inset: 0;
    background: rgba(2, 6, 23, 0.78);
    display: grid;
    place-items: center;
    z-index: 20;
    border-radius: 0.5rem;
    pointer-events: all;
  }

  .viewer-loading-card {
    width: min(380px, 92%);
    background: rgba(15, 23, 42, 0.96);
    border: 1px solid #475569;
    border-radius: 0.75rem;
    padding: 1rem;
    display: grid;
    gap: 0.55rem;
    color: #e2e8f0;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  }

  .viewer-loading-card strong {
    font-size: 0.95rem;
    line-height: 1.35;
  }

  .viewer-loading-card small {
    color: #cbd5e1;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .error {
    color: #f87171;
  }
</style>

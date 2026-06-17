<script lang="ts">
  import { onMount } from 'svelte';
  import { TerrainViewer } from './ThreeViewer';

  let {
    sceneUrl = '',
    showSnow = true,
    elevationFactor = 1.0,
  }: {
    sceneUrl?: string;
    showSnow?: boolean;
    elevationFactor?: number;
  } = $props();

  let container: HTMLDivElement;
  let viewer: TerrainViewer | null = null;
  let status = 'No scene loaded';
  let error = '';

  onMount(() => {
    viewer = new TerrainViewer(container);
    return () => viewer?.dispose();
  });

  $effect(() => {
    if (!viewer || !sceneUrl) {
      status = sceneUrl ? 'Loading viewer…' : 'Export viewer assets to display terrain';
      return;
    }

    error = '';
    status = 'Loading scene…';
    viewer
      .load(sceneUrl, { showSnow, elevationFactor })
      .then((message) => {
        status = message;
      })
      .catch((e: Error) => {
        error = e.message;
        status = 'Failed to load scene';
      });
  });
</script>

<div class="viewer-shell">
  <div class="viewer-container" bind:this={container}></div>
  <div class="viewer-status">
    {#if error}
      <span class="error">{error}</span>
    {:else}
      <span>{status}</span>
    {/if}
  </div>
</div>

<style>
  .viewer-shell {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-height: 420px;
    height: 55vh;
  }

  .viewer-container {
    flex: 1;
    min-height: 360px;
    border: 1px solid #334155;
    border-radius: 0.5rem;
    overflow: hidden;
    background: #0f172a;
  }

  .viewer-container :global(canvas) {
    display: block;
    width: 100%;
    height: 100%;
  }

  .viewer-status {
    font-size: 0.875rem;
    color: #94a3b8;
  }

  .error {
    color: #f87171;
  }
</style>

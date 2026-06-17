<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let profile: string = 'default';
  export let resolutionM: number = 0.5;
  export let maxTextureDim: number = 8192;
  export let stride: number = 2;

  const dispatch = createEventDispatcher();

  function handleApply() {
    dispatch('apply', {
      profile,
      resolutionM,
      maxTextureDim,
      stride,
    });
  }
</script>

<div class="rendering-controls">
  <h3>Rendering Parameters</h3>

  <div class="field">
    <label>Profile</label>
    <select bind:value={profile}>
      <option value="default">default</option>
    </select>
  </div>

  <div class="field">
    <label>Resolution (m/px)</label>
    <input type="number" bind:value={resolutionM} step="0.1" min="0.1" max="2.0" />
  </div>

  <div class="field">
    <label>Max Texture Dim</label>
    <select bind:value={maxTextureDim}>
      <option value="4096">4096</option>
      <option value="8192">8192</option>
      <option value="16384">16384</option>
    </select>
  </div>

  <div class="field">
    <label>Mesh Stride</label>
    <input type="number" bind:value={stride} min="1" max="16" />
  </div>

  <button on:click={handleApply}>Apply Parameters</button>
</div>

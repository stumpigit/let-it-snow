<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let name = '';
  export let description = '';
  export let minx = 2788000;
  export let miny = 1181000;
  export let maxx = 2792000;
  export let maxy = 1185000;

  const dispatch = createEventDispatcher();

  function handleSubmit(e: Event) {
    e.preventDefault();
    dispatch('submit', {
      name,
      description,
      bbox: [minx, miny, maxx, maxy],
    });
  }
</script>

<form on:submit={handleSubmit} class="project-form">
  <div class="field">
    <label>Name</label>
    <input type="text" bind:value={name} required />
  </div>

  <div class="field">
    <label>Description</label>
    <textarea bind:value={description}></textarea>
  </div>

  <div class="bbox">
    <h4>Bounding Box (EPSG:2056)</h4>
    <div class="row">
      <label>Min X</label>
      <input type="number" bind:value={minx} />
    </div>
    <div class="row">
      <label>Min Y</label>
      <input type="number" bind:value={miny} />
    </div>
    <div class="row">
      <label>Max X</label>
      <input type="number" bind:value={maxx} />
    </div>
    <div class="row">
      <label>Max Y</label>
      <input type="number" bind:value={maxy} />
    </div>
  </div>

  <button type="submit">Create Project</button>
</form>

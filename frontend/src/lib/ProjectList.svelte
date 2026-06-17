<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let projects: Array<{id: number; name: string; description?: string; bbox: number[]}> = [];
  let loading = true;
  let error: string | null = null;
  let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  onMount(async () => {
    try {
      const res = await fetch(`${apiUrl}/projects`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      projects = await res.json();
    } catch (e: any) {
      error = e.message;
    } finally {
      loading = false;
    }
  });
</script>

<div class="project-list">
  <h2>Projects</h2>

  {#if loading}
    <p>Loading projects...</p>
  {:else if error}
    <p class="error">Error: {error}</p>
  {:else if projects.length === 0}
    <p>No projects yet. Create one to get started!</p>
  {:else}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>BBOX</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {#each projects as project}
          <tr>
            <td><a href="/project/{project.id}">{project.name}</a></td>
            <td>{project.description || '-'}</td>
            <td>{project.bbox.join(', ')}</td>
            <td>{new Date().toLocaleDateString()}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

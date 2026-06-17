<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  export let selectedId: number | null = null;

  type Project = {
    id: number;
    name: string;
    description?: string;
    bbox: number[];
    created_at?: string;
  };

  const dispatch = createEventDispatcher<{ select: Project }>();

  let projects: Project[] = [];
  let loading = true;
  let error: string | null = null;

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

  function selectProject(project: Project) {
    dispatch('select', project);
  }

  function formatDate(value?: string) {
    if (!value) return '-';
    return new Date(value).toLocaleDateString();
  }
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
          <tr
            class:selected={project.id === selectedId}
            on:click={() => selectProject(project)}
            on:keydown={(e) => e.key === 'Enter' && selectProject(project)}
            tabindex="0"
            role="button"
          >
            <td>{project.name}</td>
            <td>{project.description || '-'}</td>
            <td>{project.bbox.join(', ')}</td>
            <td>{formatDate(project.created_at)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
  }

  th,
  td {
    border-bottom: 1px solid #334155;
    padding: 0.5rem;
    text-align: left;
    vertical-align: top;
  }

  tr {
    cursor: pointer;
  }

  tr:hover,
  tr.selected {
    background: #334155;
  }

  .error {
    color: #f87171;
  }
</style>

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
  {#if loading}
    <div class="loading">
      <div class="spinner"></div>
      <span>Projekte laden...</span>
    </div>
  {:else if error}
    <div class="error">
      <span>Error: {error}</span>
    </div>
  {:else if projects.length === 0}
    <div class="empty">
      <p>Keine Projekte vorhanden. Erstellen Sie ein neues Projekt.</p>
    </div>
  {:else}
    <ul class="projects">
      {#each projects as project}
        <li
          class="project-item {project.id === selectedId ? 'selected' : ''}"
          on:click={() => selectProject(project)}
          on:keydown={(e) => e.key === 'Enter' && selectProject(project)}
          tabindex="0"
          role="button"
        >
          <div class="project-header">
            <div class="project-name">{project.name}</div>
            {#if project.id === selectedId}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            {/if}
          </div>
          {#if project.description}
            <div class="project-description">{project.description}</div>
          {/if}
          <div class="project-meta">
            <span class="bbox">{project.bbox.join(', ')}</span>
            <span class="date">{formatDate(project.created_at)}</span>
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .project-list {
    width: 100%;
  }

  .loading,
  .error,
  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    color: #94a3b8;
  }

  .loading .spinner,
  .error .spinner {
    width: 24px;
    height: 24px;
    border: 2px solid #334155;
    border-top-color: #38bdf8;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 0.5rem;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .projects {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .project-item {
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    background: #0f172a;
    border-radius: 0.5rem;
    border: 1px solid #334155;
    transition: all 0.2s;
    cursor: pointer;
  }

  .project-item:hover {
    border-color: #38bdf8;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .project-item.selected {
    background: rgba(56, 189, 248, 0.05);
    border-color: #38bdf8;
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.35rem;
  }

  .project-name {
    font-weight: 600;
    color: #f8fafc;
  }

  .project-description {
    font-size: 0.8125rem;
    color: #94a3b8;
    margin-bottom: 0.35rem;
  }

  .project-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #64748b;
  }

  .error {
    color: #f87171;
  }
</style>

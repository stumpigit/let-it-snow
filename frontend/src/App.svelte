<script lang="ts">
  import ProjectList from './lib/ProjectList.svelte';
  import ProjectForm from './lib/ProjectForm.svelte';
  import GPXUpload from './lib/GPXUpload.svelte';
  import RenderingControls from './lib/RenderingControls.svelte';
  import TaskProgress from './lib/TaskProgress.svelte';
  import ThreeViewer from './lib/ThreeViewer.svelte';

  type Project = {
    id: number;
    name: string;
    description?: string;
    bbox: number[];
  };

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  let listKey = 0;
  let selectedProject: Project | null = null;
  let taskId: string | null = null;
  let actionError: string | null = null;
  let tileId = '';
  let configPath = '';
  let sceneUrl = '';
  let renderParams = {
    profile: 'default',
    resolutionM: 0.5,
    maxTextureDim: 8192,
    stride: 2,
  };

  async function handleCreateProject(
    event: CustomEvent<{ name: string; description: string; bbox: number[] }>,
  ) {
    actionError = null;
    try {
      const res = await fetch(`${apiUrl}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event.detail),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      listKey += 1;
    } catch (e: any) {
      actionError = e.message;
    }
  }

  function regionSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function handleSelectProject(event: CustomEvent<Project>) {
    selectedProject = event.detail;
    tileId = `${regionSlug(event.detail.name)}_001`;
    actionError = null;
    taskId = null;
    configPath = '';
    sceneUrl = '';
  }

  function handleTaskComplete(event: CustomEvent<{ status: string; progress?: Record<string, unknown> }>) {
    const result = event.detail.progress;
    if (!result || event.detail.status !== 'SUCCESS') return;
    if (typeof result.config_path === 'string') configPath = result.config_path;
    if (typeof result.tile_id === 'string') tileId = result.tile_id;
    if (typeof result.scene_url === 'string') {
      sceneUrl = `${apiUrl}${result.scene_url}`;
    } else if (typeof result.tile_id === 'string') {
      sceneUrl = `${apiUrl}/viewer/data/${result.tile_id}/scene.json`;
    }
  }

  function handleRenderApply(
    event: CustomEvent<{
      profile: string;
      resolutionM: number;
      maxTextureDim: number;
      stride: number;
    }>,
  ) {
    renderParams = event.detail;
  }

  async function startTask(url: string, body?: Record<string, unknown>) {
    actionError = null;
    taskId = null;
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      taskId = data.task_id;
    } catch (e: any) {
      actionError = e.message;
    }
  }

  async function handlePrepareRegion() {
    if (!selectedProject) return;
    const { id, name, bbox } = selectedProject;
    await startTask(`${apiUrl}/tasks/prepare`, {
      project_id: id,
      name,
      bbox,
    });
  }

  async function handleRunPipeline() {
    if (!selectedProject) return;
    await startTask(`${apiUrl}/tasks/run-pipeline`, {
      project_id: selectedProject.id,
      tile_id: tileId,
      profile: renderParams.profile,
      config_path: configPath,
    });
  }

  async function handleRunSnowPipeline() {
    if (!selectedProject) return;
    await startTask(`${apiUrl}/tasks/run-snow`, {
      project_id: selectedProject.id,
      tile_id: tileId,
      profile: renderParams.profile,
      config_path: configPath,
    });
  }

  async function handleExportViewer() {
    if (!selectedProject) return;
    await startTask(`${apiUrl}/tasks/export-viewer`, {
      project_id: selectedProject.id,
      tile_id: tileId,
      config_path: configPath,
      params: {
        profile: renderParams.profile,
        resolution_m: renderParams.resolutionM,
        max_texture_dim: renderParams.maxTextureDim,
        stride: renderParams.stride,
      },
    });
  }
</script>

<div class="app">
  <header>
    <h1>Let It Snow</h1>
    <p>Multi-user 3D WebApp for winter orthophoto rendering</p>
  </header>

  <div class="layout">
    <aside class="sidebar">
      <section>
        <h2>Create Project</h2>
        <ProjectForm on:submit={handleCreateProject} />
      </section>

      <section>
        {#key listKey}
          <ProjectList
            {apiUrl}
            selectedId={selectedProject?.id ?? null}
            on:select={handleSelectProject}
          />
        {/key}
      </section>
    </aside>

    <main class="workspace">
      {#if selectedProject}
        <section class="panel">
          <h2>{selectedProject.name}</h2>
          {#if selectedProject.description}
            <p class="muted">{selectedProject.description}</p>
          {/if}
          <p class="muted">BBox: {selectedProject.bbox.join(', ')}</p>

          <p class="muted">
            Region data folder: <code>buergle/</code> · tile id in config: <code>buergle_001</code>
          </p>

          <div class="field-row">
            <label>
              Tile ID
              <input type="text" bind:value={tileId} placeholder="buergle_001" />
            </label>
            <label>
              Config path
              <input
                type="text"
                bind:value={configPath}
                placeholder="auto-detected from tile id if empty"
              />
            </label>
          </div>

          <div class="actions">
            <button type="button" on:click={handlePrepareRegion}>Prepare Region</button>
            <button type="button" on:click={handleRunPipeline}>Run Pipeline</button>
            <button type="button" on:click={handleRunSnowPipeline}>Run Snow Pipeline</button>
            <button type="button" on:click={handleExportViewer}>Export Viewer</button>
            <button
              type="button"
              class="secondary"
              on:click={() => {
                if (tileId) sceneUrl = `${apiUrl}/viewer/data/${tileId}/scene.json`;
              }}
              disabled={!tileId}
            >
              Load Viewer
            </button>
          </div>
        </section>

        <div class="grid">
          <section class="panel">
            <GPXUpload projectId={selectedProject.id} {apiUrl} />
          </section>

          <section class="panel">
            <RenderingControls
              profile={renderParams.profile}
              resolutionM={renderParams.resolutionM}
              maxTextureDim={renderParams.maxTextureDim}
              stride={renderParams.stride}
              on:apply={handleRenderApply}
            />
          </section>
        </div>

        {#if taskId}
          <section class="panel">
            <h3>Task Progress</h3>
            <TaskProgress {taskId} {apiUrl} on:complete={handleTaskComplete} />
          </section>
        {/if}

        <section class="panel viewer-panel">
          <h3>3D Viewer</h3>
          <ThreeViewer {sceneUrl} showSnow={true} elevationFactor={1.0} />
          {#if !sceneUrl}
            <p class="muted">Run Export Viewer to load terrain here.</p>
          {/if}
        </section>
      {:else}
        <section class="panel empty">
          <h2>Select a project</h2>
          <p class="muted">Create a project or pick one from the list to manage GPX tracks and run the pipeline.</p>
        </section>
      {/if}

      {#if actionError}
        <p class="error">Error: {actionError}</p>
      {/if}
    </main>
  </div>
</div>

<style>
  .app {
    min-height: 100vh;
    padding: 1.5rem;
  }

  header {
    margin-bottom: 1.5rem;
  }

  header h1 {
    font-size: 1.75rem;
    margin-bottom: 0.25rem;
  }

  header p,
  .muted {
    color: #94a3b8;
  }

  .layout {
    display: grid;
    grid-template-columns: minmax(280px, 360px) 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  .sidebar,
  .panel {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 0.75rem;
    padding: 1rem;
  }

  .sidebar section + section,
  .workspace .panel + .panel {
    margin-top: 1rem;
  }

  .workspace {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }

  .field-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.75rem;
    margin: 1rem 0;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    font-size: 0.875rem;
    color: #cbd5e1;
  }

  input,
  textarea,
  select,
  button {
    font: inherit;
  }

  input,
  textarea,
  select {
    background: #0f172a;
    border: 1px solid #475569;
    border-radius: 0.5rem;
    color: #e2e8f0;
    padding: 0.5rem 0.75rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  button {
    background: #2563eb;
    border: none;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    padding: 0.55rem 0.9rem;
  }

  button:hover {
    background: #1d4ed8;
  }

  button.secondary {
    background: #334155;
  }

  button.secondary:hover {
    background: #475569;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .viewer-panel {
    min-height: 480px;
  }

  .empty {
    min-height: 320px;
  }

  .error {
    color: #f87171;
  }

  @media (max-width: 900px) {
    .layout {
      grid-template-columns: 1fr;
    }
  }
</style>

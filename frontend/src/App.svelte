<script lang="ts">
  import ProjectList from './lib/ProjectList.svelte';
  import ProjectForm from './lib/ProjectForm.svelte';
  import GPXUpload from './lib/GPXUpload.svelte';
  import RenderingControls from './lib/RenderingControls.svelte';
  import TaskProgress from './lib/TaskProgress.svelte';
  import ThreeViewer from './lib/ThreeViewer.svelte';
  import Icon from './lib/Icon.svelte';

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

  // Tab state
  let activeTab = 'processing';

  // Sidebar state
  let sidebarOpen = true;

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
  <header class="app-header">
    <div class="header-content">
      <button
        class="sidebar-toggle"
        on:click={() => (sidebarOpen = !sidebarOpen)}
        title={sidebarOpen ? 'Sidebar ausblenden' : 'Sidebar anzeigen'}
      >
        <Icon name={sidebarOpen ? 'menu' : 'menu'} size={20} />
      </button>
      <div class="logo">
        <Icon name="snow" size={32} className="logo-icon" />
        <div>
          <h1>Let It Snow</h1>
          <p>3D-Orthophoto-Renderer</p>
        </div>
      </div>
    </div>
    <div class="user-menu">
      <button class="btn-icon" title="Hilfe">
        <Icon name="alert" size={20} />
      </button>
    </div>
  </header>

  <div class="layout">
    {#if sidebarOpen}
      <aside class="sidebar">
        <div class="sidebar-content">
          <section class="sidebar-section">
            <div class="section-header">
              <Icon name="folder" size={18} />
              <h3>Projekte</h3>
            </div>
            <ProjectList
              {apiUrl}
              selectedId={selectedProject?.id ?? null}
              on:select={handleSelectProject}
            />
          </section>

          <section class="sidebar-section">
            <div class="section-header">
              <Icon name="settings" size={18} />
              <h3>Neues Projekt</h3>
            </div>
            <ProjectForm on:submit={handleCreateProject} />
          </section>

          {#if selectedProject}
            <section class="sidebar-section active-project">
              <div class="section-header">
                <Icon name="folder-open" size={18} />
                <h3>Aktives Projekt</h3>
              </div>
              <div class="active-project-info">
                <strong>{selectedProject.name}</strong>
                {#if selectedProject.description}
                  <p class="muted">{selectedProject.description}</p>
                {/if}
                <div class="bbox-badge">
                  <Icon name="sliders" size={12} />
                  <span>{selectedProject.bbox.join(', ')}</span>
                </div>
              </div>
            </section>
          {/if}
        </div>
      </aside>
    {/if}

    <main class="workspace">
      {#if selectedProject}
        <section class="panel project-panel">
          <div class="panel-header">
            <h2>{selectedProject.name}</h2>
            {#if selectedProject.description}
              <p class="muted">{selectedProject.description}</p>
            {/if}
            <div class="tabs">
              <button
                class={activeTab === 'processing' ? 'tab active' : 'tab'}
                on:click={() => (activeTab = 'processing')}
              >
                <Icon name="play" size={16} className="tab-icon" />
                <span>Verarbeitung</span>
              </button>
              <button
                class={activeTab === 'viewer' ? 'tab active' : 'tab'}
                on:click={() => (activeTab = 'viewer')}
              >
                <Icon name="eye" size={16} className="tab-icon" />
                <span>3D Viewer</span>
              </button>
            </div>
          </div>

          {#if activeTab === 'processing'}
            <div class="processing-grid">
              <section class="panel">
                <h3>Daten vorbereiten</h3>
                <p class="muted">Region herunterladen und konfigurieren</p>
                <button type="button" class="btn-primary" on:click={handlePrepareRegion}>
                  <Icon name="cloud-upload" size={18} className="btn-icon" />
                  Region vorbereiten
                </button>
              </section>

              <section class="panel">
                <h3>Vollständiger Pipeline</h3>
                <p class="muted">Harmonisierung → Masken → Terrain → Snow → Render → QA</p>
                <button type="button" class="btn-primary" on:click={handleRunPipeline}>
                  <Icon name="play" size={18} className="btn-icon" />
                  Pipeline starten
                </button>
              </section>

              <section class="panel">
                <h3>Nur Schnee-Processing</h3>
                <p class="muted">Ab Schneeoberfläche (benötigt vorherige Schritte)</p>
                <button type="button" class="btn-secondary" on:click={handleRunSnowPipeline}>
                  <Icon name="snow" size={18} className="btn-icon" />
                  Schnee-Pipeline
                </button>
              </section>

              <section class="panel">
                <h3>3D Viewer exportieren</h3>
                <p class="muted">Mesh und Texturen für Web-Viewer generieren</p>
                <button type="button" class="btn-secondary" on:click={handleExportViewer}>
                  <Icon name="download" size={18} className="btn-icon" />
                  Viewer exportieren
                </button>
              </section>
            </div>

            <section class="panel">
              <h3>Parameter</h3>
              <div class="parameters-grid">
                <div class="param-item">
                  <label>Rendering Profil</label>
                  <select bind:value={renderParams.profile}>
                    <option value="default">Default</option>
                  </select>
                </div>
                <div class="param-item">
                  <label>Auflösung (m/px)</label>
                  <input
                    type="number"
                    bind:value={renderParams.resolutionM}
                    step="0.1"
                    min="0.1"
                    max="2.0"
                  />
                </div>
                <div class="param-item">
                  <label>Max Texture</label>
                  <select bind:value={renderParams.maxTextureDim}>
                    <option value="4096">4096 px</option>
                    <option value="8192">8192 px</option>
                    <option value="16384">16384 px</option>
                  </select>
                </div>
                <div class="param-item">
                  <label>Mesh Stride</label>
                  <input
                    type="number"
                    bind:value={renderParams.stride}
                    min="1"
                    max="16"
                  />
                </div>
              </div>
            </section>

            <section class="panel">
              <GPXUpload projectId={selectedProject.id} {apiUrl} />
            </section>

            {#if taskId}
              <section class="panel progress-panel">
                <TaskProgress {taskId} {apiUrl} on:complete={handleTaskComplete} />
              </section>
            {/if}
          {:else}
            <section class="panel viewer-panel">
              <div class="panel-header">
                <h3>3D Viewer</h3>
                <button
                  type="button"
                  class="btn-secondary"
                  on:click={() => {
                    if (tileId) sceneUrl = `${apiUrl}/viewer/data/${tileId}/scene.json`;
                  }}
                  disabled={!tileId}
                >
                  Viewer laden
                </button>
              </div>
              <ThreeViewer {sceneUrl} showSnow={true} elevationFactor={1.0} />
              {#if !sceneUrl}
                <p class="muted empty-message">
                  <Icon name="cloud" size={48} className="empty-icon" />
                  Noch keine Viewer-Daten. Führen Sie "Viewer exportieren" aus.
                </p>
              {/if}
            </section>
          {/if}
        </section>
      {:else}
        <section class="panel empty-state">
          <Icon name="cloud" size={64} className="empty-icon" />
          <h2>Kein Projekt ausgewählt</h2>
          <p class="muted">
            Wählen Sie ein Projekt aus der Sidebar oder erstellen Sie ein neues Projekt.
          </p>
        </section>
      {/if}

      {#if actionError}
        <div class="error-banner">
          <Icon name="alert" size={20} />
          <span>Error: {actionError}</span>
        </div>
      {/if}
    </main>
  </div>
</div>

<style>
  .app {
    min-height: 100vh;
    background: #0f1115;
    color: #e2e8f0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  }

  /* Header */
  .app-header {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    border-bottom: 1px solid #334155;
    padding: 0.75rem 1.5rem;
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .sidebar-toggle {
    display: none;
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.375rem;
  }

  .sidebar-toggle:hover {
    background: #334155;
    color: #f8fafc;
  }

  @media (max-width: 900px) {
    .sidebar-toggle {
      display: block;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .logo-icon {
    color: #38bdf8;
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .logo h1 {
    font-size: 1.5rem;
    margin: 0;
    color: #f8fafc;
  }

  .logo p {
    margin: 0;
    font-size: 0.875rem;
    color: #94a3b8;
  }

  .user-menu {
    display: flex;
    gap: 0.5rem;
  }

  .btn-icon {
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.375rem;
  }

  .btn-icon:hover {
    background: #334155;
    color: #f8fafc;
  }

  /* Layout */
  .layout {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
    min-height: calc(100vh - 60px);
  }

  /* Sidebar */
  .sidebar {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 1rem;
    padding: 1rem;
    position: sticky;
    top: 90px;
    height: calc(100vh - 110px);
    overflow-y: auto;
  }

  @media (max-width: 900px) {
    .sidebar {
      display: none;
    }
  }

  .sidebar-section {
    margin-bottom: 1.5rem;
  }

  .sidebar-section:last-child {
    margin-bottom: 0;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    padding: 0.5rem;
    background: #0f172a;
    border-radius: 0.5rem;
  }

  .section-header h3 {
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #94a3b8;
  }

  .active-project {
    background: rgba(56, 189, 248, 0.05);
    border: 1px solid rgba(56, 189, 248, 0.2);
  }

  .active-project .section-header {
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.1);
  }

  .active-project-info {
    padding: 0.75rem;
    background: #0f172a;
    border-radius: 0.5rem;
  }

  .active-project-info strong {
    display: block;
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
    color: #f8fafc;
  }

  .active-project-info p {
    margin: 0.25rem 0 0.75rem;
    font-size: 0.875rem;
    color: #94a3b8;
  }

  .bbox-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    background: #1e293b;
    border-radius: 0.25rem;
    color: #94a3b8;
  }

  /* Workspace */
  .workspace {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .panel {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 1rem;
    padding: 1.25rem;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .panel-header h2,
  .panel-header h3 {
    margin: 0;
  }

  .tabs {
    display: flex;
    gap: 0.25rem;
  }

  .tab {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: none;
    border: none;
    border-radius: 0.375rem;
    color: #94a3b8;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.875rem;
  }

  .tab:hover {
    background: #334155;
    color: #f8fafc;
  }

  .tab.active {
    background: #38bdf8;
    color: #0f172a;
  }

  .tab-icon {
    color: inherit;
  }

  /* Processing Grid */
  .processing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .processing-grid h3,
  .panel h3 {
    font-size: 1rem;
    margin: 0 0 0.5rem;
    color: #f8fafc;
  }

  .processing-grid p,
  .panel p.muted {
    font-size: 0.875rem;
    color: #94a3b8;
    margin: 0 0 1rem;
  }

  /* Buttons */
  .btn-primary,
  .btn-secondary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s;
    width: 100%;
    justify-content: center;
  }

  .btn-primary {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
  }

  .btn-primary:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }

  .btn-secondary {
    background: #334155;
    color: #e2e8f0;
  }

  .btn-secondary:hover {
    background: #475569;
    transform: translateY(-1px);
  }

  .btn-icon {
    width: 18px;
    height: 18px;
  }

  /* Parameters */
  .parameters-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .param-item {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .param-item label {
    font-size: 0.875rem;
    color: #cbd5e1;
  }

  .param-item input,
  .param-item select {
    background: #0f172a;
    border: 1px solid #475569;
    border-radius: 0.5rem;
    color: #e2e8f0;
    padding: 0.5rem;
    font: inherit;
  }

  .param-item input:focus,
  .param-item select:focus {
    outline: none;
    border-color: #38bdf8;
    box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
  }

  /* Progress Panel */
  .progress-panel .task-progress {
    padding: 1rem;
    background: #0f172a;
    border-radius: 0.5rem;
  }

  /* Viewer Panel */
  .viewer-panel {
    min-height: 600px;
    display: flex;
    flex-direction: column;
  }

  .viewer-panel > div {
    flex: 1;
    min-height: 0;
  }

  .empty-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    color: #94a3b8;
  }

  .empty-icon {
    color: #334155;
    margin-bottom: 1rem;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  /* Empty State */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    text-align: center;
  }

  .empty-state h2 {
    font-size: 1.75rem;
    margin: 1rem 0 0.5rem;
    color: #f8fafc;
  }

  /* Error */
  .error-banner {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 0.5rem;
    color: #ef4444;
  }

  .error-banner svg {
    flex-shrink: 0;
  }

  /* Muted text */
  .muted {
    color: #94a3b8;
  }
</style>

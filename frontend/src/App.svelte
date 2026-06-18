<script lang="ts">
  import { onMount } from 'svelte';
  import ProjectList from './lib/ProjectList.svelte';
  import GPXUpload from './lib/GPXUpload.svelte';
  import TaskProgress from './lib/TaskProgress.svelte';
  import ThreeViewer from './lib/ThreeViewer.svelte';
  import PipelineActions from './lib/PipelineActions.svelte';
  import ProjectNewModal from './lib/ProjectNewModal.svelte';
  import Icon from './lib/Icon.svelte';

  type Project = { id: number; name: string; description?: string; bbox: number[]; created_at?: string };

  const apiUrl = (import.meta as any).env?.VITE_API_URL || 'http://localhost:8000';

  type PipelineProgress = {
    prepare: number;
    harmonize: number;
    masks: number;
    terrain: number;
    snow: number;
    render: number;
    qa: number;
    viewer: number;
  };

  const emptyProgress = (): PipelineProgress => ({
    prepare: 0,
    harmonize: 0,
    masks: 0,
    terrain: 0,
    snow: 0,
    render: 0,
    qa: 0,
    viewer: 0,
  });

  // --- State ---
  let selectedProject = $state<Project | null>(null);
  let view = $state<'home' | 'project'>('home');
  let activeTab = $state<'pipeline' | 'viewer'>('pipeline');
  const mobileQuery = typeof window !== 'undefined' ? window.matchMedia('(max-width: 800px)') : null;
  let isMobile = $state(mobileQuery?.matches ?? false);
  let sidebarOpen = $state(!(mobileQuery?.matches ?? false));

  onMount(() => {
    const mq = window.matchMedia('(max-width: 800px)');
    const apply = (mobile: boolean) => {
      isMobile = mobile;
      sidebarOpen = !mobile;
    };
    apply(mq.matches);
    const onChange = (e: MediaQueryListEvent) => apply(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  });
  let showNewProject = $state(false);
  let actionError = $state<string | null>(null);
  let projectListVersion = $state(0);

  // Per-project runtime state
  let tileId = $state('');
  let configPath = $state('');
  let sceneUrl = $state('');
  let taskId = $state<string | null>(null);
  let taskModalOpen = $state(false);
  let pipelineRunning = $state(false);
  let currentStage = $state('');
  let textureMode = $state<'winter' | 'summer'>('winter');
  let elevationModel = $state<'snow_surface' | 'base'>('snow_surface');
  let pipelineProgress = $state<PipelineProgress>(emptyProgress());
  let renderProfile = $state('default');
  let resolutionM = $state(0.5);
  let maxTextureDim = $state(8192);
  let meshStride = $state(2);
  let sceneRevision = $state(0);

  // --- Helpers ---
  function regionSlug(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9_-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  }

  async function handleCreateProject(event: CustomEvent<{ name: string; description: string; bbox: number[] }>) {
    actionError = null;
    try {
      const res = await fetch(`${apiUrl}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event.detail),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      showNewProject = false;
      projectListVersion += 1;
      // Refresh project list and auto-select
      const listRes = await fetch(`${apiUrl}/projects`);
      if (!listRes.ok) throw new Error(`HTTP ${listRes.status}`);
      const projects: Project[] = await listRes.json();
      const last = projects[projects.length - 1];
      if (last) {
        selectedProject = last;
        view = 'project';
        handleSelectProject(last);
      }
    } catch (e: any) { actionError = e.message; }
  }

  function buildSceneUrl(tile?: string): string {
    const id = tile ?? tileId;
    if (!id) return '';
    return `${apiUrl}/viewer/data/${id}/scene.json?v=${sceneRevision}`;
  }

  function applyPipelineStatus(status: {
    tile_id?: string;
    config_path?: string | null;
    scene_url?: string | null;
    progress?: Partial<PipelineProgress>;
  }) {
    if (typeof status.tile_id === 'string') tileId = status.tile_id;
    if (typeof status.config_path === 'string') configPath = status.config_path;
    if (typeof status.scene_url === 'string') sceneUrl = buildSceneUrl(status.tile_id);
    if (status.progress) {
      pipelineProgress = { ...emptyProgress(), ...status.progress };
    }
  }

  async function handleSelectProject(project: Project) {
    if (isMobile) sidebarOpen = false;
    selectedProject = project;
    tileId = `${regionSlug(project.name)}_001`;
    actionError = null;
    taskId = null;
    configPath = '';
    sceneRevision += 1;
    sceneUrl = '';
    activeTab = 'pipeline';
    pipelineProgress = emptyProgress();
    view = 'project';

    try {
      const res = await fetch(`${apiUrl}/projects/${project.id}/pipeline-status`);
      if (!res.ok) {
        actionError = `Pipeline-Status konnte nicht geladen werden (HTTP ${res.status})`;
        return;
      }
      applyPipelineStatus(await res.json());
    } catch (e: any) {
      actionError = e?.message ?? 'Pipeline-Status konnte nicht geladen werden';
    }
  }

  // --- Pipeline actions ---
  async function startTask(url: string, body: Record<string, unknown>) {
    actionError = null;
    taskId = null;
    pipelineRunning = true;
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      taskId = data.task_id;
      taskModalOpen = true;
    } catch (e: any) {
      actionError = e.message;
      pipelineRunning = false;
    }
  }

  async function handlePrepareRegion() {
    if (!selectedProject || pipelineRunning) return;
    await startTask(`${apiUrl}/tasks/prepare`, {
      project_id: selectedProject.id,
      name: selectedProject.name,
      bbox: selectedProject.bbox,
    });
  }

  async function handleRunPipeline() {
    if (!selectedProject || pipelineRunning) return;
    await startTask(`${apiUrl}/tasks/run-pipeline`, {
      project_id: selectedProject.id,
      tile_id: tileId,
      config_path: configPath,
      profile: renderProfile,
    });
  }

  async function handleRunSnowPipeline() {
    if (!selectedProject || pipelineRunning) return;
    await startTask(`${apiUrl}/tasks/run-snow`, {
      project_id: selectedProject.id,
      tile_id: tileId,
      config_path: configPath,
      profile: renderProfile,
    });
  }

  async function handleExportViewer() {
    if (!selectedProject || pipelineRunning) return;
    await startTask(`${apiUrl}/tasks/export-viewer`, {
      project_id: selectedProject.id,
      tile_id: tileId,
      config_path: configPath,
      params: {
        profile: renderProfile,
        resolution_m: resolutionM,
        max_texture_dim: Number(maxTextureDim),
        stride: meshStride,
      },
    });
  }

  async function handleTaskComplete(event: CustomEvent<{ status: string; progress?: Record<string, unknown> }>) {
    const result = event.detail.progress;
    if (!result) return;

    pipelineRunning = event.detail.status === 'RUNNING';

    if (event.detail.status === 'SUCCESS') {
      if (typeof result.config_path === 'string') configPath = result.config_path;
      if (typeof result.tile_id === 'string') tileId = result.tile_id;
      if (typeof result.scene_url === 'string') {
        sceneRevision += 1;
        sceneUrl = buildSceneUrl(
          typeof result.tile_id === 'string' ? result.tile_id : tileId,
        );
      }
      currentStage = '';
      pipelineRunning = false;

      if (selectedProject) {
        try {
          const res = await fetch(`${apiUrl}/projects/${selectedProject.id}/pipeline-status`);
          if (res.ok) applyPipelineStatus(await res.json());
        } catch {
          // Keep partial updates from the task result below.
        }
      }
    } else if (event.detail.status === 'FAILURE') {
      pipelineRunning = false;
    }

    for (const [stage, pct] of Object.entries(result)) {
      if (typeof pct === 'number' && stage in pipelineProgress) {
        pipelineProgress = { ...pipelineProgress, [stage]: pct };
      }
    }
  }

  function toggleSidebar() { sidebarOpen = !sidebarOpen; }
  function loadScene() {
    if (!tileId) return;
    sceneRevision += 1;
    sceneUrl = buildSceneUrl(tileId);
  }
  function dismissTaskModal() { taskModalOpen = false; }
  function resetToHome() {
    view = 'home';
    selectedProject = null;
    taskModalOpen = false;
    taskId = null;
    sceneUrl = '';
    actionError = null;
  }

  const canRunFullPipeline = $derived(!!configPath || pipelineProgress.prepare >= 100);
  const canRunSnowPipeline = $derived(
    pipelineProgress.harmonize >= 100 &&
    pipelineProgress.masks >= 100 &&
    pipelineProgress.terrain >= 100
  );
  const canExportViewer = $derived(pipelineProgress.qa >= 100);
  const hasViewerData = $derived(!!sceneUrl || pipelineProgress.viewer >= 100);
</script>

<div class="app">
  <!-- Header -->
  <header class="app-header">
    <div class="header-left">
      <button
        class="sidebar-toggle"
        on:click={toggleSidebar}
        aria-label={sidebarOpen ? 'Projektmenü schliessen' : 'Projektmenü öffnen'}
        aria-expanded={sidebarOpen}
      >
        <Icon name={sidebarOpen ? 'x' : 'menu'} size={22} />
      </button>
      <button class="logo" type="button" on:click={resetToHome} aria-label="Zur Startseite wechseln">
        <svg class="logo-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke-dasharray="2 2" />
        </svg>
        <div>
          <h1>Let It Snow</h1>
          <p>3D-Orthophoto Renderer</p>
        </div>
      </button>
    </div>
    <div class="header-right">
      {#if selectedProject}
        <div class="project-badge">
          <span class="badge-name">{selectedProject.name}</span>
          {#if pipelineRunning}
            <span class="badge-running">●</span>
          {/if}
        </div>
      {/if}
    </div>
  </header>

  <div class="layout">
    {#if isMobile && sidebarOpen}
      <button
        type="button"
        class="sidebar-backdrop"
        aria-label="Projektmenü schliessen"
        on:click={() => (sidebarOpen = false)}
      ></button>
    {/if}

    <!-- Sidebar -->
    <aside class="sidebar" class:open={sidebarOpen}>
        <section class="sidebar-section">
          <div class="section-header">
            <Icon name="folder" size={16} />
            <h3>Projekte</h3>
          </div>
        
          <section class="sidebar-section">
            <button class="btn-create-project" on:click={() => (showNewProject = true)}>
              <Icon name="cloud-upload" size={16} />
              <span>Neues Projekt erstellen</span>
            </button>
          </section>
        
          <ProjectList
            {apiUrl}
            refreshKey={projectListVersion}
            selectedId={selectedProject?.id ?? null}
            on:select={(e: CustomEvent<Project>) => handleSelectProject(e.detail)}
          />
        </section>
    </aside>

    <!-- Main content -->
  <main class="workspace" class:workspace-viewer={view === 'project' && activeTab === 'viewer'}>
      {#if view === 'home'}
        <!-- Welcome / Home state -->
        <div class="home-state">
          <div class="home-content">
            <div class="home-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke-dasharray="2 2" />
              </svg>
            </div>
            <h2>Willkommen bei Let It Snow</h2>
            <p class="home-subtitle">Erstellen Sie ein neues Projekt oder wählen Sie ein bestehendes aus.</p>
            <div class="home-actions">
              <button class="btn-primary btn-lg" on:click={() => (showNewProject = true)}>
                <Icon name="cloud-upload" size={20} />
                Neues Projekt erstellen
              </button>
            </div>
          </div>
          <div class="home-steps">
            <div class="step-card">
              <div class="step-num">1</div>
              <div class="step-text">
                <strong>Projekt erstellen</strong>
                <p>Region mit BBox-Koordinaten in EPSG:2056 (LV95) definieren</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <div class="step-text">
                <strong>Pipeline starten</strong>
                <p>Vollständig oder nur Schnee-Rendering</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <div class="step-text">
                <strong>3D Viewer</strong>
                <p>Interaktives Ergebnis betrachten</p>
              </div>
            </div>
          </div>
        </div>

      {:else}
        <!-- Project view -->
        <div class="project-panel">
          <div class="panel-header">
            <h2>{selectedProject!.name}</h2>
            <div class="tabs">
              <button
                class={activeTab === 'pipeline' ? 'tab active' : 'tab'}
                on:click={() => (activeTab = 'pipeline')}
              >
                <Icon name="layers" size={15} />
                Pipeline
              </button>
              <button
                class={activeTab === 'viewer' ? 'tab active' : 'tab'}
                on:click={() => (activeTab = 'viewer')}
              >
                <Icon name="eye" size={15} />
                3D Viewer
              </button>
            </div>
          </div>

          {#if activeTab === 'pipeline'}
            <!-- Pipeline tab -->
            <PipelineActions
              project={selectedProject!}
              pipelineProgress={pipelineProgress}
              pipelineRunning={pipelineRunning}
              canRunFullPipeline={canRunFullPipeline}
              canRunSnowPipeline={canRunSnowPipeline}
              canExportViewer={canExportViewer}
              bind:renderProfile
              bind:resolutionM
              bind:maxTextureDim
              bind:meshStride
              on:prepare={handlePrepareRegion}
              on:full-pipeline={handleRunPipeline}
              on:snow-pipeline={handleRunSnowPipeline}
              on:export-viewer={handleExportViewer}
            />

            <section class="panel">
              <GPXUpload projectId={selectedProject!.id} {apiUrl} />
            </section>

          {:else}
            <!-- Viewer tab -->
            <div class="viewer-panel">
              <div class="viewer-toolbar">
                <label class="toolbar-label">
                  <Icon name="sun" size={14} />
                  Orthofoto:
                  <select bind:value={textureMode}>
                    <option value="winter">Winter</option>
                    <option value="summer">Sommer</option>
                  </select>
                </label>
                <label class="toolbar-label">
                  <Icon name="layers" size={14} />
                  Höhenmodell:
                  <select bind:value={elevationModel}>
                    <option value="snow_surface">Schneehöhe</option>
                    <option value="base">Sommer</option>
                  </select>
                </label>
                <button class="btn-secondary" on:click={loadScene} disabled={!hasViewerData}>
                  <Icon name="refresh" size={14} />
                  Laden
                </button>
              </div>
              <div class="viewer-container">
                {#if sceneUrl}
                  <ThreeViewer {sceneUrl} {textureMode} {elevationModel} elevationFactor={1.0} />
                {:else}
                  <div class="viewer-empty">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                    <p>Keine Viewer-Daten vorhanden.<br />Führen Sie zuerst "3D Viewer exportieren" aus.</p>
                  </div>
                {/if}
              </div>
            </div>
          {/if}
        </div>
      {/if}

      {#if actionError}
        <div class="error-banner">
          <Icon name="alert" size={18} />
          <span>{actionError}</span>
          <button class="close-btn" on:click={() => (actionError = null)}>×</button>
        </div>
      {/if}
    </main>
  </div>

  <!-- New project modal -->
  {#if showNewProject}
    <div class="modal-backdrop" role="presentation">
      <div class="modal" role="dialog" aria-modal="true" aria-label="Neues Projekt erstellen">
        <ProjectNewModal on:submit={handleCreateProject} on:dismiss={() => (showNewProject = false)} />
      </div>
    </div>
  {/if}

  <!-- Task progress modal -->
  {#if taskId && taskModalOpen}
    <div class="modal-backdrop" role="presentation">
      <div class="modal modal-lg" role="dialog" aria-modal="true" aria-label="Task-Fortschritt">
        <TaskProgress {taskId} {apiUrl} on:complete={handleTaskComplete} on:dismiss={dismissTaskModal} />
      </div>
    </div>
  {/if}
</div>

<style>
  :global(body) { margin: 0; background: #020617; }

  .app {
    min-height: 100vh;
    background: #020617;
    color: #e2e8f0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    display: flex;
    flex-direction: column;
  }

  /* ─── Header ─── */
  .app-header {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    border-bottom: 1px solid #1e293b;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header-left { display: flex; align-items: center; gap: 1rem; }

  .sidebar-toggle {
    display: none;
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.375rem;
  }
  .sidebar-toggle:hover { background: #334155; color: #f8fafc; }

  @media (max-width: 800px) {
    .sidebar-toggle { display: block; }
  }

  .logo {
    appearance: none;
    display: flex;
    align-items: center;
    gap: 0.625rem;
    cursor: pointer;
    transition: opacity 0.15s;
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    text-align: left;
  }
  .logo:hover { opacity: 0.85; }
  .logo-icon { color: #38bdf8; animation: snowSpin 30s linear infinite; flex-shrink: 0; }

  @keyframes snowSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

  .logo h1 {
    font-size: 1.25rem;
    margin: 0;
    background: linear-gradient(90deg, #38bdf8, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .logo p { margin: 0; font-size: 0.75rem; color: #64748b; }

  .header-right { display: flex; align-items: center; gap: 0.75rem; }

  .project-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 0.75rem;
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 0.5rem;
  }
  .badge-name { font-size: 0.875rem; color: #f8fafc; font-weight: 500; }
  .badge-running {
    color: #f59e0b;
    font-size: 0.625rem;
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

  /* ─── Layout ─── */
  .layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    flex: 1;
    min-height: 0;
  }

  @media (max-width: 800px) {
    .layout { grid-template-columns: 1fr; }

    .sidebar {
      position: fixed;
      top: 60px;
      left: 0;
      bottom: 0;
      width: min(300px, 88vw);
      z-index: 90;
      transform: translateX(-100%);
      transition: transform 0.22s ease;
      box-shadow: none;
    }

    .sidebar.open {
      transform: translateX(0);
      box-shadow: 4px 0 24px rgba(0, 0, 0, 0.4);
    }
  }

  .sidebar-backdrop {
    position: fixed;
    inset: 60px 0 0 0;
    z-index: 85;
    background: rgba(2, 6, 23, 0.65);
    backdrop-filter: blur(2px);
    border: none;
    padding: 0;
    cursor: pointer;
  }

  /* ─── Sidebar ─── */
  .sidebar {
    background: #0f172a;
    border-right: 1px solid #1e293b;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    overflow-y: auto;
  }

  .sidebar-section { display: flex; flex-direction: column; gap: 0.5rem; }

  .section-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 0.5rem;
    background: #1e293b;
    border-radius: 0.5rem;
  }
  .section-header h3 {
    font-size: 0.75rem;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #94a3b8;
  }

  .section-header.active { background: rgba(56, 189, 248, 0.1); color: #38bdf8; }
  .section-header.active h3 { color: #38bdf8; }

  .btn-create-project {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 0.75rem;
    background: #1e293b;
    border: 1px dashed #334155;
    border-radius: 0.5rem;
    color: #94a3b8;
    cursor: pointer;
    font-size: 0.875rem;
    width: 100%;
    transition: all 0.2s;
  }
  .btn-create-project:hover { border-color: #38bdf8; color: #38bdf8; background: rgba(56, 189, 248, 0.05); }

  .active-info {
    padding: 0.75rem;
    background: rgba(56, 189, 248, 0.05);
    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 0.5rem;
  }
  .active-info strong { display: block; font-size: 0.9375rem; color: #f8fafc; }
  .active-info .desc { display: block; font-size: 0.8125rem; color: #94a3b8; margin-top: 0.25rem; }
  .active-info .bbox { display: inline-flex; align-items: center; gap: 0.375rem; font-size: 0.75rem; color: #64748b; margin-top: 0.375rem; padding: 0.25rem 0.5rem; background: #0f172a; border-radius: 0.25rem; }

  /* Pipeline progress in sidebar */
  .pipeline-progress {
    margin-top: 0.75rem;
    padding: 0.75rem;
    background: rgba(245, 158, 11, 0.05);
    border: 1px solid rgba(245, 158, 11, 0.2);
    border-radius: 0.5rem;
  }
  .progress-header {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.75rem;
    color: #f59e0b;
    margin-bottom: 0.5rem;
  }
  .progress-spinner { animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }

  .progress-bar {
    display: flex;
    gap: 2px;
    height: 4px;
    background: #1e293b;
    border-radius: 2px;
    overflow: hidden;
  }
  .progress-segment {
    transition: width 0.5s ease;
    border-radius: 2px;
  }

  /* ─── Home / Welcome state ─── */
  .home-state {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 3rem 2rem;
  }
  .home-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
  .home-icon {
    width: 80px;
    height: 80px;
    border-radius: 2rem;
    background: linear-gradient(135deg, rgba(56,189,248,0.1), rgba(129,140,248,0.1));
    display: grid;
    place-items: center;
    color: #38bdf8;
    animation: float 3s ease-in-out infinite;
  }
  @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
  .home-content h2 { font-size: 2rem; color: #f8fafc; margin: 0; }
  .home-subtitle { font-size: 1.0625rem; color: #94a3b8; max-width: 400px; }
  .btn-lg { padding: 0.75rem 1.5rem; font-size: 1rem; }

  .home-steps {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .step-card {
    display: flex;
    align-items: flex-start;
    gap: 0.875rem;
    padding: 1rem 1.25rem;
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 0.75rem;
    max-width: 280px;
  }
  .step-num {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    display: grid;
    place-items: center;
    font-size: 0.875rem;
    font-weight: 700;
    color: white;
    flex-shrink: 0;
  }
  .step-text strong { display: block; font-size: 0.9375rem; color: #f8fafc; margin-bottom: 0.125rem; }
  .step-text p { margin: 0; font-size: 0.8125rem; color: #94a3b8; }

  /* ─── Workspace ─── */
  .workspace {
    flex: 1;
    min-height: 0;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    overflow-y: auto;
  }

  .workspace.workspace-viewer {
    overflow: hidden;
  }

  /* ─── Project panel ─── */
  .project-panel {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .panel-header { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
  .panel-header h2 { margin: 0; font-size: 1.25rem; color: #f8fafc; }

  .tabs { display: flex; gap: 0.25rem; background: #1e293b; padding: 0.25rem; border-radius: 0.625rem; }
  .tab {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 0.875rem;
    background: none;
    border: none;
    border-radius: 0.375rem;
    color: #94a3b8;
    cursor: pointer;
    transition: all 0.15s;
    font-size: 0.875rem;
  }
  .tab:hover { color: #f8fafc; }
  .tab.active { background: #38bdf8; color: #0f172a; font-weight: 600; }

  /* ─── Panel ─── */
  .panel {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 0.875rem;
    padding: 1.25rem;
  }

  /* ─── Buttons ─── */
  .btn-primary, .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s;
  }
  .btn-primary {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  }
  .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4); }
  .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
  .btn-secondary { background: #334155; color: #e2e8f0; }
  .btn-secondary:hover { background: #475569; transform: translateY(-1px); }
  .btn-secondary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

  .close-btn {
    background: none;
    border: none;
    color: inherit;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0 0.25rem;
  }

  /* ─── Viewer ─── */
  .viewer-panel {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .viewer-toolbar {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 0.625rem;
  }
  .toolbar-label {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    color: #94a3b8;
    font-size: 0.8125rem;
  }
  .toolbar-label select {
    background: #0f172a;
    border: 1px solid #475569;
    border-radius: 0.375rem;
    color: #e2e8f0;
    padding: 0.25rem 0.5rem;
    font: inherit;
  }

  .viewer-container {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    border-radius: 0.75rem;
    overflow: hidden;
    background: #0f172a;
    border: 1px solid #1e293b;
  }

  .viewer-empty {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #64748b;
    gap: 1rem;
    padding: 2rem;
  }

  /* ─── Modal ─── */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.8);
    backdrop-filter: blur(4px);
    z-index: 500;
    display: grid;
    place-items: center;
    padding: 1rem;
  }
  .modal {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 1rem;
    width: min(480px, 95vw);
    box-shadow: 0 24px 70px rgba(0,0,0,0.5);
  }
  .modal-lg { width: min(820px, 95vw); max-height: 90vh; overflow-y: auto; }

  /* ─── Error banner ─── */
  .error-banner {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 0.5rem;
    color: #fca5a5;
    font-size: 0.875rem;
  }
</style>

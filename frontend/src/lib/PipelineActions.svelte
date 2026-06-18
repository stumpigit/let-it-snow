<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Icon from './Icon.svelte';

  export interface PipelineProject {
    id: number;
    name: string;
    description?: string;
    bbox: number[];
  }

  type PipelineProgress = Record<string, number>;

  let {
    project,
    pipelineProgress = {
      prepare: 0,
      harmonize: 0,
      masks: 0,
      terrain: 0,
      snow: 0,
      render: 0,
      qa: 0,
      viewer: 0,
    },
    pipelineRunning = false,
    canRunFullPipeline = false,
    canRunSnowPipeline = false,
    canExportViewer = false,
    renderProfile = $bindable('default'),
    resolutionM = $bindable(0.5),
    maxTextureDim = $bindable(8192),
    meshStride = $bindable(2),
  }: {
    project: PipelineProject;
    pipelineProgress?: PipelineProgress;
    pipelineRunning?: boolean;
    canRunFullPipeline?: boolean;
    canRunSnowPipeline?: boolean;
    canExportViewer?: boolean;
    renderProfile?: string;
    resolutionM?: number;
    maxTextureDim?: number;
    meshStride?: number;
  } = $props();

  const dispatch = createEventDispatcher<{
    prepare: void;
    'full-pipeline': void;
    'snow-pipeline': void;
    'export-viewer': void;
  }>();

  const stages: Array<{ key: string; name: string; icon: string }> = [
    { key: 'prepare', name: 'Vorbereitung', icon: 'check-circle' },
    { key: 'harmonize', name: 'Harmonisieren', icon: 'layers' },
    { key: 'masks', name: 'Maskierung', icon: 'eye' },
    { key: 'terrain', name: 'Terrain', icon: 'mountain' },
    { key: 'snow', name: 'Schneemodell', icon: 'snow' },
    { key: 'render', name: 'Rendering', icon: 'play' },
    { key: 'qa', name: 'Qualitätskontrolle', icon: 'shield' },
    { key: 'viewer', name: 'Viewer-Export', icon: 'box' },
  ];

  function stagePercent(key: string) {
    return Math.max(0, Math.min(100, pipelineProgress[key] ?? 0));
  }

  function stageState(key: string) {
    const value = stagePercent(key);
    if (value >= 100) return 'done';
    if (value > 0 || (pipelineRunning && key === 'prepare')) return 'active';
    return 'idle';
  }

  const totalProgress = $derived(
    stages.reduce((sum, stage) => sum + stagePercent(stage.key), 0) / stages.length
  );

  const actions = [
    {
      id: 'prepare',
      title: '1. Region vorbereiten',
      description: 'Basisdaten laden und das Projekt startklar machen.',
      icon: 'download',
      tone: 'primary',
      enabled: () => !pipelineRunning,
      hint: 'Dieser Schritt legt die Grundlage für alle weiteren Berechnungen.',
    },
    {
      id: 'full-pipeline',
      title: '2A. Komplette Pipeline',
      description: 'Alle Rechenschritte von der Basis bis zum Winter-Rendering ausführen.',
      icon: 'play-circle',
      tone: 'violet',
      enabled: () => canRunFullPipeline && !pipelineRunning,
      hint: 'Verfügbar nach abgeschlossener Regionsvorbereitung.',
    },
    {
      id: 'snow-pipeline',
      title: '2B. Nur Schnee-Simulierung',
      description: 'Nur ab der Schnee-Simulation weiterrechnen, wenn die Basis schon vorbereitet ist.',
      icon: 'snowflake',
      tone: 'cyan',
      enabled: () => canRunSnowPipeline && !pipelineRunning,
      hint: 'Erfordert abgeschlossene Harmonisierung, Maskierung und Terrain-Berechnung.',
    },
    {
      id: 'export-viewer',
      title: '3. 3D Viewer exportieren',
      description: 'Das Ergebnis als Web-Viewer mit Mesh und Texturen bereitstellen.',
      icon: 'box',
      tone: 'lavender',
      enabled: () => canExportViewer && !pipelineRunning,
      hint: 'Erfordert abgeschlossene Pipeline inklusive Qualitätskontrolle.',
    },
  ];

  function handleAction(actionId: string) {
    dispatch(actionId as 'prepare' | 'full-pipeline' | 'snow-pipeline' | 'export-viewer');
  }
</script>

<div class="workflow-shell">
  <section class="hero-card">
    <div>
      <div class="eyebrow">Projekt-Workflow</div>
      <h3>{project.name}</h3>
      <p class="hero-copy">Wähl den nächsten Schritt: zuerst vorbereiten, danach komplette Pipeline oder gezielt ab Schnee-Simulation weiterrechnen, und zum Schluss in den 3D-Viewer exportieren.</p>
    </div>
    <div class="hero-meta">
      <div class="meta-pill">
        <Icon name="box" size={14} />
        <span>{project.bbox.join(', ')}</span>
      </div>

    </div>
  </section>

  <section class="pipeline-section">
    <div class="section-title-row">
      <h3>Pipeline-Schritte</h3>
        <span class="section-note">
          <Icon name="refresh" size={14} className={pipelineRunning ? 'spin' : ''} />
          <span>{Math.round(totalProgress)}% Gesamtfortschritt</span>
        </span>
    </div>
    <div class="pipeline-track" role="list" aria-label="Pipeline-Fortschritt">
      {#each stages as stage}
        {@const pct = Math.round(stagePercent(stage.key))}
        <div class="stage-item {stageState(stage.key)}" role="listitem">
          <div class="stage-row">
            <span class="stage-label">{stage.name}</span>
            <span class="stage-pct">{pct}%</span>
          </div>
          <div class="stage-bar" aria-hidden="true">
            <div class="stage-bar-fill" style="width: {pct}%"></div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="actions-section">
    <div class="section-title-row">
      <h3>Nächster Schritt</h3>
      <span class="section-note">Zwei Berechnungswege plus Viewer-Export</span>
    </div>

    <div class="action-grid">
      {#each actions as action}
        <button
          type="button"
          class="action-card {action.tone}"
          disabled={!action.enabled()}
          on:click={() => handleAction(action.id)}
        >
          <div class="action-icon">
            <Icon name={action.icon} size={22} />
          </div>
          <div class="action-content">
            <strong>{action.title}</strong>
            <p>{action.description}</p>
            <span class="action-hint">{action.hint}</span>
          </div>
          <Icon name="chevron-right" size={18} className="action-arrow" />
        </button>
      {/each}
    </div>
  </section>

  <section class="params-section">
    <div class="section-title-row">
      <h3>Rendering-Parameter</h3>
      <span class="section-note">Gelten für Pipeline und Viewer-Export</span>
    </div>

    <div class="params-grid">
      <div class="param-group">
        <label for="render-profile">Profil</label>
        <select id="render-profile" bind:value={renderProfile}>
          <option value="default">Standard</option>
          <option value="high">Hoch</option>
          <option value="ultra">Ultra</option>
        </select>
      </div>

      <div class="param-group">
        <label for="resolution-slider">Auflösung (m/px)</label>
        <div class="param-input">
          <input id="resolution-slider" type="range" bind:value={resolutionM} min="0.1" max="2.0" step="0.05" />
          <span class="param-value">{resolutionM.toFixed(2)} m/px</span>
        </div>
      </div>

      <div class="param-group">
        <label for="texture-size">Max. Texturgröße</label>
        <select id="texture-size" bind:value={maxTextureDim}>
          <option value="4096">4096 px</option>
          <option value="8192">8192 px</option>
          <option value="16384">16384 px</option>
        </select>
      </div>

      <div class="param-group">
        <label for="mesh-stride">Mesh-Stride</label>
        <div class="param-input">
          <input id="mesh-stride" type="range" bind:value={meshStride} min="1" max="16" step="1" />
          <span class="param-value">{meshStride}</span>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .workflow-shell {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .hero-card {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.25rem;
    border-radius: 1rem;
    background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(124,58,237,0.08));
    border: 1px solid rgba(56, 189, 248, 0.18);
  }

  .eyebrow {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #7dd3fc;
    margin-bottom: 0.4rem;
  }

  .hero-card h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #f8fafc;
  }

  .hero-copy {
    margin: 0.5rem 0 0;
    color: #cbd5e1;
    max-width: 48rem;
    line-height: 1.55;
  }

  .hero-meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 230px;
  }

  .meta-pill {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.65rem 0.85rem;
    border-radius: 0.75rem;
    background: rgba(15, 23, 42, 0.8);
    color: #cbd5e1;
    font-size: 0.8rem;
  }

  .meta-pill.accent {
    color: #93c5fd;
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .section-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .section-title-row h3 {
    margin: 0;
    color: #f8fafc;
    font-size: 1rem;
  }

  .section-note {
    color: #94a3b8;
    font-size: 0.78rem;
  }

  .pipeline-section {
    padding: 0.75rem 1rem;
    background: rgba(15, 23, 42, 0.45);
    border: 1px solid rgba(30, 41, 59, 0.8);
    border-radius: 0.75rem;
  }

  .pipeline-section .section-title-row {
    margin-bottom: 0.6rem;
  }

  .pipeline-section .section-title-row h3 {
    font-size: 0.88rem;
    font-weight: 600;
    color: #94a3b8;
  }

  .pipeline-track {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 0.5rem 1rem;
  }

  .stage-item {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-width: 0;
    padding: 0;
    background: none;
    border: none;
    pointer-events: none;
  }

  .stage-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .stage-label {
    color: #64748b;
    font-size: 0.72rem;
    font-weight: 500;
    line-height: 1.3;
  }

  .stage-pct {
    color: #475569;
    font-size: 0.68rem;
    font-variant-numeric: tabular-nums;
    flex-shrink: 0;
  }

  .stage-bar {
    height: 3px;
    background: rgba(30, 41, 59, 0.9);
    border-radius: 999px;
    overflow: hidden;
  }

  .stage-bar-fill {
    height: 100%;
    background: #334155;
    border-radius: 999px;
    transition: width 0.35s ease;
  }

  .stage-item.active .stage-label {
    color: #94a3b8;
  }

  .stage-item.active .stage-pct {
    color: #7dd3fc;
  }

  .stage-item.active .stage-bar-fill {
    background: #3b82f6;
  }

  .stage-item.done .stage-label {
    color: #6ee7b7;
  }

  .stage-item.done .stage-pct {
    color: #34d399;
  }

  .stage-item.done .stage-bar-fill {
    background: #10b981;
  }

  .action-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 0.85rem;
  }

  .action-card {
    display: flex;
    align-items: flex-start;
    gap: 0.9rem;
    width: 100%;
    text-align: left;
    padding: 1rem;
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 1rem;
    transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
    color: inherit;
  }

  .action-card:hover:enabled,
  .action-card:focus-visible:enabled {
    transform: translateY(-2px);
    border-color: #334155;
    box-shadow: 0 10px 28px rgba(2, 6, 23, 0.35);
    outline: none;
  }

  .action-card:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  .action-card.primary { border-color: rgba(59, 130, 246, 0.24); }
  .action-card.violet { border-color: rgba(139, 92, 246, 0.24); }
  .action-card.cyan { border-color: rgba(6, 182, 212, 0.24); }
  .action-card.lavender { border-color: rgba(167, 139, 250, 0.24); }

  .action-icon {
    width: 46px;
    height: 46px;
    border-radius: 0.85rem;
    display: grid;
    place-items: center;
    color: white;
    flex-shrink: 0;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  }

  .action-card.violet .action-icon {
    background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  }

  .action-card.cyan .action-icon {
    background: linear-gradient(135deg, #06b6d4, #0891b2);
  }

  .action-card.lavender .action-icon {
    background: linear-gradient(135deg, #a78bfa, #7c3aed);
  }

  .action-content {
    flex: 1;
    min-width: 0;
  }

  .action-content strong {
    display: block;
    color: #f8fafc;
    font-size: 0.94rem;
    margin-bottom: 0.25rem;
  }

  .action-content p {
    margin: 0;
    color: #cbd5e1;
    font-size: 0.8rem;
    line-height: 1.45;
  }

  .action-hint {
    display: block;
    margin-top: 0.5rem;
    color: #94a3b8;
    font-size: 0.75rem;
  }

  .action-arrow {
    color: #94a3b8;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }

  .params-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
    background: #1e293b;
    border-radius: 1rem;
    border: 1px solid #334155;
  }

  .param-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .param-group label {
    font-size: 0.82rem;
    color: #cbd5e1;
  }

  .param-group select,
  .param-group input[type='range'] {
    width: 100%;
  }

  .param-group select {
    background: #0f172a;
    border: 1px solid #475569;
    border-radius: 0.6rem;
    color: #e2e8f0;
    padding: 0.65rem 0.75rem;
    font: inherit;
  }

  .param-group select:focus,
  .param-group input[type='range']:focus {
    outline: none;
  }

  .param-input {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .param-value {
    min-width: 78px;
    text-align: right;
    color: #7dd3fc;
    font-size: 0.8rem;
    font-weight: 600;
  }

  @media (max-width: 820px) {
    .hero-card {
      flex-direction: column;
    }

    .hero-meta {
      min-width: 0;
    }

    .section-title-row {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

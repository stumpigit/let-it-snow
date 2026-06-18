<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  let { taskId = '', apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000' } = $props();

  const dispatch = createEventDispatcher();

  let status = $state('');
  let progress = $state(0);
  let message = $state('');
  let error = $state<string | null>(null);
  let completed = $state(false);
  let taskData = $state<Record<string, unknown> | null>(null);
  let updatedAtLabel = $state('');
  let startedAtMs = $state<number | null>(null);
  let nowMs = $state(Date.now());
  let timelineSteps = $state<string[]>([]);
  let logEntries = $state<Array<{ time: string; text: string; kind: 'substep' | 'info' | 'warn' | 'step' }>>([]);
  let logOpen = $state(false);

  const progressPercent = $derived(Math.max(0, Math.min(100, Math.round(progress * 100))));
  const runtimeSeconds = $derived(startedAtMs ? Math.max(0, Math.floor((nowMs - startedAtMs) / 1000)) : 0);
  const runtimeLabel = $derived(runtimeSeconds ? formatDuration(runtimeSeconds) : 'läuft...');
  const currentStep = $derived(Number(taskData?.current ?? 0));
  const totalSteps = $derived(Number(taskData?.total ?? 0));
  const stepLabel = $derived(currentStep > 0 && totalSteps > 0 ? `${currentStep}/${totalSteps}` : '-');
  const statusClass = $derived(getStatusClass(status));
  const activeStep = $derived(typeof taskData?.step === 'string' ? String(taskData.step) : '');

  function formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  }

  function getStatusClass(currentStatus: string): string {
    if (currentStatus === 'SUCCESS') return 'ok';
    if (currentStatus === 'FAILURE') return 'err';
    if (currentStatus === 'PROGRESS' || currentStatus === 'STARTED') return 'run';
    return 'idle';
  }

  function normalizeData(data: any): Record<string, unknown> | null {
    if (data && typeof data.progress === 'object') return data.progress as Record<string, unknown>;
    if (data && typeof data === 'object') return data as Record<string, unknown>;
    return null;
  }

  function syncTimeline(data: Record<string, unknown> | null): void {
    if (!data) return;
    const steps = data.steps;
    if (Array.isArray(steps)) {
      const cleaned = steps.filter((v): v is string => typeof v === 'string' && v.length > 0);
      if (cleaned.length > 0) {
        timelineSteps = cleaned;
      }
    }
  }

  function stepState(index: number, name: string): 'done' | 'active' | 'pending' {
    if (status === 'SUCCESS') return 'done';
    if (status === 'FAILURE') {
      const failedIndex =
        currentStep > 0 ? currentStep - 1 : timelineSteps.findIndex((step) => step === activeStep);
      if (failedIndex < 0) return index === 0 ? 'pending' : 'pending';
      return index < failedIndex ? 'done' : index === failedIndex ? 'active' : 'pending';
    }
    if (activeStep === 'Initialisierung') {
      return index === 0 ? 'active' : 'pending';
    }
    const activeIndex =
      currentStep > 0 ? currentStep - 1 : timelineSteps.findIndex((step) => step === activeStep);
    if (activeIndex >= 0) {
      if (index < activeIndex) return 'done';
      if (index === activeIndex) return 'active';
      return 'pending';
    }
    if (name === activeStep) return 'active';
    return 'pending';
  }

  function messageKind(text: string): 'substep' | 'info' | 'warn' | 'step' {
    if (text.startsWith('→ ')) return 'substep';
    if (text.startsWith('i ')) return 'info';
    if (text.startsWith('! ')) return 'warn';
    return 'step';
  }

  function pushLog(text: string): void {
    const clean = text.trim();
    if (!clean) return;
    const last = logEntries[logEntries.length - 1];
    if (last && last.text === clean) return;
    logEntries = [
      ...logEntries,
      {
        time: new Date().toLocaleTimeString(),
        text: clean,
        kind: messageKind(clean),
      },
    ].slice(-20);
  }

  onMount(() => {
    const clock = window.setInterval(() => {
      nowMs = Date.now();
    }, 1000);

    async function fetchStatus() {
      try {
        const res = await fetch(`${apiUrl}/tasks/${taskId}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        status = data.status;
        taskData = normalizeData(data);
        syncTimeline(taskData);

        if (typeof data.progress === 'number') {
          progress = data.progress;
        } else if (data.progress && typeof data.progress === 'object') {
          const incomingMessage = data.progress.message || data.progress.step;
          if (typeof incomingMessage === 'string' && incomingMessage.length > 0) {
            message = incomingMessage;
            pushLog(incomingMessage);
          }
          if (typeof data.progress.progress === 'number') {
            progress = data.progress.progress;
          }
          if (typeof data.progress.started_at === 'string') {
            const parsed = Date.parse(data.progress.started_at);
            if (!Number.isNaN(parsed)) startedAtMs = parsed;
          }
          if (typeof data.progress.updated_at === 'string') {
            updatedAtLabel = new Date(data.progress.updated_at).toLocaleTimeString();
          } else {
            updatedAtLabel = new Date().toLocaleTimeString();
          }
        } else {
          updatedAtLabel = new Date().toLocaleTimeString();
        }

        if (data.message) {
          error = data.status === 'FAILURE' ? data.message : null;
          message = data.message;
          if (typeof data.message === 'string') pushLog(data.message);
        }

        if (!completed && (status === 'SUCCESS' || status === 'FAILURE')) {
          completed = true;
          dispatch('complete', data);
          if (intervalId) clearInterval(intervalId);
        }
      } catch (e: any) {
        error = e.message;
      }
    }

    let intervalId: number;
    fetchStatus();
    intervalId = window.setInterval(fetchStatus, 1000);

    return () => {
      clearInterval(clock);
      clearInterval(intervalId);
    };
  });
</script>

<div class="task-progress">
  <div class="tp-header">
    <div>
      <h4>Task-Fortschritt</h4>
      <p class="tp-subtitle">{message || 'Warten auf Status-Updates...'}</p>
    </div>
    <div class="tp-header-actions">
      <span class="tp-status {statusClass}">{status || 'WARTET'}</span>
      <button type="button" class="tp-close" onclick={() => dispatch('dismiss')}>Schließen</button>
    </div>
  </div>

  <div class="tp-progress-row">
    <div class="tp-progress-bar">
      <div class="tp-progress-fill" style="width: {progressPercent}%"></div>
    </div>
    <span class="tp-percent">{progressPercent}%</span>
  </div>

  <div class="tp-meta-grid">
    <div><span>Schritt</span><strong>{stepLabel}</strong></div>
    <div><span>Laufzeit</span><strong>{runtimeLabel}</strong></div>
  </div>

  {#if timelineSteps.length > 0}
    <div class="tp-timeline">
      {#each timelineSteps as step, index}
        {@const state = stepState(index, step)}
        <div class="tp-timeline-row">
          <span class="tp-dot {state}"></span>
          <div class="tp-timeline-content">
            <strong>{step}</strong>
            <small>
              {#if state === 'done'}
                erledigt
              {:else if state === 'active'}
                läuft
              {:else}
                ausstehend
              {/if}
            </small>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <div class="tp-log">
    <button type="button" class="tp-log-toggle" onclick={() => (logOpen = !logOpen)} aria-expanded={logOpen}>
      <strong>Live Log</strong>
      <span>{logEntries.length} Einträge</span>
      <span class="tp-log-chevron" class:open={logOpen}>›</span>
    </button>
    {#if logOpen}
      {#if logEntries.length === 0}
        <p class="tp-log-empty">Noch keine Log-Meldungen...</p>
      {:else}
        <div class="tp-log-list">
          {#each logEntries as entry}
            <div class="tp-log-row">
              <span class="tp-log-time">{entry.time}</span>
              <span class="tp-log-kind {entry.kind}">
                {#if entry.kind === 'warn'}
                  WARN
                {:else if entry.kind === 'info'}
                  INFO
                {:else if entry.kind === 'substep'}
                  STEP
                {:else}
                  TASK
                {/if}
              </span>
              <code>{entry.text}</code>
            </div>
          {/each}
        </div>
      {/if}
    {/if}
  </div>

  {#if status === 'SUCCESS'}
    <p class="success">✓ Task erfolgreich abgeschlossen</p>
  {:else if status === 'FAILURE'}
    <p class="error">✗ Task fehlgeschlagen: {error || message}</p>
  {/if}
</div>

<style>
  .task-progress {
    background: linear-gradient(180deg, #0b1220 0%, #111827 100%);
    border: 1px solid #243244;
    border-radius: 12px;
    padding: 1rem;
  }

  .tp-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 0.75rem;
    gap: 1rem;
  }

  .tp-header-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .tp-header h4 {
    margin: 0;
    color: #e2e8f0;
  }

  .tp-subtitle {
    margin: 0.25rem 0 0;
    color: #94a3b8;
    font-size: 0.82rem;
    line-height: 1.4;
  }

  .tp-status {
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.03em;
  }

  .tp-status.run { background: #1d4ed8; color: #dbeafe; }
  .tp-status.ok { background: #166534; color: #dcfce7; }
  .tp-status.err { background: #991b1b; color: #fee2e2; }
  .tp-status.idle { background: #334155; color: #e2e8f0; }

  .tp-close {
    border: 1px solid #334155;
    background: #0f172a;
    color: #cbd5e1;
    border-radius: 8px;
    padding: 0.2rem 0.55rem;
    font-size: 0.75rem;
    cursor: pointer;
  }

  .tp-close:hover {
    background: #1e293b;
  }

  .tp-progress-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .tp-progress-bar {
    flex: 1;
    height: 10px;
    background: #1f2937;
    border-radius: 999px;
    overflow: hidden;
  }

  .tp-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #06b6d4 0%, #2563eb 100%);
    transition: width 300ms ease;
  }

  .tp-percent {
    font-weight: 700;
    color: #dbeafe;
    min-width: 3rem;
    text-align: right;
  }

  .tp-meta-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .tp-meta-grid div {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 8px;
    padding: 0.45rem 0.6rem;
  }

  .tp-meta-grid span {
    display: block;
    color: #94a3b8;
    font-size: 0.75rem;
  }

  .tp-meta-grid strong {
    color: #e2e8f0;
    font-size: 0.88rem;
  }

  .tp-timeline {
    border: 1px solid #1e293b;
    border-radius: 10px;
    padding: 0.55rem 0.65rem;
    margin-bottom: 0.8rem;
    background: #0b1324;
  }

  .tp-timeline-row {
    display: flex;
    gap: 0.65rem;
    align-items: flex-start;
    padding: 0.3rem 0;
  }

  .tp-dot {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 999px;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  .tp-dot.done { background: #22c55e; }
  .tp-dot.active { background: #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15); }
  .tp-dot.pending { background: #475569; }

  .tp-timeline-content strong {
    display: block;
    color: #e2e8f0;
    font-size: 0.88rem;
    line-height: 1.2;
  }

  .tp-timeline-content small {
    color: #94a3b8;
    font-size: 0.75rem;
  }

  .tp-log {
    margin-top: 0.5rem;
    border: 1px solid #1e293b;
    border-radius: 10px;
    background: #0a1222;
    overflow: hidden;
  }

  .tp-log-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.6rem;
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
    text-align: left;
  }

  .tp-log-toggle strong {
    color: #e2e8f0;
    font-size: 0.88rem;
  }

  .tp-log-toggle span:not(.tp-log-chevron) {
    color: #94a3b8;
    font-size: 0.75rem;
  }

  .tp-log-chevron {
    margin-left: auto;
    color: #64748b;
    font-size: 1rem;
    transition: transform 0.2s ease;
  }

  .tp-log-chevron.open {
    transform: rotate(90deg);
  }

  .tp-log-empty {
    margin: 0;
    padding: 0 0.6rem 0.6rem;
    color: #94a3b8;
    font-size: 0.82rem;
  }

  .tp-log-list {
    display: grid;
    gap: 0.35rem;
    max-height: 220px;
    overflow: auto;
    padding: 0 0.6rem 0.6rem;
    border-top: 1px solid #1e293b;
  }

  .tp-log-row {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 0.45rem;
    align-items: baseline;
    font-size: 0.78rem;
    border-bottom: 1px solid rgba(30, 41, 59, 0.6);
    padding-bottom: 0.3rem;
  }

  .tp-log-time {
    color: #64748b;
    font-variant-numeric: tabular-nums;
  }

  .tp-log-kind {
    padding: 0.05rem 0.35rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.68rem;
    letter-spacing: 0.02em;
  }

  .tp-log-kind.substep { background: #1e3a8a; color: #dbeafe; }
  .tp-log-kind.info { background: #0f766e; color: #ccfbf1; }
  .tp-log-kind.warn { background: #7f1d1d; color: #fee2e2; }
  .tp-log-kind.step { background: #334155; color: #e2e8f0; }

  .tp-log-row code {
    color: #cbd5e1;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .success,
  .error {
    margin-top: 0.75rem;
    font-weight: 600;
  }

  .success { color: #86efac; }
  .error { color: #fca5a5; }
</style>

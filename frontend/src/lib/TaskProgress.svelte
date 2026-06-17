<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let taskId: string = '';
  export let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  const dispatch = createEventDispatcher();

  let status = '';
  let progress = 0;
  let message = '';
  let error: string | null = null;
  let intervalId: number | null = null;
  let completed = false;
  let taskData: Record<string, unknown> | null = null;
  let updatedAtLabel = '';
  let startedAtMs: number | null = null;
  let nowMs = Date.now();
  let timelineSteps: string[] = [];
  let logEntries: Array<{ time: string; text: string; kind: 'substep' | 'info' | 'warn' | 'step' }> = [];

  $: progressPercent = Math.max(0, Math.min(100, Math.round(progress * 100)));
  $: runtimeSeconds = startedAtMs ? Math.max(0, Math.floor((nowMs - startedAtMs) / 1000)) : 0;
  $: runtimeLabel = runtimeSeconds ? formatDuration(runtimeSeconds) : 'läuft...';
  $: currentStep = Number(taskData?.current ?? 0);
  $: totalSteps = Number(taskData?.total ?? 0);
  $: stepLabel = currentStep > 0 && totalSteps > 0 ? `${currentStep}/${totalSteps}` : '-';
  $: statusClass = getStatusClass(status);
  $: detailRows = buildDetailRows(taskData);
  $: activeStep = typeof taskData?.step === 'string' ? String(taskData.step) : '';

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

  function buildDetailRows(data: Record<string, unknown> | null): Array<{ key: string; value: string }> {
    if (!data) return [];
    const preferred = ['project_id', 'tile_id', 'profile', 'config_path', 'started_at', 'updated_at'];
    const rows: Array<{ key: string; value: string }> = [];

    for (const key of preferred) {
      const value = data[key];
      if (value !== undefined && value !== null && value !== '') {
        rows.push({ key, value: String(value) });
      }
    }

    for (const [key, value] of Object.entries(data)) {
      if (preferred.includes(key) || key === 'step' || key === 'progress' || key === 'current' || key === 'total' || key === 'steps') continue;
      if (value === undefined || value === null) continue;
      rows.push({ key, value: typeof value === 'object' ? JSON.stringify(value) : String(value) });
    }
    return rows;
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
    if (
      timelineSteps.length === 0 &&
      typeof data.step === 'string' &&
      data.step.length > 0 &&
      !data.step.startsWith('→ ') &&
      !data.step.startsWith('i ') &&
      !data.step.startsWith('! ') &&
      data.step !== 'Initialisierung' &&
      !timelineSteps.includes(data.step)
    ) {
      timelineSteps = [...timelineSteps, data.step];
    }
  }

  function stepState(index: number, name: string): 'done' | 'active' | 'pending' {
    if (status === 'SUCCESS') return 'done';
    if (status === 'FAILURE') {
      const failedIndex =
        currentStep > 0 ? currentStep - 1 : timelineSteps.findIndex((step) => step === activeStep);
      return index < failedIndex ? 'done' : 'pending';
    }
    if (activeStep === 'Initialisierung') {
      return index === 0 ? 'active' : 'pending';
    }
    const activeIndex =
      currentStep > 0 ? currentStep - 1 : timelineSteps.findIndex((step) => step === activeStep);
    if (activeIndex >= 0) {
      if (index < activeIndex) return 'done';
      if (index === activeIndex) return status === 'FAILURE' ? 'pending' : 'active';
      return 'pending';
    }
    if (name === activeStep) return status === 'FAILURE' ? 'pending' : 'active';
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
    const entry = {
      time: new Date().toLocaleTimeString(),
      text: clean,
      kind: messageKind(clean),
    };
    logEntries = [...logEntries, entry].slice(-20);
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
            const parsed = new Date(data.progress.updated_at);
            updatedAtLabel = parsed.toLocaleTimeString();
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

    fetchStatus();
    intervalId = window.setInterval(fetchStatus, 2000);

    return () => {
      clearInterval(clock);
      if (intervalId) clearInterval(intervalId);
    };
  });
</script>

<div class="task-progress">
  <div class="tp-header">
    <div>
      <h4>Task Fortschritt</h4>
      <p class="tp-task-id">ID: {taskId}</p>
    </div>
    <div class="tp-header-actions">
      <span class="tp-status {statusClass}">{status || 'WARTET'}</span>
      <button type="button" class="tp-close" on:click={() => dispatch('dismiss')}>Schließen</button>
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
    <div><span>Status</span><strong>{status || '-'}</strong></div>
    <div><span>Laufzeit</span><strong>{runtimeLabel}</strong></div>
    <div><span>Letztes Update</span><strong>{updatedAtLabel || '-'}</strong></div>
  </div>

  <p class="tp-message">{message || 'Warten auf Status-Updates...'}</p>

  {#if timelineSteps.length > 0}
    <div class="tp-timeline">
      {#each timelineSteps as step, index}
        <div class="tp-timeline-row">
          <span class="tp-dot {stepState(index, step)}"></span>
          <div class="tp-timeline-content">
            <strong>{step}</strong>
            <small>
              {#if stepState(index, step) === 'done'}
                erledigt
              {:else if stepState(index, step) === 'active'}
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

  {#if detailRows.length > 0}
    <div class="tp-details">
      {#each detailRows as row}
        <div class="tp-detail-row">
          <span>{row.key}</span>
          <code>{row.value}</code>
        </div>
      {/each}
    </div>
  {/if}

  <div class="tp-log">
    <div class="tp-log-header">
      <strong>Live Log</strong>
      <span>{logEntries.length} Einträge</span>
    </div>
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
  </div>

  {#if status === 'SUCCESS'}
    <p class="success">✓ Task completed successfully!</p>
  {:else if status === 'FAILURE'}
    <p class="error">✗ Task failed: {error || message}</p>
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
  }

  .tp-header-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .tp-header h4 {
    margin: 0;
    color: #e2e8f0;
  }

  .tp-task-id {
    margin: 0.125rem 0 0;
    color: #94a3b8;
    font-size: 0.8rem;
    word-break: break-all;
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

  .tp-message {
    margin: 0.3rem 0 0.8rem;
    color: #cbd5e1;
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

  .tp-details {
    border-top: 1px solid #1e293b;
    padding-top: 0.6rem;
    display: grid;
    gap: 0.35rem;
  }

  .tp-log {
    margin-top: 0.8rem;
    border: 1px solid #1e293b;
    border-radius: 10px;
    background: #0a1222;
    padding: 0.6rem;
  }

  .tp-log-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .tp-log-header strong {
    color: #e2e8f0;
    font-size: 0.88rem;
  }

  .tp-log-header span {
    color: #94a3b8;
    font-size: 0.75rem;
  }

  .tp-log-empty {
    margin: 0;
    color: #94a3b8;
    font-size: 0.82rem;
  }

  .tp-log-list {
    display: grid;
    gap: 0.35rem;
    max-height: 220px;
    overflow: auto;
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

  .tp-detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.82rem;
  }

  .tp-detail-row span {
    color: #94a3b8;
    flex-shrink: 0;
  }

  .tp-detail-row code {
    color: #cbd5e1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60%;
  }

  .success,
  .error {
    margin-top: 0.75rem;
    font-weight: 600;
  }

  .success { color: #86efac; }
  .error { color: #fca5a5; }
</style>

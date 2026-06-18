<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import Icon from './Icon.svelte';

  const dispatch = createEventDispatcher<{ submit: { name: string; description: string; bbox: number[] }; dismiss: void }>();

  let projectName = '';
  let description = '';
  let bbox = '';
  let error: string | null = null;
  let projectNameInput: HTMLInputElement | null = null;

  onMount(() => {
    projectNameInput?.focus();
  });

  // Approximate Swiss LV95 extent (EPSG:2056)
  const LV95 = { minE: 2_485_000, maxE: 2_834_000, minN: 1_075_000, maxN: 1_296_000 };

  function parseBbox(raw: string): number[] | null {
    const parts = raw.trim().split(',').map((s) => parseFloat(s.trim()));
    if (parts.length !== 4 || parts.some((value) => Number.isNaN(value))) return null;

    const [minx, miny, maxx, maxy] = parts;
    if (minx >= maxx || miny >= maxy) return null;
    if (
      minx < LV95.minE || maxx > LV95.maxE ||
      miny < LV95.minN || maxy > LV95.maxN
    ) return null;

    return parts;
  }

  function handleSubmit() {
    error = null;

    if (!projectName.trim()) {
      error = 'Bitte geben Sie einen Projektnamen ein.';
      return;
    }

    const parsedBbox = parseBbox(bbox);
    if (!parsedBbox) {
      error = 'Ungültige BBox. Format: minx, miny, maxx, maxy mit gültigen EPSG:2056-Koordinaten (LV95).';
      return;
    }

    dispatch('submit', {
      name: projectName.trim(),
      description: description.trim(),
      bbox: parsedBbox,
    });
  }

  function handleDismiss() {
    dispatch('dismiss');
  }
</script>

<div class="modal">
  <div class="modal-header">
    <div>
      <h3>Neues Projekt erstellen</h3>
      <p class="muted">Region und Grunddaten definieren</p>
    </div>
    <button class="close-btn" type="button" on:click={handleDismiss} aria-label="Schliessen">×</button>
  </div>

  <form class="modal-body" on:submit|preventDefault={handleSubmit}>
    {#if error}
      <div class="field-error">
        <Icon name="alert" size={16} />
        <span>{error}</span>
      </div>
    {/if}

    <div class="form-group">
      <label for="projectName">Projektname</label>
      <input
        bind:this={projectNameInput}
        id="projectName"
        type="text"
        bind:value={projectName}
        placeholder="z.B. Matterhorn-West"
      />
    </div>

    <div class="form-group">
      <label for="description">
        Beschreibung <span class="optional">(optional)</span>
      </label>
      <textarea
        id="description"
        bind:value={description}
        placeholder="Kurze Beschreibung der Region..."
        rows={3}
      ></textarea>
    </div>

    <div class="form-group">
      <label for="bbox">BBox (EPSG:2056)</label>
      <input
        id="bbox"
        type="text"
        bind:value={bbox}
        placeholder="minx, miny, maxx, maxy"
      />
      <p class="field-hint">
        Koordinaten in EPSG:2056 (LV95), mit <code>minx &lt; maxx</code> und <code>miny &lt; maxy</code>.
        <br />Beispiel: <code>2788000, 1181000, 2792000, 1185000</code>
      </p>
    </div>

    <div class="form-actions">
      <button class="btn-ghost" type="button" on:click={handleDismiss}>Abbrechen</button>
      <button class="btn-primary" type="submit">
        <Icon name="cloud-upload" size={16} />
        Projekt erstellen
      </button>
    </div>
  </form>
</div>

<style>
  :global(body) { margin: 0; background: #020617; }

  .modal {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 1rem;
    width: min(480px, 95vw);
    box-shadow: 0 24px 70px rgba(0,0,0,0.5);
    overflow: hidden;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #334155;
  }
  .modal-header h3 { margin: 0; font-size: 1.125rem; color: #f8fafc; }
  .modal-header .muted { margin: 0.25rem 0 0; font-size: 0.8125rem; }

  .close-btn {
    background: none;
    border: none;
    color: #94a3b8;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0 0.25rem;
    line-height: 1;
  }
  .close-btn:hover { color: #f8fafc; }

  .modal-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .field-error {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 0.5rem;
    color: #fca5a5;
    font-size: 0.875rem;
  }

  .form-group { display: flex; flex-direction: column; gap: 0.375rem; }

  .form-group label {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #e2e8f0;
  }

  .optional { font-weight: 400; color: #64748b; }

  .form-group input,
  .form-group textarea {
    background: #0f172a;
    border: 1px solid #475569;
    border-radius: 0.5rem;
    color: #e2e8f0;
    padding: 0.625rem 0.75rem;
    font: inherit;
    font-size: 0.875rem;
    transition: border-color 0.15s;
  }
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #38bdf8;
    box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
  }
  .form-group input::placeholder,
  .form-group textarea::placeholder { color: #475569; }

  .field-hint {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
  }
  .field-hint code {
    background: #0f172a;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    color: #94a3b8;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    padding-top: 0.5rem;
  }

  .btn-ghost {
    background: none;
    border: 1px solid #475569;
    color: #94a3b8;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;
    transition: all 0.15s;
  }
  .btn-ghost:hover { border-color: #94a3b8; color: #e2e8f0; }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s;
  }
  .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4); }
  .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
</style>

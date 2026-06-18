<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from './Icon.svelte';
  import type { ProfileField, RenderingProfilePayload } from './renderProfileTypes';

  let {
    projectId,
    apiUrl,
    winterProfileName = $bindable('default'),
    profileCustom = $bindable(false),
    baseProfile = $bindable('default'),
  }: {
    projectId: number;
    apiUrl: string;
    winterProfileName?: string;
    profileCustom?: boolean;
    baseProfile?: string;
  } = $props();

  let expertOpen = $state(false);
  let loading = $state(false);
  let saving = $state(false);
  let error = $state<string | null>(null);
  let saveMessage = $state<string | null>(null);
  let payload = $state<RenderingProfilePayload | null>(null);
  let expandedSections = $state<Record<string, boolean>>({});
  let activeDoc = $state<ProfileField | null>(null);
  let pendingChanges = $state<Record<string, unknown>>({});
  let templateProfiles = $state<string[]>(['default']);
  let saveTimer: ReturnType<typeof setTimeout> | null = null;

  const sectionLabels: Record<string, string> = {
    profile: 'Profil',
    snow_surface: 'Schneeoberfläche',
    elevation: 'Höhe',
    aspect: 'Exposition',
    open_land: 'Offenes Land',
    forest: 'Wald',
    settlement: 'Siedlung',
    rock: 'Fels',
    roads: 'Strassen',
    paths: 'Wege',
    buildings: 'Gebäude',
    water: 'Gewässer',
    rendering: 'Rendering',
    'rendering.map_shading': 'Kartographische Schattierung',
    'rendering.cast_shadows': 'Wurfschatten',
    'rendering.relief': 'Winter-Relief',
    'rendering.summer_structure': 'Sommer-Tonwertkorrektur',
  };

  function sectionTitle(id: string): string {
    return sectionLabels[id] ?? id;
  }

  async function loadTemplates() {
    try {
      const res = await fetch(`${apiUrl}/rendering-profiles/templates`);
      if (res.ok) {
        const data = await res.json();
        templateProfiles = data.profiles ?? ['default'];
      }
    } catch {
      templateProfiles = ['default'];
    }
  }

  async function loadProfile() {
    loading = true;
    error = null;
    saveMessage = null;
    pendingChanges = {};
    try {
      const res = await fetch(
        `${apiUrl}/projects/${projectId}/rendering-profile?base_profile=${encodeURIComponent(baseProfile)}`,
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: RenderingProfilePayload = await res.json();
      payload = data;
      winterProfileName = data.profile_name;
      profileCustom = data.is_custom;
      baseProfile = data.base_profile;
      if (Object.keys(expandedSections).length === 0 && data.sections.length > 0) {
        expandedSections = Object.fromEntries(data.sections.map((s) => [s.id, true]));
      }
    } catch (e: unknown) {
      error = e instanceof Error ? e.message : 'Profil konnte nicht geladen werden';
    } finally {
      loading = false;
    }
  }

  function scheduleSave() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => void flushSave(), 600);
  }

  async function flushSave() {
    const changes = Object.entries(pendingChanges);
    if (!changes.length || !payload) return;

    saving = true;
    error = null;
    saveMessage = null;
    try {
      const res = await fetch(`${apiUrl}/projects/${projectId}/rendering-profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          base_profile: baseProfile,
          changes: changes.map(([path, value]) => ({ path, value })),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: RenderingProfilePayload = await res.json();
      payload = data;
      winterProfileName = data.profile_name;
      profileCustom = data.is_custom;
      pendingChanges = {};
      saveMessage = 'Projektprofil gespeichert';
    } catch (e: unknown) {
      error = e instanceof Error ? e.message : 'Speichern fehlgeschlagen';
    } finally {
      saving = false;
    }
  }

  function updateField(field: ProfileField, rawValue: unknown) {
    if (!payload) return;
    field.value = rawValue;
    pendingChanges[field.path] = rawValue;
    payload = { ...payload };
    scheduleSave();
  }

  function parseNumberList(text: string, expected: number): number[] | null {
    const parts = text.split(/[,\s]+/).filter(Boolean).map((p) => Number(p));
    if (parts.length !== expected || parts.some((n) => Number.isNaN(n))) return null;
    return parts;
  }

  function handleArrayInput(field: ProfileField, event: Event) {
    const text = (event.currentTarget as HTMLInputElement).value;
    const parsed = parseNumberList(text, Array.isArray(field.value) ? field.value.length : 2);
    if (parsed) updateField(field, parsed);
  }

  function handleStringListInput(field: ProfileField, event: Event) {
    const text = (event.currentTarget as HTMLInputElement).value;
    const items = text.split(',').map((s) => s.trim()).filter(Boolean);
    updateField(field, items);
  }

  function arrayDisplay(value: unknown): string {
    return Array.isArray(value) ? value.join(', ') : '';
  }

  async function resetProfile() {
    if (!confirm('Projektspezifisches Rendering-Profil zurücksetzen und Basisprofil wieder verwenden?')) {
      return;
    }
    saving = true;
    error = null;
    try {
      const res = await fetch(`${apiUrl}/projects/${projectId}/rendering-profile/reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ base_profile: baseProfile }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      pendingChanges = {};
      await loadProfile();
      saveMessage = 'Auf Basisprofil zurückgesetzt';
    } catch (e: unknown) {
      error = e instanceof Error ? e.message : 'Zurücksetzen fehlgeschlagen';
    } finally {
      saving = false;
    }
  }

  function toggleSection(id: string) {
    expandedSections = { ...expandedSections, [id]: !expandedSections[id] };
  }

  /** Persist debounced profile edits before running the pipeline. */
  export async function flushPendingSave(): Promise<void> {
    if (saveTimer) {
      clearTimeout(saveTimer);
      saveTimer = null;
    }
    await flushSave();
  }

  $effect(() => {
    if (projectId) {
      void loadTemplates();
      void loadProfile();
    }
  });

  onMount(() => () => {
    if (saveTimer) clearTimeout(saveTimer);
  });
</script>

<div class="expert-shell">
  <button
    type="button"
    class="expert-toggle"
    aria-expanded={expertOpen}
    on:click={() => (expertOpen = !expertOpen)}
  >
    <div class="expert-toggle-text">
      <Icon name="settings" size={16} />
      <span>Expertenmodus: Rendering-Profil</span>
      {#if profileCustom}
        <span class="custom-badge">angepasst</span>
      {/if}
    </div>
    <Icon name={expertOpen ? 'chevron-up' : 'chevron-down'} size={16} />
  </button>

  {#if expertOpen}
    <div class="expert-panel">
      <div class="expert-toolbar">
        <div class="toolbar-meta">
          <span>Aktives Profil: <strong>{winterProfileName}</strong></span>
          {#if profileCustom}
            <span class="custom-note">Projektspezifische Konfiguration</span>
          {:else}
            <span class="base-note">Basis: {baseProfile}</span>
          {/if}
        </div>
        <div class="toolbar-actions">
          <label class="base-select">
            Vorlage
            <select
              value={baseProfile}
              on:change={async (e) => {
                baseProfile = (e.currentTarget as HTMLSelectElement).value;
                await loadProfile();
              }}
            >
              {#each templateProfiles as template}
                <option value={template}>{template}</option>
              {/each}
            </select>
          </label>
          {#if profileCustom}
            <button type="button" class="btn-reset" disabled={saving} on:click={resetProfile}>
              Zurücksetzen
            </button>
          {/if}
        </div>
      </div>

      {#if loading}
        <p class="status-line">Profil wird geladen…</p>
      {:else if error}
        <p class="error-line">{error}</p>
      {:else if payload}
        {#if saveMessage}
          <p class="save-line">{saveMessage}</p>
        {/if}
        {#if saving}
          <p class="status-line">Speichern…</p>
        {/if}

        <div class="sections">
          {#each payload.sections as section (section.id)}
            <section class="profile-section">
              <button
                type="button"
                class="section-header"
                aria-expanded={expandedSections[section.id] ?? false}
                on:click={() => toggleSection(section.id)}
              >
                <span>{sectionTitle(section.id)}</span>
                <span class="field-count">{section.fields.length}</span>
                <Icon name={expandedSections[section.id] ? 'chevron-up' : 'chevron-down'} size={18} />
              </button>

              {#if expandedSections[section.id]}
                {#if section.description}
                  <p class="section-desc">{section.description}</p>
                {/if}

                <div class="field-grid">
                  {#each section.fields as field (field.path)}
                    <div class="field-card" class:has-doc={!!field.doc}>
                      <div class="field-head">
                        <label for={`field-${field.path}`}>{field.name}</label>
                        {#if field.doc}
                          <button
                            type="button"
                            class="doc-btn"
                            title="Dokumentation anzeigen"
                            aria-label="Dokumentation für {field.name}"
                            on:click={() => (activeDoc = activeDoc?.path === field.path ? null : field)}
                          >
                            <Icon name="info" size={16} />
                          </button>
                        {/if}
                      </div>

                      {#if field.value_kind === 'boolean'}
                        <input
                          id={`field-${field.path}`}
                          type="checkbox"
                          checked={Boolean(field.value)}
                          on:change={(e) =>
                            updateField(field, (e.currentTarget as HTMLInputElement).checked)}
                        />
                      {:else if field.value_kind === 'number'}
                        <input
                          id={`field-${field.path}`}
                          type="number"
                          step="any"
                          value={Number(field.value)}
                          on:change={(e) =>
                            updateField(field, (e.currentTarget as HTMLInputElement).valueAsNumber)}
                        />
                      {:else if field.value_kind === 'rgb' || field.value_kind === 'array'}
                        <input
                          id={`field-${field.path}`}
                          type="text"
                          value={arrayDisplay(field.value)}
                          placeholder="z.B. 0.97, 1.0"
                          on:change={(e) => handleArrayInput(field, e)}
                        />
                      {:else if field.value_kind === 'string_list'}
                        <input
                          id={`field-${field.path}`}
                          type="text"
                          value={arrayDisplay(field.value)}
                          placeholder="z.B. water_mask"
                          on:change={(e) => handleStringListInput(field, e)}
                        />
                      {:else}
                        <input
                          id={`field-${field.path}`}
                          type="text"
                          value={String(field.value ?? '')}
                          on:change={(e) =>
                            updateField(field, (e.currentTarget as HTMLInputElement).value)}
                        />
                      {/if}

                      {#if activeDoc?.path === field.path && field.doc}
                        <div class="doc-panel">
                          {#if field.doc.type}
                            <p><strong>Typ:</strong> {field.doc.type}</p>
                          {/if}
                          {#if field.doc.default}
                            <p><strong>Standard:</strong> {field.doc.default}</p>
                          {/if}
                          {#if field.doc.used_in}
                            <p><strong>Pipeline:</strong> {field.doc.used_in}</p>
                          {/if}
                          {#if field.doc.description}
                            <p>{field.doc.description}</p>
                          {/if}
                        </div>
                      {/if}
                    </div>
                  {/each}
                </div>
              {/if}
            </section>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .expert-shell {
    margin-top: 0.5rem;
  }

  .expert-toggle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 1rem 1.15rem;
    border-radius: 0.85rem;
    border: 1px solid #334155;
    background: #0f172a;
    color: #e2e8f0;
    cursor: pointer;
    font: inherit;
    font-size: 0.95rem;
    font-weight: 600;
  }

  .expert-toggle:hover {
    border-color: #475569;
  }

  .expert-toggle-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .custom-badge {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.15rem 0.45rem;
    border-radius: 999px;
    background: rgba(245, 158, 11, 0.18);
    color: #fbbf24;
  }

  .expert-panel {
    margin-top: 0.85rem;
    padding: 1.25rem;
    border-radius: 1rem;
    border: 1px solid #334155;
    background: #1e293b;
  }

  .expert-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.85rem;
    flex-wrap: wrap;
  }

  .toolbar-meta {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    color: #cbd5e1;
    font-size: 0.82rem;
  }

  .custom-note {
    color: #fbbf24;
    font-size: 0.75rem;
  }

  .base-note {
    color: #94a3b8;
    font-size: 0.75rem;
  }

  .toolbar-actions {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    flex-wrap: wrap;
  }

  .base-select {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.75rem;
    color: #94a3b8;
  }

  .base-select select {
    background: #0f172a;
    border: 1px solid #475569;
    border-radius: 0.5rem;
    color: #e2e8f0;
    padding: 0.4rem 0.55rem;
    font: inherit;
  }

  .btn-reset {
    background: transparent;
    border: 1px solid #64748b;
    color: #cbd5e1;
    border-radius: 0.5rem;
    padding: 0.45rem 0.7rem;
    font-size: 0.78rem;
    cursor: pointer;
  }

  .btn-reset:hover:enabled {
    border-color: #94a3b8;
  }

  .status-line,
  .save-line {
    font-size: 0.8rem;
    color: #7dd3fc;
    margin: 0 0 0.75rem;
  }

  .error-line {
    font-size: 0.8rem;
    color: #f87171;
    margin: 0;
  }

  .sections {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 20rem;
    max-height: min(72vh, 56rem);
    overflow: auto;
    padding-right: 0.35rem;
  }

  .profile-section {
    border: 1px solid #475569;
    border-radius: 0.85rem;
    background: #0f172a;
    overflow: hidden;
    flex-shrink: 0;
  }

  .section-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.65rem;
    padding: 1rem 1.15rem;
    background: rgba(30, 41, 59, 0.55);
    border: none;
    color: #f8fafc;
    font: inherit;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    text-align: left;
  }

  .section-header:hover {
    background: rgba(51, 65, 85, 0.65);
  }

  .field-count {
    margin-left: auto;
    font-size: 0.8rem;
    color: #94a3b8;
    font-weight: 500;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.8);
  }

  .section-desc {
    margin: 0;
    padding: 0.75rem 1.15rem 0.5rem;
    color: #94a3b8;
    font-size: 0.88rem;
    line-height: 1.55;
  }

  .field-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    padding: 0.75rem 1.15rem 1.15rem;
  }

  .field-card {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    padding: 1rem 1.05rem;
    min-height: 5.5rem;
    border-radius: 0.75rem;
    background: #1e293b;
    border: 1px solid #475569;
  }

  .field-card.has-doc {
    border-color: rgba(59, 130, 246, 0.35);
  }

  .field-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .field-head label {
    font-size: 0.9rem;
    font-weight: 500;
    color: #e2e8f0;
    word-break: break-word;
    line-height: 1.35;
  }

  .doc-btn {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 999px;
    background: rgba(59, 130, 246, 0.2);
    color: #93c5fd;
    cursor: pointer;
    flex-shrink: 0;
  }

  .doc-btn:hover {
    background: rgba(59, 130, 246, 0.35);
  }

  .field-card input[type='number'],
  .field-card input[type='text'] {
    width: 100%;
    background: #0f172a;
    border: 1px solid #64748b;
    border-radius: 0.55rem;
    color: #f8fafc;
    padding: 0.7rem 0.85rem;
    font: inherit;
    font-size: 0.92rem;
    min-height: 2.75rem;
    box-sizing: border-box;
  }

  .field-card input[type='number']:focus,
  .field-card input[type='text']:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
  }

  .field-card input[type='checkbox'] {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0.25rem 0;
    accent-color: #3b82f6;
  }

  .doc-panel {
    margin-top: 0.5rem;
    padding: 0.85rem 0.95rem;
    border-radius: 0.55rem;
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid #475569;
    font-size: 0.85rem;
    color: #cbd5e1;
    line-height: 1.55;
  }

  .doc-panel p {
    margin: 0 0 0.35rem;
  }

  .doc-panel p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 640px) {
    .field-grid {
      grid-template-columns: 1fr;
    }

    .sections {
      max-height: 75vh;
    }
  }
</style>

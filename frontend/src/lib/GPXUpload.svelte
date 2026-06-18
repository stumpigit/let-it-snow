<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Icon from './Icon.svelte';

  export let projectId: number = 0;
  export let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  type GPXTrack = {
    id: number;
    project_id: number;
    name: string;
    file_path: string;
    created_at: string;
  };

  let file: File | null = null;
  let tracks: GPXTrack[] = [];
  let uploading = false;
  let loading = false;
  let deletingId: number | null = null;
  let error: string | null = null;
  let uploadSuccess = false;

  const dispatch = createEventDispatcher();

  $: if (projectId) {
    loadTracks();
  }

  async function loadTracks() {
    if (!projectId) return;
    loading = true;
    error = null;
    try {
      const res = await fetch(`${apiUrl}/gpx?project_id=${projectId}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      tracks = await res.json();
    } catch (e: any) {
      error = e.message;
    } finally {
      loading = false;
    }
  }

  function handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      file = input.files[0];
      error = null;
      uploadSuccess = false;
    }
  }

  async function handleUpload() {
    if (!file) return;

    uploading = true;
    error = null;
    uploadSuccess = false;

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('project_id', String(projectId));
      formData.append('name', file.name);

      const res = await fetch(`${apiUrl}/gpx`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      uploadSuccess = true;
      file = null;
      dispatch('uploaded', { status: 'success' });
      await loadTracks();
    } catch (e: any) {
      error = e.message;
    } finally {
      uploading = false;
    }
  }

  async function handleDelete(track: GPXTrack) {
    if (!confirm(`GPX-Track „${track.name}" wirklich löschen?`)) return;

    deletingId = track.id;
    error = null;
    try {
      const res = await fetch(`${apiUrl}/gpx/${track.id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      tracks = tracks.filter((t) => t.id !== track.id);
      dispatch('deleted', { id: track.id });
    } catch (e: any) {
      error = e.message;
    } finally {
      deletingId = null;
    }
  }

  function formatDate(value: string): string {
    try {
      return new Date(value).toLocaleString('de-CH');
    } catch {
      return value;
    }
  }
</script>

<div class="gpx-panel">
  <div class="panel-header">
    <Icon name="gpx" size={18} />
    <div>
      <h3>GPX-Tracks</h3>
      <p>Tracks werden beim nächsten 3D-Viewer-Export auf dem Gelände angezeigt.</p>
    </div>
  </div>

  <div class="upload-row">
    <input
      type="file"
      accept=".gpx"
      on:change={handleFileChange}
      disabled={uploading}
      id="gpx-file-input"
    />
    {#if file}
      <span class="file-name">{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
    {/if}
    <button class="btn-upload" on:click={handleUpload} disabled={!file || uploading}>
      {uploading ? 'Wird hochgeladen…' : 'Hochladen'}
    </button>
  </div>

  {#if uploadSuccess}
    <p class="success">GPX erfolgreich hochgeladen.</p>
  {/if}

  {#if error}
    <p class="error">Fehler: {error}</p>
  {/if}

  <div class="track-list">
    <div class="list-header">
      <span>Hochgeladene Tracks</span>
      <span class="count">{tracks.length}</span>
    </div>

    {#if loading}
      <p class="empty">Tracks werden geladen…</p>
    {:else if tracks.length === 0}
      <p class="empty">Noch keine GPX-Tracks für dieses Projekt.</p>
    {:else}
      <ul>
        {#each tracks as track (track.id)}
          <li>
            <div class="track-info">
              <strong>{track.name}</strong>
              <span class="track-date">{formatDate(track.created_at)}</span>
            </div>
            <button
              type="button"
              class="btn-delete"
              title="Track löschen"
              disabled={deletingId === track.id}
              on:click={() => handleDelete(track)}
            >
              <Icon name="x" size={16} />
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style>
  .gpx-panel {
    display: grid;
    gap: 1rem;
  }

  .panel-header {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    color: #38bdf8;
  }

  .panel-header h3 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
    color: #f8fafc;
  }

  .panel-header p {
    margin: 0;
    font-size: 0.8125rem;
    color: #94a3b8;
  }

  .upload-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .file-name {
    font-size: 0.8125rem;
    color: #cbd5e1;
  }

  .btn-upload {
    padding: 0.5rem 0.875rem;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    border: none;
    border-radius: 0.5rem;
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
  }

  .btn-upload:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .success {
    margin: 0;
    color: #4ade80;
    font-size: 0.875rem;
  }

  .error {
    margin: 0;
    color: #f87171;
    font-size: 0.875rem;
  }

  .track-list {
    border-top: 1px solid #334155;
    padding-top: 0.875rem;
    display: grid;
    gap: 0.625rem;
  }

  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8125rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .count {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 999px;
    padding: 0.125rem 0.5rem;
    color: #e2e8f0;
  }

  .empty {
    margin: 0;
    font-size: 0.875rem;
    color: #64748b;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.5rem;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.625rem 0.75rem;
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 0.5rem;
  }

  .track-info {
    display: grid;
    gap: 0.125rem;
    min-width: 0;
  }

  .track-info strong {
    font-size: 0.875rem;
    color: #f8fafc;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .track-date {
    font-size: 0.75rem;
    color: #64748b;
  }

  .btn-delete {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border: 1px solid #475569;
    border-radius: 0.375rem;
    background: transparent;
    color: #94a3b8;
    cursor: pointer;
    transition: all 0.15s;
  }

  .btn-delete:hover:not(:disabled) {
    color: #f87171;
    border-color: #f87171;
    background: rgba(248, 113, 113, 0.08);
  }

  .btn-delete:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let projectId: number = 0;
  export let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  let file: File | null = null;
  let uploading = false;
  let error: string | null = null;
  let success = false;

  const dispatch = createEventDispatcher();

  function handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      file = input.files[0];
      error = null;
      success = false;
    }
  }

  async function handleUpload() {
    if (!file) return;

    uploading = true;
    error = null;

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

      success = true;
      dispatch('uploaded', { file, status: 'success' });
    } catch (e: any) {
      error = e.message;
    } finally {
      uploading = false;
    }
  }
</script>

<div class="gpx-upload">
  <h3>Upload GPX Track</h3>

  {#if success}
    <p class="success">✓ GPX uploaded successfully!</p>
  {:else}
    <input type="file" accept=".gpx" on:change={handleFileChange} disabled={uploading} />
    {#if file}
      <p>Selected: {file.name} ({(file.size / 1024).toFixed(1)} KB)</p>
    {/if}

    <button on:click={handleUpload} disabled={!file || uploading}>
      {uploading ? 'Uploading...' : 'Upload GPX'}
    </button>

    {#if error}
      <p class="error">Error: {error}</p>
    {/if}
  {/if}
</div>

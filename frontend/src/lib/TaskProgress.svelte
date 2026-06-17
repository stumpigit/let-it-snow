<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let taskId: string = '';
  export let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  const dispatch = createEventDispatcher();

  let status: string = '';
  let progress: number = 0;
  let message: string = '';
  let error: string | null = null;
  let intervalId: number | null = null;
  let completed = false;

  onMount(() => {
    async function fetchStatus() {
      try {
        const res = await fetch(`${apiUrl}/tasks/${taskId}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        status = data.status;
        if (typeof data.progress === 'number') {
          progress = data.progress;
        } else if (data.progress && typeof data.progress === 'object') {
          message = data.progress.message || data.progress.step || message;
          if (typeof data.progress.progress === 'number') {
            progress = data.progress.progress;
          }
        }
        if (data.message) {
          error = data.status === 'FAILURE' ? data.message : null;
          message = data.message;
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
      if (intervalId) clearInterval(intervalId);
    };
  });
</script>

<div class="task-progress">
  {#if status === 'PENDING' || status === 'STARTED'}
    <div class="progress-bar">
      <div class="progress-fill" style="width: {progress * 100}%"></div>
    </div>
    <p>Status: {status} - {message}</p>
  {:else if status === 'SUCCESS'}
    <p class="success">✓ Task completed successfully!</p>
  {:else if status === 'FAILURE'}
    <p class="error">✗ Task failed: {error}</p>
  {:else if status}
    <p>Status: {status}</p>
  {:else}
    <p>Waiting for task to start...</p>
  {/if}
</div>

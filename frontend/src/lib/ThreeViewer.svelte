<script lang="ts">
  export let sceneUrl = '';
  export let showSnow = true;
  export let elevationFactor = 1.0;
</script>

<div class="viewer-container" style="width: 100%; height: 100%;">
  <slot />
</div>

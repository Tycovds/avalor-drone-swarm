<script lang="ts">
  import DetailPanel from "./DetailPanel.svelte";
  import Map from "./Map.svelte";
</script>

<main class="panel mainview">
  <DetailPanel />
  <Map />
</main>

<style lang="scss">
  .mainview {
    position: relative;
    flex: 1 1;
  }
</style>

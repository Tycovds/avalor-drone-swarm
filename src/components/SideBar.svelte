<script>
  import DroneList from "./DroneList.svelte";
  import TargetPosition from "./TargetPosition.svelte";
  import { selectedDrone } from "../stores/DroneStore";
</script>

<aside class="panel">
  <DroneList />
  {#if $selectedDrone}
    <TargetPosition />
  {/if}
</aside>

<style lang="scss">
  aside {
    border-left: solid 2px #2e2e2e;
    padding: 20px 15px;
    flex-basis: 220px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>

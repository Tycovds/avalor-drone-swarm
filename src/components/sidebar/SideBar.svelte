<script>
  import DroneList from "./features/DroneList.svelte";
  import TargetPosition from "./features/TargetPosition.svelte";
  import { selectedDrone } from "../../stores/DroneStore";
</script>

<aside class="panel">
  <DroneList />
  {#if $selectedDrone}
    <TargetPosition />
  {/if}
  <a class="github" href="https://github.com/Tycovds/avalor-drone-swarm" target="_blank">Github</a>
</aside>

<style lang="scss">
  aside {
    border-left: solid 2px #2e2e2e;
    padding: 20px 15px;
    flex-basis: 220px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .github {
      position: absolute;
      bottom: 15px;
    }
  }
</style>

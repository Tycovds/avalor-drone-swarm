<script>
  import DroneList from "./DroneList.svelte";
  import TargetPosition from "./TargetPosition.svelte";

</script>
<aside class="panel">
    <DroneList />
    <TargetPosition />
</aside>

<style lang="scss">
    aside {
      border-left: solid 2px #2E2E2E;
      padding: 20px 15px;
      flex-basis: 220px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
</style>
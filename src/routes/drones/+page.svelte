<script>
  import MainView from "../../components/MainView.svelte";
  import SideBar from "../../components/sidebar/SideBar.svelte";

</script>
<div class="dashboard">
    <MainView />
    <SideBar />
</div>

<style lang="scss">
  .dashboard {
    display: flex;
    flex-grow: 1;

  }
</style> 
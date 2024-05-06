<script lang="ts">
  import DroneListItem from "./DroneListItem.svelte";
  import LaunchButton from "./LaunchButton.svelte";

  import { droneStore } from "../stores/DroneStore";
</script>

<div class="drone-list">
  <div class="feature-header">
    <h3>Drones</h3>
    <span>{$droneStore.length}/5</span>
  </div>
  <ul>
    {#each $droneStore as drone}
      <DroneListItem {drone} />
      {:else}
      <p>No active drones</p>
    {/each}
  </ul>
  {#if $droneStore.length < 5}
  <LaunchButton  />
  {/if}
</div>

<style lang="scss">
  .drone-list {
    .feature-header {
      h3 {
        font-weight: 600;
      }
    }
    ul {
      display: flex;
      gap: 15px;
      flex-direction: column;
      align-items: stretch;
      list-style: none;
    }
  }
</style>

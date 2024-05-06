<script lang="ts">
    import {selectedDroneId} from '../stores/DroneStore';
  export let drone: DroneData;


  const setSelectedDrone = () => {
    $selectedDroneId = drone.id;
  }
</script>


<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<li on:click={setSelectedDrone} class="drone-item secondary-bg" class:isSelected={$selectedDroneId == drone.id}>
  <h4>{drone.callsign}</h4>
  <div class="stats">
    <span class="stat">
      <img class="icon" alt="battery percentage icon" src="/battery.svg" />
      <p class="weight-600">{drone.battery}%</p>
    </span>
    <span class="stat">
      <img class="icon" alt="activetime icon" src="/active-time.svg" />
      <p class="weight-600">{drone.activetime}m</p>
    </span>
  </div>
</li>

<style lang="scss">
  .drone-item {
    border-radius: 8px;
    padding: 5px 12px;
    cursor: pointer;
    .stats {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .stat {
        display: flex;
        align-items: center;
        gap: 5px;
        .icon {
          height: 14px;
        }
      }
    }
  }
  .isSelected {
    outline: solid 2px #a5a5a5;

  }
</style>

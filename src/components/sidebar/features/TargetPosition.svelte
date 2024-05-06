<script lang="ts">
  import { onMount } from "svelte";
  import { selectedDrone, droneStore } from "../../../stores/DroneStore";

  let latitude = "";
  let longitude = "";
  let altitude = "";

  // Update input fields when selectedDrone changes
  onMount(() => {
    updateInputValues();
  });

  $: {
    if ($selectedDrone) {
      updateInputValues();
    }
  }

  function updateInputValues() {
    latitude = $selectedDrone?.targetPosition?.latitude.toString() ?? "";
    longitude = $selectedDrone?.targetPosition?.longitude.toString() ?? "";
    altitude = $selectedDrone?.targetPosition?.altitude.toString() ?? "";
  }

  // Function to handle form submission
  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    droneStore.update((drones) => {
      return drones.map((drone) => {
        if (drone.id === $selectedDrone?.id) {
          return {
            ...drone,
            targetPosition: {
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude),
              altitude: parseFloat(altitude),
            },
          };
        }
        return drone;
      });
    });
  }
</script>

<div class="target-position">
  <div class="feature-header">
    <h3>Target position</h3>
  </div>
  <form on:submit={handleSubmit}>
    <div class="input-wrapper">
      <label for="latitude">Lat</label>
      <input
        type="text"
        id="latitude"
        bind:value={latitude}
        required
        autocomplete="off"
      />
    </div>

    <div class="input-wrapper">
      <label for="longitude">Lon</label>
      <input
        type="text"
        id="longitude"
        bind:value={longitude}
        required
        autocomplete="off"
      />
    </div>
    <div class="input-wrapper">
      <label for="altitude">Alt</label>
      <input
        type="text"
        id="altitude"
        bind:value={altitude}
        required
        autocomplete="off"
      />
    </div>
    <button type="submit" class="btn confirm-target">
      <p>Confirm position</p>
    </button>
  </form>
</div>

<style lang="scss">
  .target-position {
    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .input-wrapper {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
        label {
          font-weight: 600;
        }
        input {
          background: #404040;
          border: none;
          border-radius: 5px;
          padding: 8px 12px;
          font-weight: 600;
        }
      }
    }
  }
</style>

<script lang="ts">
  import { onMount } from "svelte";
  import { droneStore } from "../stores/DroneStore";
  import getRandomCoordinate from "../scripts/getRandomCoordinateInRange";

  let btnText: "Hold to launch" | "Launching" = "Hold to launch";

  let progress = 0;
  let intervalId: number | undefined;

  function startProgress() {
    intervalId = setInterval(increaseProgress, 30);
    btnText = "Launching";
  }

  function increaseProgress() {
    progress += 1;
    if (progress >= 100) {
      clearInterval(intervalId);
      launch();
    }
  }

  function resetProgress() {
    clearInterval(intervalId);
    progress = 0;
    btnText = "Hold to launch";
  }

  function launch() {
    const newDroneCoords = getRandomCoordinate(51.476931,5.343987, 500);
    const targetCoords = getRandomCoordinate(newDroneCoords.latitude, newDroneCoords.longitude, 200);
    $droneStore = [
      ...$droneStore,
      {
        id: "drone" + $droneStore.length,
        callsign: "Drone " + ($droneStore.length + 1),
        latitude: newDroneCoords.latitude,
        longitude: newDroneCoords.longitude,
        altitude: 0,
        speed: 0,
        roll: 0,
        pitch: 0,
        yaw: 0,
        targetMode: "locked",
        battery: 100,
        activetime: 0,
        targetPosition: {
          latitude: targetCoords.latitude,
          longitude: targetCoords.longitude,
          altitude: 22000,
        },
      },
    ];
  }

  onMount(() => {
    return () => clearInterval(intervalId);
  });
</script>

<button
  class="btn launch-drone"
  on:mousedown={startProgress}
  on:mouseup={resetProgress}
  on:mouseleave={resetProgress}
>
  <div style="width: {progress}%" class="progress-bar"></div>
  <p>{btnText}</p>
</button>

<style lang="scss">
  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #ff4444;
  }
</style>

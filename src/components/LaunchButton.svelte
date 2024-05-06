<script lang="ts">
  import { onMount } from "svelte";
  import { droneStore } from "../stores/DroneStore";
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
    $droneStore = [
      ...$droneStore,
      {
        id: "drone" + $droneStore.length,
        callsign: "Drone " + ($droneStore.length + 1),
        latitude: 51.476931,
        longitude: 5.343987,
        altitude: 0,
        speed: 0,
        roll: 0,
        pitch: 0,
        yaw: 0,
        targetMode: "locked",
        battery: 100,
        activetime: 0,
      },
    ];
  }

  onMount(() => {
    return () => clearInterval(intervalId);
  });
</script>

<button
  class="launch-drone"
  on:mousedown={startProgress}
  on:mouseup={resetProgress}
  on:mouseleave={resetProgress}
>
  <div style="width: {progress}%" class="progress-bar"></div>
  <p class="weight-600">{btnText}</p>
</button>

<style lang="scss">
  .launch-drone {
    margin-top: 20px;
    position: relative;
    background: #d9d9d9;
    padding: 12px;
    border-radius: 8px;
    border: none;
    overflow: hidden;
    width: 100%;
    cursor: pointer;
    p {
      position: relative;
      z-index: 3;
      color: #000;

      text-align: center;
    }
  }

  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #ff4444;
  }
</style>

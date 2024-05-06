<script lang="ts">
  import { selectedDrone } from "../stores/DroneStore";
</script>

{#if $selectedDrone}
  <div class="panel details">
    <h3>{$selectedDrone.callsign}</h3>
    <video
      on:click={() => {
        document.querySelector("video")?.requestFullscreen();
      }}
      width="230"
      src="3150402-uhd_4096_2160_25fps.mp4"
      muted
      autoplay
      loop
    ></video>
    <div class="stats">
      <p>Lat: {$selectedDrone.latitude}</p>
      <p>Lon: {$selectedDrone.longitude}</p>
      <p>Alt: {$selectedDrone.altitude} mm</p>
      <pre></pre>
      <p>Spd: {$selectedDrone.speed} km/h</p>
      <pre></pre>
      <p>Roll: {$selectedDrone.roll} deg</p>
      <p>Pitch: {$selectedDrone.pitch} deg</p>
      <p>Yaw: {$selectedDrone.yaw} deg</p>
    </div>
  </div>
{/if}

<style lang="scss">
  .details {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0 0 12px 0;
    border-right: solid 2px #2e2e2e;
    border-bottom: solid 2px #2e2e2e;
    padding: 18px;
    z-index: 1001;

    h3 {
      margin-bottom: 5px;
    }
    video {
      border-radius: 8px;
      margin-bottom: 30px;
      cursor: pointer;
    }
  }
</style>

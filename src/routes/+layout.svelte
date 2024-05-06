<script>
  import Header from "../components/Header.svelte";

  import { fly } from "svelte/transition";

  export let data;
</script>

<div id="app">
  <Header />

  <!-- {#key data.url}
    <div class="content"
      in:fly={{ x: -200, duration: 300, delay: 300 }}
      out:fly={{ x: 200, duration: 300 }}
    >
      <slot />
    </div>
  {/key} -->
  <slot/>
</div>

<style global lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    background-color: #222222;
  }
  #app {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1 1;
    height: 100%;
  }
  .panel {
    background: #262626;
  }
  .secondary-bg {
    background: #404040;
  }
  .map-container .leaflet-div-icon {
    background: transparent;
    border: none;
  }
  // <uniquifier>: Use a unique and descriptive class name
  // <weight>: Use a value from 100 to 900
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  span,
  label,
  button {
    font-family: "Outfit", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: #ffffff;
  }
  .weight-100 {
    font-weight: 100;
  }
  .weight-200 {
    font-weight: 200;
  }
  .weight-300 {
    font-weight: 300;
  }
  .weight-400 {
    font-weight: 400;
  }
  .weight-500 {
    font-weight: 500;
  }
  .weight-600 {
    font-weight: 600;
  }
  .weight-700 {
    font-weight: 700;
  }
  .weight-800 {
    font-weight: 800;
  }
  .weight-900 {
    font-weight: 900;
  }

  // panel features
  .feature-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    h3 {
      font-size: 1rem;
    }
  }
</style>

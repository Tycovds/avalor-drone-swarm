<script>
  import Header from "../components/Header.svelte";

</script>

<div id="app">
  <Header />
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

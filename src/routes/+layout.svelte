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
  input,
  button {
    font-family: "Outfit", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: #ffffff;
  
  }
  input {
    &:focus {
            outline: solid 2px #a5a5a5;
          }
  }
  button {
    &:focus {
            outline: solid 2px #fff;
          }
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
  .btn {
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
      font-weight: 600;
      text-align: center;
    }
  }
</style>

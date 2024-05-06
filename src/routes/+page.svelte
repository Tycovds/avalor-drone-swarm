<section class="panel">
  <iframe
    src="https://soundboard-4bc77.web.app/"
    title="soundboard"
    frameborder="0"
  ></iframe>
  <div class="img-wrapper">
    <div class="img-overlay">
      <a target="_blank" href="https://github.com/Tycovds/soundboardV2">Open repo in Github</a>
    </div>
    <img src="/soundboard-code.png" alt="code from soundboard" />
  </div>
</section>

<style lang="scss">
  section {
    $margin-top: 30px;
    $margin-bottom: 50px;
    $header-height: 80px;
    max-height: calc(100vh - $margin-top - $margin-bottom - $header-height);
    margin: $margin-top 50px $margin-bottom 50px;
    padding: 15px;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 100%;

    .img-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    
      .img-overlay {
        display: none;
        position: absolute;
        inset: 0 0 0 0;
        background: #00000070;
        display: none;
        place-items: center;
        a {
          font-size: 2rem;
        }
      }
      &:hover .img-overlay {
        display: grid;
      }
    }

    img,
    iframe {
      width: 100%;
      height: 100%;
    }
  }
</style>

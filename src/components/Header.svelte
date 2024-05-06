<script lang="ts">
    import { page } from '$app/stores';  
 
  </script>
  
  <header>
    <h1>{$page.url.pathname  === "/" ? 'Code review' : 'Svelte drones'}</h1>
    <h2>Tyco van der Steen</h2>
    <nav>
      <a class:active={$page.url.pathname  === "/"} href="/">Code review</a>
      <div class="separator"></div>
      <a class:active={$page.url.pathname  === "/drones"} href="/drones">Svelte Drone</a>
    </nav>
  </header>
  
  <style lang="scss">
    header {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      padding: 20px 50px;
      h1 {
      }
      h2 {
        justify-self: center;
      }
      nav {
        justify-self: end;
        display: flex;
        gap: 20px;
        a {
          text-decoration: none;
          color: #7c7c7c;
        }
        .active {
          color: #fff;
        }
        .separator {
          height: 20px;
          width: 1px;
          background-color: #7c7c7c;
        }
      }
    }
  </style>
  
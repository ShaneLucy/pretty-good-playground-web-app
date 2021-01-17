<script>
  import { url, isActive } from "@roxi/routify";
  let show = false;
  const _links = [
    ["./index", "Home"],
    ["./questions", "Questions"],
    ["./about", "About PGP"],
  ];

  function handleBurger() {
    show = !show;
  }
</script>

<div class="mobile-nav">
  <aside>
    <span class="burger" on:click={handleBurger}>☰</span>
    <span class="title">Pretty Good Playground</span>
  </aside>
  <nav class:show on:click={() => (show = false)}>
    {#each _links as [path, name]}
      <a class="link" class:active={$isActive(path)} href={$url(path)}>
        {name}
      </a>
    {/each}
  </nav>
</div>

<aside>
  <nav>
    <span>Pretty Good Playground</span>
    {#each _links as [path, name]}
      <a class="link" class:active={$isActive(path)} href={$url(path)}>
        {name}
      </a>
    {/each}
  </nav>
</aside>

<style>
  aside {
    text-align: center;
  }
  nav {
    background: white;
  }

  .link {
    display: block;
    white-space: nowrap;
  }
  .active {
    font-weight: bold;
  }
  .mobile-nav {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100vw;
    font-size: 18px;
    padding: 8px;
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.075);
    display: block;
    bottom: 0;
    color: gray;
    background-color: white;
    border-top: 1px solid gray;
    z-index: 10;
  }

  .burger {
    font-size: 24px;
    position: absolute;
    left: 8px;
    top: 4px;
  }
  nav {
    display: none;
    width: 100%;
    padding: 16px;
    z-index: 1;
  }

  a {
    color: black;
  }

  @media (min-width: 640px) {
    nav {
      margin: 32px;
      border-radius: 3vw;
      box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, 0.6);
      display: inline-block;
      position: relative;
      width: max-content;
    }
    span {
      left: 0;
      text-align: left;
    }
    .link {
      padding: 0 16px;
      min-width: 56px;
      display: inline-block;
    }

    .mobile-nav {
      display: none;
    }
  }

  nav.show {
    display: block;
  }

  @media (prefers-color-scheme: dark) {
    nav,
    .show,
    .mobile-nav {
      background-color: #373232;
      color: #ddd;
    }

    a {
      color: #ddd;
    }

    @media (min-width: 640px) {
      nav {
        box-shadow: 0px 2px 10px 2px rgb(0, 0, 0, 1);
      }
    }
  }
</style>

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

  function toggle() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.toggle("light-theme");
    } else {
      document.body.classList.toggle("dark-theme");
    }
  }
</script>

<div class="mobile-nav">
  <aside>
    <span class="burger" on:click={handleBurger}>☰</span>
    <span class="title">Pretty Good Playground</span>
    <button on:click={toggle}>Toggle</button>
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
    background: var(--light-bg-main);
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
    box-shadow: 0px 5px 20px 5px var(--light-shadow);
    display: block;
    bottom: 0;
    color: var(--light-text);
    background-color: var(--light-bg-main);
    border-top: 1px solid var(--light-border);
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
    color: var(--light-text);
  }

  @media (min-width: 640px) {
    nav {
      margin: 32px;
      border-radius: 3vw;
      box-shadow: 0px 1px 8px 1px var(--light-shadow);
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
      background-color: var(--dark-bg-main);
      color: var(--dark-text);
    }

    a {
      color: var(--dark-text);
    }

    @media (min-width: 640px) {
      nav {
        box-shadow: 0px 2px 10px 2px var(--dark-shadow);
      }
    }
  }
</style>

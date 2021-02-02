<script>
  import { url, isActive } from "@roxi/routify";
  import SvgComp from "./SvgComp.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";

  const _links = [
    ["./index", "Home"],
    ["./questions", "Questions"],
    ["./about", "About PGP"],
  ];
</script>

<div class="mobile-nav">
  <div class="row">
    {#each _links as [path, name]}
      <div class="col">
        <a class="link" class:active={$isActive(path)} href={$url(path)}>
          {name}
        </a>
        <a class="link pt-2" class:active={$isActive(path)} href={$url(path)}>
          <SvgComp svg={path} active={$isActive(path)} />
        </a>
      </div>
    {/each}
    <ThemeToggle />
  </div>
</div>

<aside>
  <nav>
    <div class="row">
      {#each _links as [path, name]}
        <div class="col">
          <a class="link" class:active={$isActive(path)} href={$url(path)}>
            {name}
          </a>
          <a class="link pt-2" class:active={$isActive(path)} href={$url(path)}>
            <SvgComp svg={path} active={$isActive(path)} />
          </a>
        </div>
      {/each}
      <ThemeToggle />
    </div>
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
    position: fixed;
    width: 100vw;
    height: max-content;
    font-size: 1em;
    padding-top: 1vh;
    padding-bottom: 1vh;

    box-shadow: 0px 5px 20px 5px var(--light-shadow);
    display: block;
    bottom: 0;
    color: var(--light-text);
    background-color: var(--light-bg-main);
    border-top: 1px solid var(--light-border);
    z-index: 10;
  }

  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .pt-2 {
    padding-top: 2vh;
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

    .link {
      margin-right: 5vw;
      margin-left: 5vw;
      display: inline-block;
      padding-bottom: 2vh;
    }

    .mobile-nav {
      display: none;
    }

    .pt-2 {
      padding-top: 0vh;
    }
  }

  @media (prefers-color-scheme: dark) {
    nav,
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
        border: 2px solid var(--coloured-border);
      }
    }
  }
</style>

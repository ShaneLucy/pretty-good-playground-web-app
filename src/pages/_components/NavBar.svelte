<script>
  import { url, isActive } from "@roxi/routify";
  import SvgComp from "./SvgComp.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import SideMenu from "./SideMenu.svelte";
  import { sideMenuOpen, sideMenuClosed } from "../../stores";

  const _links = [
    ["./index", "Home"],
    ["./questions", "Questions"],
    ["./about", "About PGP"],
  ];
</script>

{#if $sideMenuOpen}
  <SideMenu />
{/if}
<div class="mobile-nav">
  <div class="row">
    <SvgComp
      on:click={() => ($sideMenuOpen = true)}
      svg={"sidemenu"}
      active="false"
    />
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

<nav>
  <div class="row">
    <div class="col">
      <SvgComp
        on:click={() => ($sideMenuOpen = true)}
        svg={"sidemenu"}
        active="false"
      />
    </div>
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
    <div class="col">
      <ThemeToggle />
    </div>
  </div>
</nav>

<style>
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
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
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
    padding-top: 1.3rem;
    padding-bottom: 1.2rem;
    z-index: 1;
  }

  a {
    color: var(--light-text);
  }

  .pt-2 {
    padding-top: 1rem;
  }

  @media (min-width: 640px) {
    nav {
      box-shadow: 0px 1px 8px 1px var(--light-shadow);
      display: inline-block;
      position: relative;
    }

    .link {
      display: inline-block;
      padding-bottom: 1rem;
    }

    .mobile-nav {
      display: none;
    }

    .pt-2 {
      padding-top: 0;
    }

    /* .col {
      margin-right: 2.5rem;
      margin-left: 2.5rem;
    } */
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

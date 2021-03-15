<script>
  import SvgComp from "./SvgComp.svelte";
  import Progress from "./Progress.svelte";
  import { sideMenuOpen, sideMenuClosed, darkMode } from "../../stores";
  import { onMount, onDestroy } from "svelte";
  import { fly } from "svelte/transition";

  onMount(() => {
    $sideMenuClosed = false;
  });

  onDestroy(() => {
    $sideMenuClosed = true;
  });
</script>

<aside transition:fly={{ x: -500, duration: 1200 }} class="side-menu">
  <div class="container">
    <div class="header">
      <SvgComp
        on:click={() => ($sideMenuOpen = false)}
        svg={"x"}
        active="false"
      />
    </div>
    <div class="content">
      <h4>Want to support this website?</h4>
      <div class="col">
        <SvgComp svg={"btc"} active="false" />
        <p>bc1q9deac6065jnxzlv54f562hghl6w5kznjpzgel3</p>
      </div>
      <div class="col">
        <SvgComp svg={"xmr"} active="false" />
        <p>
          47Q5HrgDMabGZP5K9ghKeshbjqqQPWbQBGUvPByT2FYCKe7vKpd9kDf65Sr3pJLjq5dLeUeDXtTyJeQgBD2STvMrKDzFM5S
        </p>
      </div>
      <div class="col">
        <a href="https://www.buymeacoffee.com/shanelucy" target="_blank">
          {#if $darkMode}
            <SvgComp svg={"bmcDark"} active="false" />
          {:else}
            <SvgComp svg={"bmcLight"} active="false" />
          {/if}
        </a>
      </div>
      <Progress />
    </div>
  </div>
</aside>

<style>
  .header {
    color: var(--light-text);
    border-bottom: 1px solid var(--light-border);
  }

  .content {
    padding-top: 2.5vh;
  }

  aside {
    padding-top: 5vh;
    padding-bottom: 5vh;
    position: absolute;
    z-index: 10;
    background-color: var(--light-bg-main);
    height: max-content;
    width: 80vw;
    border-radius: 3vw;
    box-shadow: 0px 1px 8px 1px var(--light-shadow);
  }

  .col {
    padding-top: 2.5vh;
    word-wrap: break-word;
  }

  @media (prefers-color-scheme: dark) {
    .header {
      color: var(--dark-heading);
      border-bottom: 1px solid var(--dark-border);
    }

    aside {
      background-color: var(--dark-bg-sub);
      box-shadow: 0px 2px 10px 2px var(--dark-shadow);
    }
  }
</style>

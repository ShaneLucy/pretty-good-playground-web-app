<script>
  import SvgComp from "./SvgComp.svelte";
  import Progress from "./Progress.svelte";
  import { sideMenuOpen, sideMenuClosed } from "../../stores";
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
          {#if window.localStorage.getItem("darkMode")}
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
    color: var(--text);
    border-bottom: 1px solid var(--border);
  }

  .content {
    padding-top: 1rem;
  }

  aside {
    margin-left: 0.5rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    position: absolute;
    z-index: 10;
    background-color: var(--bg-main);
    height: max-content;
    width: 95vw;
    border-radius: 3rem;
    box-shadow: 0px 1px 8px 1px var(--shadow);
  }

  .col {
    padding-top: 1.5rem;
    word-wrap: break-word;
  }
</style>

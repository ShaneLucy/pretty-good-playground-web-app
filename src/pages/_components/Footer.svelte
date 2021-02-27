<script>
  import SvgComp from "./SvgComp.svelte";
  import { darkMode } from "../../stores";
</script>

<footer>
  <div class="container">
    <h4>Want to support this website?</h4>
    <div class="col">
      <div class="row">
        <SvgComp svg={"btc"} active="false" />
        <p>bc1q9deac6065jnxzlv54f562hghl6w5kznjpzgel3</p>
      </div>
      <div class="row">
        <SvgComp svg={"xmr"} active="false" />
        <p>
          47Q5HrgDMabGZP5K9ghKeshbjqqQPWbQBGUvPByT2FYCKe7vKpd9kDf65Sr3pJLjq5dLeUeDXtTyJeQgBD2STvMrKDzFM5S
        </p>
      </div>
      <div class="row">
        <a href="https://www.buymeacoffee.com/shanelucy" target="_blank">
          {#if $darkMode}
            <SvgComp svg={"bmcDark"} active="false" />
          {:else}
            <SvgComp svg={"bmcLight"} active="false" />
          {/if}
        </a>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    padding-top: 5vh;
    background-color: var(--light-footer-bg);
    width: 100%;
    margin-top: 15vh;
  }

  .col {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .row {
    width: 48%;
    word-wrap: break-word;
  }

  p {
    color: var(--light-heading);
  }

  @media (prefers-color-scheme: dark) {
    footer {
      background-color: var(--dark-footer-bg);
    }

    p {
      color: var(--dark-text);
    }
  }

  @media (max-width: 640px) {
    footer {
      display: none;
    }
  }
</style>

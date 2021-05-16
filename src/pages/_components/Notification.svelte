<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import SvgComp from "./SvgComp.svelte";
  export let status;
  export let message;

  let timeout = false;

  onMount(() => {
    setTimeout(function () {
      timeout = true;
    }, 2500);
  });
</script>

<div
  class="wrapper"
  style="display:{timeout ? 'none' : 'flex'}"
  transition:fade
>
  <div
    class="content"
    style="background-color:{status === 'Error'
      ? '#ee0101'
      : 'var(--coloured-border)'}"
  >
    <div class="error-header">
      <h4>{status}</h4>

      <p>
        <SvgComp on:click={() => (timeout = true)} svg={"x"} active="false" />
      </p>
    </div>
    <div>
      <p>{message}</p>
    </div>
  </div>
</div>

<style>
  .wrapper {
    position: absolute;
    bottom: 0;
    z-index: 100;
  }

  .content {
    width: auto;
    display: flex;
    flex-wrap: wrap;
  }

  .error-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-right: 1rem;
  }

  div > h4,
  div > p {
    color: var(--light-heading);
    margin: 1rem;
  }

  p {
    margin-top: 0;
  }

  @media (max-width: 640px) {
    .wrapper {
      margin-bottom: 2rem;
    }
  }
</style>

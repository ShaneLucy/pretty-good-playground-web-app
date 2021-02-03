<script>
  import SvgComp from "./SvgComp.svelte";
  import { darkMode } from "../../stores";
  import { onMount } from "svelte";

  function toggle() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.toggle("light-theme");
    } else {
      document.body.classList.toggle("dark-theme");
    }
    darkMode.update((n) => !n);
    window.localStorage.setItem("darkMode", $darkMode);
  }

  onMount(() => {
    if (window.localStorage.getItem("darkMode")) {
      darkMode.update(() =>
        JSON.parse(window.localStorage.getItem("darkMode"))
      );

      JSON.parse($darkMode)
        ? document.body.classList.add("dark-theme")
        : document.body.classList.add("light-theme");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        darkMode.update(true);
      }
    }
  });
</script>

{#if $darkMode}
  <SvgComp on:click={toggle} svg={"moon"} active={false} />
{:else}
  <SvgComp on:click={toggle} svg={"sun"} active={false} />
{/if}

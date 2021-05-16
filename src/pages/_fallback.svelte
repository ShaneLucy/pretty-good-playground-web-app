<script>
  import { url, focus } from "@roxi/routify";
  import SvgComp from "./_components/SvgComp.svelte";
  import NavBar from "./_components/NavBar.svelte";
</script>

<NavBar />
<div class="e404">
  <p>Error 404, Page not found</p>
  <a use:focus href={$url("../")}>Go back</a>
  <SvgComp svg={"404"} active={false} />
</div>

<style>
  div {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: max-content;
    width: 100vw;
  }

  a {
    font-size: 1.5rem;
  }
</style>

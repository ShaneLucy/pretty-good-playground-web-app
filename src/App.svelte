<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import Serviceworker from "./Serviceworker.svelte";
</script>

<style  global>
  @import "../assets/global.css";
</style>

<Router {routes} />
<Serviceworker />
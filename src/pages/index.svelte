<script>
  import NavBar from "./_components/NavBar.svelte";
  import { fade, slide } from "svelte/transition";

  import { metatags } from "@roxi/routify";

  metatags.title = "Pretty Good Playground";
  metatags.description = "An app to learn about and test your knowledge on PGP";
  metatags.author = "Shane Lucy";
  metatags["og:url"] = "";
  metatags["og:image"] = "";
  metatags["og:image:type"] = "";
  metatags["og:image:width"] = "";
  metatags["og:image:height"] = "";
  metatags["og:image:alt"] = "";
</script>

<div in:fade={{ duration: 900 }} out:slide={{ duration: 700 }}>
  <NavBar />

  <main class="container">
    <h1>Home</h1>
    <p>
      When I started using pgp I quickly realised there wasn't a decent, fun,
      interactive method to test that I was actually using pgp properly. Which
      lead me to create this website. All cryptography is handled in the browser
      using <a
        class="external"
        href="https://github.com/openpgpjs/openpgpjs"
        target="_blank"
        rel="noreferrer">OpenPGP.js</a
      >
    </p>
    <p>
      <a
        class="external"
        href="https://github.com/ShaneLucy/pretty-good-playground"
        target="_blank"
        rel="noreferrer"
      >
        This website is open source, feel free to view it
      </a>
    </p>
  </main>
</div>

<style>
  p {
    line-height: 1.3;
  }
</style>

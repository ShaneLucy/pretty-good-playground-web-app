<script>
  import NavBar from "./_components/NavBar.svelte";
  import { metatags } from "@roxi/routify";
  metatags.title = "Pretty Good Playground";
  metatags.description = "Description coming soon...";
</script>

<NavBar />
<div class="container">
  <h1>Home</h1>
  <p>
    When I started using pgp I quickly realised there wasn't a decent, fun,
    interactive method to test that I was actually using pgp properly. Which
    lead me to create this website. All cryptography is handled in the browser
    using <a class="external" href="https://github.com/openpgpjs/openpgpjs"
      >OpenPGP.js</a
    >
  </p>
  <p>
    <a
      class="external"
      href="https://github.com/ShaneLucy/pretty-good-playground"
    >
      This website is open source, feel free to view it
    </a>
  </p>
</div>

<style>
  p {
    line-height: 1.3;
  }

  a.external {
    text-decoration: underline;
    color: var(--light-external-link);
  }

  @media (prefers-color-scheme: dark) {
    a.external {
      color: var(--dark-external-link);
    }
  }
</style>

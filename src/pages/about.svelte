<script>
  import NavBar from "./_components/NavBar.svelte";
  import { fade, slide } from "svelte/transition";
</script>

<div in:fade={{ duration: 900 }} out:slide={{ duration: 700 }}>
  <NavBar />
  <div class="container">
    <main>
      <h1>Pretty Good Privacy</h1>
      <blockquote cite="https://wikipedia.org/wiki/Pretty_Good_Privacy">
        Pretty Good Privacy is an encryption program that provides cryptographic
        privacy and authentication for data communication. PGP is used for
        signing, encrypting, and decrypting texts, e-mails, files, directories,
        and whole disk partitions and to increase the security of e-mail
        communications.
      </blockquote>

      <h1>OpenPGP</h1>
      <blockquote cite="https://www.openpgp.org/about/">
        OpenPGP is a non-proprietary protocol for encrypting email communication
        using public key cryptography. It is based on the original PGP (Pretty
        Good Privacy) software. The OpenPGP protocol defines standard formats
        for encrypted messages, signatures, and certificates for exchanging
        public keys. Beginning in 1997, the OpenPGP Working Group was formed in
        the Internet Engineering Task Force (IETF) to define this standard that
        had formerly been a proprietary product since 1991. Over the past
        decade, PGP, and later OpenPGP, has become the standard for nearly all
        of the world’s encrypted email. As an IETF Proposed Standard RFC 4880,
        OpenPGP can be implemented by any company without paying any licensing
        fees to anyone.
      </blockquote>

      <h1>OpenPGP.js</h1>
      <blockquote cite="https://openpgpjs.org/">
        This project aims to provide an Open Source OpenPGP library in
        JavaScript so it can be used on virtually every device. Instead of other
        implementations that are aimed at using native code, OpenPGP.js is meant
        to bypass this requirement (i.e. people will not have to install gpg on
        their machines in order to use the library). The idea is to implement
        all the needed OpenPGP functionality in a JavaScript library that can be
        reused in other projects that provide browser extensions or server
        applications. It should allow you to sign, encrypt, decrypt, and verify
        any kind of text - in particular e-mails - as well as managing keys.
      </blockquote>
    </main>
  </div>
</div>

<style>
  h1 {
    padding-top: 2rem;
  }

  @media (min-width: 780px) {
    h1 {
      align-self: flex-start;
    }

    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    blockquote {
      width: 80ch;
      line-height: 1.3;
    }
  }
</style>

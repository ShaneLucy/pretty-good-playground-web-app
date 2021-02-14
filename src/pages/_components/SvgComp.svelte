<script>
  import { createEventDispatcher } from "svelte";
  export let svg;
  export let active;

  const dispatch = createEventDispatcher();

  function callParentFunction() {
    dispatch("click", "event");
  }
</script>

{#if svg === "./index"}
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    class:active
    ><path
      d="M7.5.5l.325-.38a.5.5 0 00-.65 0L7.5.5zm-7 6l-.325-.38L0 6.27v.23h.5zm5 8v.5a.5.5 0 00.5-.5h-.5zm4 0H9a.5.5 0 00.5.5v-.5zm5-8h.5v-.23l-.175-.15-.325.38zM1.5 15h4v-1h-4v1zm13.325-8.88l-7-6-.65.76 7 6 .65-.76zm-7.65-6l-7 6 .65.76 7-6-.65-.76zM6 14.5v-3H5v3h1zm3-3v3h1v-3H9zm.5 3.5h4v-1h-4v1zm5.5-1.5v-7h-1v7h1zm-15-7v7h1v-7H0zM7.5 10A1.5 1.5 0 019 11.5h1A2.5 2.5 0 007.5 9v1zm0-1A2.5 2.5 0 005 11.5h1A1.5 1.5 0 017.5 10V9zm6 6a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-12-1a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1z"
      fill="currentColor"
    /></svg
  >
{/if}
{#if svg === "./about"}
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    class:active
    ><path
      d="M4.5 6.5v-3a3 3 0 016 0v3m-8 0h10a1 1 0 011 1v6a1 1 0 01-1 1h-10a1 1 0 01-1-1v-6a1 1 0 011-1z"
      stroke="currentColor"
    /></svg
  >
{/if}

{#if svg === "./questions"}
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    class:active
    ><path
      d="M7.5 12v-1.264c0-1.37.774-2.623 2-3.236a3.65 3.65 0 002-3.257C11.5 2.195 9.84.5 7.792.5h-.207c-1.335 0-2.615.53-3.56 1.474L3.5 2.5m3.5 12h1"
      stroke="currentColor"
    /></svg
  >
{/if}

{#if svg === "moon"}
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    on:click={callParentFunction}
  >
    <title>moon</title>
    <path
      d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z"
      stroke="currentColor"
      stroke-linejoin="round"
    /></svg
  >
{/if}

{#if svg === "sun"}
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    on:click={callParentFunction}
  >
    <title>sun</title>
    <path
      d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z"
      stroke="currentColor"
      stroke-linecap="square"
    /></svg
  >
{/if}

<style>
  .active {
    font-weight: bold;
  }
</style>

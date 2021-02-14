<script>
  export let questions = [
    {
      name: "What is PGP",
      answer: "ans1",
    },
    {
      name: "qs2",
      answer: "ans2",
    },
    {
      name: "qs2",
      answer: "ans2",
    },
    {
      name: "qs2",
      answer: "ans2",
    },
    {
      name: "qs2",
      answer: "ans2",
    },
    {
      name: "qs2",
      answer: "ans2",
    },
  ];
</script>

{#each questions as question, i}
  <div class="card">
    {#if (i === 0, i++)}
      <h2>Question: {i}</h2>
    {:else}
      <h2>Question: {i}</h2>{/if}
    <div class="header">
      <h4>{question.name}</h4>
    </div>
    <div class="content">
      <label for="answer">Enter your Answer to Proceed:</label>
      <textarea name="answer" placeholder="Enter Your Answer" />
    </div>
    <div class="footer">
      <p>Attempts:</p>
      <p>Correct:</p>
    </div>
  </div>
{/each}

<style>
  h2,
  .header,
  .content,
  .footer {
    margin-left: 5vw;
    margin-right: 5vw;
    margin-bottom: 2vh;
  }

  .header {
    justify-self: start;
    border-bottom: 1px solid var(--light-border);
  }

  .content {
    padding-top: 2vh;
  }

  .footer {
    display: flex;
    justify-content: space-between;
  }

  label {
    padding-bottom: 1vh;
  }

  textarea {
    width: 100%;
    height: 70vw;
  }

  .card {
    margin-top: 5vh;
    margin-bottom: 15vh;
    padding-top: 3vh;
    padding-bottom: 3vh;
    border-radius: 1.5vw;
    box-shadow: 0px 1px 8px 1px var(--light-shadow);
    border-right-width: 0.5vw;
    border-right-style: solid;
    border-right-color: var(--coloured-border);
    border-bottom-width: 0.5vw;
    border-bottom-style: solid;
    border-bottom-color: var(--coloured-border);
  }

  @media (min-width: 640px) {
    h2,
    .header,
    .content,
    .footer {
      margin-left: 2.5vw;
      margin-right: 2.55vw;
    }

    .card {
      margin-left: 5vw;
      margin-right: 5vw;
      margin-top: 5vh;
      margin-bottom: 5vh;
      border-radius: 1vw;
      box-shadow: 0px 1px 8px 1px var(--light-shadow);
    }

    textarea {
      height: 40vw;
    }
  }

  @media (prefers-color-scheme: dark) {
    .card {
      background-color: var(--dark-bg-sub);
      box-shadow: 0px 2px 10px 2px var(--dark-shadow);
    }
    .header {
      border-bottom: 2px solid var(--dark-border);
    }
  }
</style>

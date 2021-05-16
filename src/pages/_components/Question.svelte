<script>
  export let questions = [];
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import SvgComp from "./SvgComp.svelte";
  const dispatch = createEventDispatcher();

  /**
   *
   * @param {number}question
   */
  function submit(question) {
    if (validate(question)) {
      dispatch("click", {
        text: question,
      });
    }
  }

  /**
   *
   * @param {number} question
   * @return boolean
   */
  function validate(question) {
    if (questions[question - 1].submittedAnswer.length === 0) {
      questions[question - 1].error.status = true;
      questions[question - 1].error.message = "Required";
    }
    if (questions[question - 1].submittedAnswer.length > 0) {
      questions[question - 1].error.status = false;
    }

    return questions[question - 1].submittedAnswer.length > 0 ? true : false;
  }
</script>

{#each questions as question}
  <div
    class="card"
    class:completed-rest={question.completed && question.number > 1}
    class:completed={question.completed}
  >
    <h2>Question: {question.number}</h2>
    {#if !question.completed}
      <form>
        <div class="header">
          <h4>{question.name}</h4>
        </div>
        <div transition:fade class="content">
          <label for="answer">Enter your Answer to Proceed:</label>
          <div class="error-container">
            {#if question.error.status}
              <span transition:fade aria-live="polite" class="error"
                >{question.error.message}</span
              >
            {/if}
            {#if question.incorrect}
              <span transition:fade aria-live="polite" class="error"
                >Incorrect</span
              >
            {/if}
          </div>
          <textarea
            bind:value={question.submittedAnswer}
            name="answer"
            on:input={validate(question.number)}
            required
            placeholder="Enter Your Answer"
          />
        </div>
      </form>
      <div class="footer baseline">
        <p>Attempts: {question.attempts}</p>
        <button on:click={submit(question.number)}>Submit</button>
      </div>
    {:else}
      <div class="footer center">
        <p>Attempts: {question.attempts}</p>
        <SvgComp svg={"tick"} active="false" />
      </div>
    {/if}
  </div>
{/each}

<style>
  h2,
  .header,
  .content,
  .footer {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  .header {
    justify-self: start;
    border-bottom: 1px solid var(--light-border);
  }

  .content {
    padding-top: 0.5rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
  }

  .baseline {
    align-items: baseline;
  }

  .center {
    align-items: center;
  }

  .error-container {
    height: 2rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  .error {
    font-size: 1.4em;
    color: var(--light-error-text);
  }

  /* label {
    padding-bottom: 1vh;
  } */

  textarea {
    width: 100%;
    height: auto;
  }

  textarea:invalid {
    border-color: var(--light-error-text);
  }

  textarea:valid {
    border-color: var(--coloured-border);
  }

  button {
    background-color: var(--dark-bg-heading);
    border-color: var(--light-heading);
    color: var(--light-heading);
    font-size: 1.3rem;
  }

  button:hover {
    background-color: var(--dark-bg-sub);
    color: var(--dark-text);
  }

  .card {
    margin-top: 2rem;
    margin-bottom: 7rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    border-radius: 0.5rem;
    box-shadow: 0px 1px 8px 1px var(--light-shadow);
    border-right-width: 0.2rem;
    border-right-style: solid;
    border-right-color: var(--coloured-border);
    border-bottom-width: 0.2rem;
    border-bottom-style: solid;
    border-bottom-color: var(--coloured-border);
  }

  @media (min-width: 640px) {
    h2,
    .header,
    .content,
    .footer {
      margin-left: 2rem;
      margin-right: 2rem;
    }

    .card {
      margin: 3.5rem;
      border-radius: 1rem;
      box-shadow: 0px 1px 8px 1px var(--light-shadow);
    }

    textarea {
      height: auto;
    }
  }

  @media (prefers-color-scheme: dark) {
    textarea:invalid {
      border-color: var(--dark-error-text);
    }

    textarea:valid {
      border-color: var(--dark-border);
    }

    .card {
      background-color: var(--dark-bg-sub);
      box-shadow: 0px 2px 10px 2px var(--dark-shadow);
    }

    .header {
      border-bottom: 2px solid var(--dark-border);
    }

    .error {
      color: var(--dark-error-text);
    }
  }

  .completed {
    margin-bottom: 0;
    padding-top: 0.4rem;
    padding-bottom: 4rem;
  }

  .completed-rest {
    margin-top: -4rem;
  }
</style>

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
    {/if}
    {#if !question.completed}
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

  .baseline {
    align-items: baseline;
  }

  .center {
    align-items: center;
  }

  .error-container {
    height: 5vh;
  }

  .error {
    font-size: 1.4em;
    padding-bottom: 2vh;
    color: var(--light-error-text);
  }

  label {
    padding-bottom: 1vh;
  }

  textarea {
    width: 100%;
    height: 70vw;
  }

  textarea:valid {
    border-color: var(--coloured-border);
  }

  button {
    background-color: var(--dark-bg-heading);
    border-color: var(--light-heading);
    color: var(--light-heading);
    font-size: 1.4rem;
  }

  button:hover {
    background-color: var(--dark-bg-sub);
    color: var(--dark-text);
  }

  .card {
    margin-top: 5vh;
    margin-bottom: 15vh;
    padding-top: 3vh;
    padding-bottom: 3vh;
    border-radius: 1.5vw;
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

    .error {
      color: var(--dark-error-text);
    }
  }

  .completed {
    margin-bottom: 0;
    padding-top: 0.4rem;
    padding-bottom: 4vh;
  }

  .completed-rest {
    margin-top: -4rem;
  }
</style>

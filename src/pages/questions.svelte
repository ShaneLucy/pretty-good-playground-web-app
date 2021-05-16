<script>
  import NavBar from "./_components/NavBar.svelte";
  import Question from "./_components/Question.svelte";
  import { tick, onMount } from "svelte";
  import Notification from "./_components/Notification.svelte";
  // import { publicKey, privateKey } from "../stores";
  import { generateKey } from "../crypto";

  import { fade, slide } from "svelte/transition";

  let questions = [
    {
      name: "What is PGP",
      number: 1,
      correctAnswer: "ans1",
      completed: false,
      attempts: 0,
      submittedAnswer: "",
      incorrect: false,
      error: {
        status: false,
        message: [],
      },
    },
    {
      name: "What is PGP",
      number: 2,
      correctAnswer: "ans1",
      first: true,
      completed: false,
      attempts: 0,
      submittedAnswer: "",
      error: {
        status: false,
        message: [],
      },
    },
    {
      name: "What is PGP",
      number: 3,
      correctAnswer: "ans1",
      completed: false,
      attempts: 0,
      submittedAnswer: "",
      incorrect: false,
      error: {
        status: false,
        message: [],
      },
    },
    {
      name: "What is PGP",
      number: 4,
      correctAnswer: "ans1",
      completed: false,
      attempts: 0,
      submittedAnswer: "",
      incorrect: false,
      error: {
        status: false,
        message: [],
      },
    },
  ];

  const errors = {
    keyGenerate: "",
  };

  onMount(() => {
    generateKey("brainpoolP512r11", "PGPTest", "pgptest@genuinemail.com").catch(
      (e) => {
        errors.keyGenerate = e;
        console.log(e);
      }
    );
  });

  // let pubKey, privKey;

  // publicKey.subscribe((value) => {
  //   pubKey = value;
  // });

  // privateKey.subscribe((value) => {
  //   privKey = value;
  // });

  // console.log(privKey);

  async function submit(event) {
    console.log(event.detail.text);

    await tick();
    questions[event.detail.text - 1].attempts += 1;

    questions[event.detail.text - 1].correctAnswer ==
    questions[event.detail.text - 1].submittedAnswer
      ? ((questions[event.detail.text - 1].completed = true),
        (questions[event.detail.text - 1].incorrect = false))
      : (questions[event.detail.text - 1].incorrect = true);
  }
</script>

{#if errors.keyGenerate}
  <Notification status={"Error"} message={errors.keyGenerate} />
{/if}
<div in:fade={{ duration: 900 }} out:slide={{ duration: 700 }}>
  <NavBar />
  <main class="container">
    <Question {questions} on:click={submit} />
  </main>
</div>

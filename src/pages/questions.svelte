<script>
  import NavBar from "./_components/NavBar.svelte";
  import Question from "./_components/Question.svelte";
  import { tick } from "svelte";
  import * as openpgp from "openpgp";
  import Progress from "./_components/Progress.svelte";
  import { percentage } from "../stores";

  function stuff() {
    percentage.update((n) => n + 0.1);
    console.log($percentage);
    window.localStorage.setItem("score", $percentage);
  }

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
  const encrypt = async () => {
    const key = await openpgp.generateKey({
      curve: "brainpoolP512r1",
      userIds: [{ name: "Test", email: "test@test.com" }],
    });
    console.log(key);
    // put keys in backtick (``) to avoid errors caused by spaces or tabs
    const publicKeyArmored = `-----BEGIN PGP PUBLIC KEY BLOCK-----
    ...
    -----END PGP PUBLIC KEY BLOCK-----`;
    const privateKeyArmored = `-----BEGIN PGP PRIVATE KEY BLOCK-----
    ...
    -----END PGP PRIVATE KEY BLOCK-----`; // encrypted private key
    const passphrase = `yourPassphrase`; // what the private key is encrypted with
    const privateKey = await openpgp.readArmored(privateKeyArmored);
    await privateKey.decrypt(passphrase);
    const encrypted = await openpgp.encrypt({
      message: openpgp.Message.fromText("Hello, World!"), // input as Message object
      publicKeys: await openpgp.readArmoredKey(publicKeyArmored), // for encryption
      privateKeys: privateKey, // for signing (optional)
    });
    console.log(encrypted); // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
    const { data: decrypted } = await openpgp.decrypt({
      message: await openpgp.readArmoredMessage(encrypted), // parse armored message
      publicKeys: await openpgp.readArmoredKey(publicKeyArmored), // for verification (optional)
      privateKeys: privateKey, // for decryption
    });
    console.log(decrypted);
  };
  encrypt();
</script>

<NavBar />
{#key $percentage}
  <Progress />
{/key}
<button on: on:click={stuff}>Click me</button>
<div class="container">
  <Question {questions} on:click={submit} />
</div>

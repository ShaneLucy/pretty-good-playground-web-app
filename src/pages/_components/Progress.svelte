<script>
  import { percentage } from "../../stores";
  import { onMount } from "svelte";
  const i = $percentage * 100;
  const progress = 565 - 565 * $percentage;

  onMount(() => {
    if (window.localStorage.getItem("score") !== null) {
      percentage.update(() => window.localStorage.getItem("score"));
    }
  });
</script>

<div class="progress">
  <svg width="200" height="200" class="chart-progress">
    <circle cx="100" cy="100" r="90" class="back" fill="none" />
    <circle
      cx="100"
      cy="100"
      r="90"
      :bind:value={progress}
      style="stroke-dashoffset:{progress}"
      class="front"
      fill="none"
    />
    <g class="text">
      <text
        x="100"
        y="100"
        alignment-baseline="central"
        text-anchor="middle"
        id="percentage">{i}%</text
      >
    </g>
  </svg>
</div>

<style>
  .progress {
    display: flex;
    justify-content: center;
  }
  .progress .chart-progress {
    padding: 10px;
  }
  .progress .chart-progress .back {
    stroke: var(--light-text);
    stroke-width: 10;
  }
  .progress .chart-progress .front {
    stroke: var(--coloured-border);
    stroke-width: 10;
    stroke-linecap: round;
    stroke-dasharray: 565;
    transform: rotate(-90deg);
    transform-origin: center;
  }

  .progress .chart-progress .text {
    font-size: 2.5rem;
    fill: var(--light-heading);
  }

  .front {
    animation: fill 2s reverse ease-out;
  }

  @keyframes fill {
    to {
      stroke-dasharray: 0, 566;
    }
  }

  @media (prefers-reduced-motion) {
    @keyframes fill {
      to {
        stroke-dasharray: 0, 0;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .progress .chart-progress .text {
      fill: var(--dark-heading);
    }

    .progress .chart-progress .back {
      stroke: var(--dark-heading);
    }
  }
</style>

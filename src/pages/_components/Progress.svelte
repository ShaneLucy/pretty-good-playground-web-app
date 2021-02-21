<script>
  import { percentage } from "../../stores";
  import { onMount } from "svelte";
  const i = $percentage * 100;
  // progress bar radius = 2 * PI * R =  286
  const progress = 286 - 286 * $percentage;

  onMount(() => {
    if (window.localStorage.getItem("score") !== null) {
      percentage.update(() => window.localStorage.getItem("score"));
    }
  });
</script>

<div class="progress">
  <svg width="100" height="100" class="chart-progress">
    <circle cx="50" cy="50" r="45" class="back" fill="none" />
    <circle
      cx="50"
      cy="50"
      r="45"
      :bind:value={progress}
      style="stroke-dashoffset:{progress}"
      class="front"
      fill="none"
      title="outer"
      role=""
    />
    <g class="text">
      <text x="50" y="50" alignment-baseline="central" text-anchor="middle"
        >{i}%</text
      >
    </g>
  </svg>
</div>

<style>
  .progress {
    position: sticky;
    bottom: 0;
  }

  .progress .chart-progress {
    padding: 10px;
  }

  .back {
    stroke: var(--light-text);
    stroke-width: 5;
  }

  .front {
    stroke: var(--coloured-border);
    stroke-width: 5;
    stroke-linecap: round;
    stroke-dasharray: 286;
    transform: rotate(-90deg);
    transform-origin: center;
  }

  .text {
    font-weight: bold;
    fill: var(--light-heading);
  }

  .front {
    animation: fill 2s reverse ease-out;
  }

  @keyframes fill {
    to {
      stroke-dasharray: 0, 287;
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
    .text {
      fill: var(--dark-heading);
    }

    .back {
      stroke: var(--dark-heading);
    }
  }
</style>

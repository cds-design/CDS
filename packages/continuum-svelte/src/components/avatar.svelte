<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { bubbleEvents } from "@utils/events";

  import { scale } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let src: string;

  export let active = false;

  export let indicatorbg = "";
</script>

<!-- <div class="bg" /> -->
<img class:active {src} alt="profile" />
{#if active}
  <div
    class:indicator={active}
    transition:scale
    style:--bg={indicatorbg}
    {...$$restProps}
    use:bubbleEvents={dispatch}
  >
    <slot name="indicator" />
    <svg
      viewBox="0 0 1 1"
      aria-hidden="true"
      style="position: absolute; pointer-events: none; top: -1px; left: -1px; width: 1px; height: 1px;"
    >
      <clipPath id="circle" clipPathUnits="objectBoundingBox">
        <path
          d="M1,0.5 c0,0.103,-0.03,0.197,-0.087,0.277 c-0.017,-0.027,-0.047,-0.043,-0.08,-0.043 c-0.057,0,-0.1,0.043,-0.1,0.1 c0,0.033,0.017,0.063,0.043,0.08 c-0.08,0.057,-0.173,0.087,-0.277,0.087 c-0.277,0,-0.5,-0.223,-0.5,-0.5 S0.223,0,0.5,0 s0.5,0.223,0.5,0.5"
        />
      </clipPath>
    </svg>
  </div>
{/if}

<style>
  @import "globals.css";

  :host {
    position: relative;
    backdrop-filter: var(--blur);
    border-radius: var(--circle-radius);
    height: 4em;
    aspect-ratio: var(--square-aspect);
    overflow: visible;
  }

  img {
    width: 100%;
    aspect-ratio: var(--square-aspect);
    object-fit: cover;
    border-radius: var(--circle-radius);
    image-rendering: pixelated;
    --padding: 0;
  }

  .active {
    clip-path: url("#circle");
  }

  .indicator {
    position: absolute;
    inset: 0;
    pointer-events: none;
    --sqrt2: 1.414;
    transform: translate(calc(100% / var(--sqrt2)), calc(100% / var(--sqrt2)));
  }

  .indicator::after {
    content: "";
    display: inline-block;
    position: absolute;
    background: var(--bg, limegreen);
    width: 15%;
    aspect-ratio: var(--square-aspect);
    border-radius: var(--circle-radius);
    transform: translate(calc(50% - 15%), calc(50% - 15%));
  }
</style>

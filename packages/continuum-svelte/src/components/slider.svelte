<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { bubbleEvents } from "@utils/events";

  const dispatch = createEventDispatcher();

  export let value = 0;

  export let disabled: "true" | "false" = "false";
</script>

<input
  type="range"
  disabled={disabled != "false"}
  class:disabled={disabled != "false"}
  {...$$restProps}
  use:bubbleEvents={dispatch}
  bind:value
  style:--value--skip={value + "%"}
/>

<style>
  @import "globals.css";

  :host {
    overflow: visible;
  }

  input {
    min-width: var(--min-chars);
    background-color: transparent;
    backdrop-filter: var(--blur);
    --border-opacity: min(
      calc(100% - var(--value--skip)),
      calc(var(--less-opaque) * 100%)
    );
    --border-color: rgba(var(--accent-rgb), var(--border-opacity));
    border: solid var(--border-color) var(--border-width);
    --track-color: linear-gradient(
      90deg,
      rgba(var(--accent-rgb), var(--less-opaque)) 0%,
      rgba(var(--accent-rgb), var(--high-opaque)) var(--value--skip),
      transparent var(--value--skip)
    );
    border-radius: var(--circle-radius);
    height: 0.25em;
  }

  :focus {
    outline: none;
  }

  ::-webkit-slider-runnable-track {
    height: 100%;
    border-radius: var(--circle-radius);
    background: var(--track-color);
    cursor: pointer;
  }

  ::-webkit-slider-thumb {
    appearance: none;
    width: 0.5em;
    aspect-ratio: 1;
    box-shadow: 0 0 0 0.25em var(--accent);
    background-color: var(--accent);
    border-radius: 50vmax;
    transform: translateY(-25%);
    filter: var(--drop) brightness(0.75);
  }

  :focus::-webkit-slider-runnable-track {
    background: var(--track-color);
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { bubbleEvents } from "@utils/events";

  const dispatch = createEventDispatcher();

  export let value = 0;
  export let max = 100;

  $: if (value > max) {
    throw new Error("value must be less than max");
  }
</script>

<progress {...$$restProps} use:bubbleEvents={dispatch} {value} {max} />

<style>
  @import "globals.css";

  progress {
    border-radius: var(--circle-radius);
    overflow: hidden;
    height: 0.5em;
    border: var(--border);
    display: block;
    min-width: var(--min-chars);
  }

  ::-webkit-progress-bar {
    background-color: transparent;
    border-radius: var(--circle-radius);
    backdrop-filter: var(--blur);
  }

  ::-webkit-progress-value {
    background: linear-gradient(
      90deg,
      rgba(var(--accent-rgb), var(--high-opaque)) 0%,
      rgba(var(--accent-rgb), var(--less-opaque)) 100%
    );
    transition: inline-size var(--duration) var(--easing-fn);
    border-radius: 50vmax;
  }
</style>

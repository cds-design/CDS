<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { bubbleEvents } from "@utils/events";

  const dispatch = createEventDispatcher();

  export let disabled: "true" | "false" = "false";
</script>

<button
  {...$$restProps}
  use:bubbleEvents={dispatch}
  disabled={disabled != "false"}
  class="texture"
  class:disabled={disabled != "false"}
>
  <slot />
</button>

<style>
  @import "globals.css";

  :host {
    display: inline-block;
    overflow: visible;
  }

  .texture {
    overflow: visible;
  }

  .texture::before {
    border-radius: var(--border-radius);
  }

  button {
    padding: 0;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    padding: var(--landscape-padding);
    backdrop-filter: var(--blur);
    border: var(--border);
    transition-property: transform, border-color;
    transition: calc(var(--duration) / 2) var(--easing-fn);
  }

  button:not(:disabled):active {
    transform: scale(0.95);
  }

  :where(button:not(:disabled)):hover {
    transform: scale(1.05);
    border-color: rgba(var(--accent-rgb), var(--medium-opaque));
  }
</style>

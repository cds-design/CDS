<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { bubbleEvents } from "@utils/events";

  const dispatch = createEventDispatcher();

  export let label: string;
  export let placeholder: string;

  export let disabled: "true" | "false" = "false";
</script>

<div class:disabled={disabled != "false"}>
  <label for="input" class="texture">
    {label ?? placeholder}
  </label>
  <input
    {...$$restProps}
    disabled={disabled != "false"}
    placeholder={placeholder ?? label}
    id="input"
    use:bubbleEvents={dispatch}
  />
</div>

<style>
  @import "globals.css";

  :host {
    overflow: visible;
    margin-block-start: 0.75em;
  }

  :host::before {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: var(--blur);
    border-radius: var(--border-radius);
  }

  input {
    padding: var(--landscape-padding);
    font-family: inherit;
    position: relative;
    background-color: transparent;
    color: inherit;
    min-width: var(--min-chars);
    border-radius: var(--border-radius);
    border: var(--border);
    transition: border var(--duration) var(--easing-fn);
  }

  input:focus {
    border-color: rgba(var(--accent-rgb), var(--medium-opaque));
  }

  ::placeholder {
    opacity: 0;
  }

  label {
    text-transform: capitalize;
    color: rgb(159, 159, 159);
    position: absolute;
    top: 0;
    display: flex;
    height: 100%;
    align-items: center;
    margin-inline-start: 1em;
    z-index: 1;
    pointer-events: none;
    white-space: nowrap;
    transition: all var(--duration) var(--easing-fn);
    --landscape-padding: calc(var(--padding) / 2) calc(var(--padding));
  }

  div:focus-within label,
  div:has(input:not(:placeholder-shown)) label {
    transform: translateY(-50%);
    padding: var(--landscape-padding);
    font-size: 0.75em;
    height: unset;
    color: hsl(0, 0%, 85%);
    backdrop-filter: var(--blur);
    border-radius: var(--border-radius);
    --opacity: var(--opaque);
  }

  label::before {
    opacity: var(--opacity, var(--transparent));
  }
</style>

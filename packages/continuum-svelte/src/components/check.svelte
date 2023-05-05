<script lang="ts">
  export let checked = false;

  import { createEventDispatcher } from "svelte";
  import { bubbleEvents } from "@utils/events";

  const dispatch = createEventDispatcher();

  export let disabled: "true" | "false" = "false";
</script>

<label for="check" class:disabled={disabled != "false"}>
  <input
    type="checkbox"
    name="check"
    disabled={disabled != "false"}
    id="check"
    {checked}
    {...$$restProps}
    use:bubbleEvents={dispatch}
  />
  <div class="texture">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 290">
      <path
        d="M32.74,36.65c9.16-10.22,22.46-16.65,37.26-16.65H220c27.61,0,50,22.39,50,50V220c0,27.61-22.39,50-50,50H70c-27.61,0-50-22.39-50-50V70c0-12.44,4.54-23.81,12.06-32.56"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 290" id="check">
      <polyline points="290.27 20 117.44 192.83 20 95.4" />
    </svg>
  </div>
  <span>
    <slot />
  </span>
</label>

<style>
  @import "globals.css";

  label {
    display: flex;
    align-items: center;
    gap: var(--gap);
    position: relative;
  }

  div {
    position: relative;
    cursor: pointer;
    backdrop-filter: var(--blur);
    aspect-ratio: 1;
    height: 1em;
    border-radius: calc(var(--border-radius) / 2);
  }

  .texture {
    overflow: visible;
  }

  .texture::before {
    border-radius: inherit;
  }

  input {
    position: sticky;
    inset: 0;
    cursor: pointer;
  }

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  #check {
    overflow: visible;
  }

  path,
  polyline {
    fill: none;
    stroke: var(--accent);
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  path {
    stroke-dasharray: 913.25;
    stroke: var(--border-color);
    /* stroke-dashoffset: 913.25; */
    stroke-width: 40px;
  }

  input:checked ~ div svg path {
    animation: round calc(2 * var(--duration)) var(--easing-fn) forwards;
  }

  div::before {
    opacity: 0;
    transition: opacity var(--duration) var(--easing-fn);
  }

  input:checked ~ div::before {
    opacity: 1;
  }

  polyline {
    stroke-dasharray: 383;
    stroke-dashoffset: 383;
    stroke-width: 40px;
    filter: drop-shadow(2px 4px 6px black);
  }

  input:checked ~ div svg polyline {
    animation: check var(--duration) var(--easing-fn) forwards var(--duration);
  }

  @keyframes check {
    0% {
      stroke-dashoffset: 383;
    }
    100% {
      stroke-dashoffset: 816; /* 383*2 + 50 */
    }
  }

  @keyframes round {
    0% {
      stroke-dashoffset: 913.25;
    }
    50% {
      stroke: var(--accent);
    }
    100% {
      stroke: transparent;
      stroke-dashoffset: 0;
    }
  }
</style>

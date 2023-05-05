<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { fade } from "svelte/transition";
  import { bubbleEvents } from "@utils/events";

  import infoIcon from "@/assets/icons/info.svg?raw";
  import warningIcon from "@/assets/icons/warning.svg?raw";
  import errorIcon from "@/assets/icons/error.svg?raw";

  import crossIcon from "@/assets/icons/cross.svg?raw";

  const dispatch = createEventDispatcher();

  const icons = {
    info: infoIcon,
    warning: warningIcon,
    error: errorIcon,
  };

  export let type: "info" | "warning" | "error" = "info";

  export let closable = false;

  let closed = false;
</script>

{#if !closed}
  <div
    class:texture={true}
    class={type}
    class:closable
    role="alert"
    out:fade
    {...$$restProps}
    use:bubbleEvents={dispatch}
  >
    <span class="indicator">
      {@html icons[type]}
    </span>
    <span class="message">
      <slot />
    </span>
    {#if closable}
      <span
        class="close-icon"
        on:mousedown={() => {
          setTimeout(() => {
            closed = true;
          }, 0.4e3);
        }}
      >
        {@html crossIcon}
      </span>
    {/if}
  </div>
{/if}

<style>
  @import "globals.css";

  div {
    display: grid;
    grid-template-columns: 1.25em 1fr;
    align-items: stretch;
    gap: var(--gap);
    border: var(--border);
    --rgb: var(--accent-rgb);
    border-color: rgba(var(--rgb), var(--high-opaque));
    padding: var(--landscape-padding);
    border-radius: var(--border-radius);
    backdrop-filter: var(--blur);
  }

  .texture::before {
    transform: rotate(0deg);
    background: no-repeat 0 0/100% 100%
      radial-gradient(
        circle at 0 0,
        transparent 25%,
        rgba(var(--accent-rgb), var(--medium-opaque)) 50%,
        rgba(var(--accent-rgb), var(--high-opaque)) 100%
      );
  }

  .closable {
    grid-template-columns: 1.25em 1fr 1.25em;
  }

  .info {
    --rgb: var(--accent-rgb);
  }

  .warning {
    --rgb: 238, 210, 2;
    --accent-rgb: var(--rgb);
  }

  .error {
    --rgb: 245, 60, 60;
    --accent-rgb: var(--rgb);
  }

  .indicator {
    width: 1em;
    color: rgb(var(--rgb));
    align-items: center;
  }

  .indicator,
  .close-icon {
    aspect-ratio: 1;
    filter: drop-shadow(0 0 0.1em hsla(0, 0%, 0%, 0.5));
  }

  .close-icon {
    max-height: 1em;
    cursor: pointer;
    align-items: start;
    transition: width var(--duration) var(--easing-fn);
  }

  .close-icon > * {
    transform: scale(0.5);
  }

  span {
    display: grid;
  }

  .message {
    user-select: text;
    max-width: var(--max-chars);
    min-width: var(--min-chars);
  }
</style>

<script lang="ts">
  import crossIcon from "@assets/icons/cross.svg?raw";

  export let closable = true;
  let closed = false;

  export let disabled: "true" | "false" = "false";
</script>

{#if !closed}
  <div
    class="texture"
    class:disabled={disabled != "false"}
    aria-disabled={disabled}
    aria-atomic="true"
    role="status"
  >
    <span>
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

  :host {
    font-size: calc(var(--font-size) * (3 / 4));
  }

  div {
    font-size: calc(var(--font-size) * 0.75);
    padding-block: calc(var(--padding) / 2);
    padding-inline: calc(var(--padding));
    border: var(--border);
    backdrop-filter: var(--blur);
    display: flex;
    place-items: center;
    gap: calc(var(--gap) * 0.75);
    border-radius: var(--border-radius);
  }

  span {
    white-space: nowrap;
  }

  .close-icon {
    display: grid;
    place-items: center;
    width: 0.5em;
    cursor: pointer;
  }
</style>

<script context="module">
  import load from "continuum";
  import { onMount } from "svelte";

  onMount(() => {
    load("button",
      "check",
      "alert",
      "avatar",
      "badge",
      "input",
      "progress",
      "slider",
      "toggle"
    );
  });
</script>

<div class="wrapper">
  <h1>Continuum Design System</h1>
  <div>
    <h2>Alert</h2>
    <h3>Info (default)</h3>
    <ct-alert>Alert me</ct-alert>
    <h3>Warning</h3>
    <ct-alert type="warning">Alert me</ct-alert>
    <h3>Error</h3>
    <ct-alert type="error">Alert me</ct-alert>
  </div>
  <div>
    <h2>Avatar</h2>
    <h3>Default</h3>
    <ct-avatar src="https://avatars.githubusercontent.com/u/168240?v=4" />
    <h3>with Indicator</h3>
    <ct-avatar
      active={true}
      src="https://avatars.githubusercontent.com/u/168240?v=4"
    />
  </div>
  <div>
    <h2>Badge</h2>
    <ct-badge>Badge</ct-badge>
  </div>
  <div>
    <h2>Button</h2>
    <ct-button>Click me</ct-button>
  </div>
  <div>
    <h2>Checkbox</h2>
    <ct-check>Check me</ct-check>
  </div>
  <div>
    <h2>Input</h2>
    <ct-input placeholder="username" />
  </div>
  <div>
    <h2>Progress</h2>
    <ct-progress value="50" />
  </div>
  <div>
    <h2>Slider</h2>
    <ct-slider value="50" />
  </div>
  <div>
    <h2>Toggle</h2>
    <ct-toggle>Toggle me</ct-toggle>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
  h1,
  h2,
  h3 {
    margin: 0;
  }
</style>

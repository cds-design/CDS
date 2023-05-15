<script setup lang="ts">
import load from "cds-design";
import { onMounted } from "vue";

onMounted(() => {
  load(
    "button",
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

<template>
  <div class="wrapper">
    <h1>Continuum Design System</h1>
    <div>
      <h2>Alert</h2>
      <h3>Info (default)</h3>
      <cds-alert>Alert me</cds-alert>
      <h3>Info (closable)</h3>
      <cds-alert closable>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam
        nobis placeat error incidunt est dignissimos? Est dicta at cum iure,
        suscipit quae deserunt ad labore, perspiciatis alias, minus dolorem!
      </cds-alert>
      <h3>Warning</h3>
      <cds-alert type="warning">Alert me</cds-alert>
      <h3>Error</h3>
      <cds-alert type="error">Alert me</cds-alert>
    </div>
    <div>
      <h2>Avatar</h2>
      <h3>Default</h3>
      <cds-avatar src="https://avatars.githubusercontent.com/u/168240?v=4" />
      <h3>with Indicator</h3>
      <cds-avatar
        active="{true}"
        src="https://avatars.githubusercontent.com/u/168240?v=4"
      />
    </div>
    <div>
      <h2>Badge</h2>
      <cds-badge disabled="true">Badge</cds-badge>
    </div>
    <div>
      <h2>Button</h2>
      <cds-button disabled="true">Click me</cds-button>
    </div>
    <div>
      <h2>Checkbox</h2>
      <cds-check>Check me</cds-check>
    </div>
    <div>
      <h2>Input</h2>
      <cds-input placeholder="username" />
    </div>
    <div>
      <h2>Progress</h2>
      <cds-progress value="50" />
    </div>
    <div>
      <h2>Slider</h2>
      <cds-slider disabled="true" value="50" />
    </div>
    <div>
      <h2>Toggle</h2>
      <cds-toggle disabled="true">Toggle me</cds-toggle>
    </div>
  </div>
</template>

<style scoped>
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

type ComponentName = string;

const TAG_NAME_PREFIX = "ct";

const loadedComponents = new Set<ComponentName>();

async function importComponent(name: ComponentName) {
  return (await import(`./components/${name}/index.ts`))
    .default as CustomElementConstructor;
}

/**
 * Load web components as custom elements.
 * Only loads components that have not been loaded before.
 */
function load(...components: ComponentName[]) {
  components.forEach(async (name) => {
    if (loadedComponents.has(name)) {
      console.warn(`Component ${name} already loaded`);
    }
    const Component = await importComponent(name);
    customElements.define(`${TAG_NAME_PREFIX}-${name}`, Component);
    customElements.whenDefined(`${TAG_NAME_PREFIX}-${name}`).then(() => {
      loadedComponents.add(name);
    });
  });
}

export { load as default, load };

const PREFIX = "ct";

type ComponentName = string;

const loadedComponents = new Set<ComponentName>();

const { warn } = console;

async function dynamicImport(component: ComponentName) {
  return (await import(`./components/${component}/index.ts`))
    .default as CustomElementConstructor;
}

function load(...components: ComponentName[]) {
  components.forEach(async (component) => {
    if (loadedComponents.has(component))
      return warn(`Component ${component} already loaded`);
    loadedComponents.add(component);
    customElements.define(
      `${PREFIX}-${component}`,
      await dynamicImport(component)
    );
  });
}

export { load as default, load };

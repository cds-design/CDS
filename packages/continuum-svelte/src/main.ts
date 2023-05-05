const loaded = new Set<componentName>();

const { error, warn } = console;

type componentName = string;

/**
 * Loads a list of components.
 *
 * @param components - The names of the components to load.
 */
export default function load(...components: componentName[]) {
  components.forEach((component) => {
    if (loaded.has(component)) {
      return warn(`Component ${component} already loaded.`);
    }
    loaded.add(component);
    import(`./components/${component}.svelte`)
      .then(({ default: Component }: { default: CustomElementConstructor }) => {
        window.customElements.define(`ct-${component}`, Component);
      })
      .catch((err) => {
        error(err);
        location.reload();
      });
  });
}

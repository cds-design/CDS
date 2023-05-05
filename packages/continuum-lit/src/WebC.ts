type CSSSelector = string;
type EventName =
  | keyof ShadowRootEventMap
  | keyof HTMLElementEventMap
  | keyof DocumentEventMap;

type Attribute = {
  name: string;
  value?: string;
};

type props = {
  observedAttributes?: Attribute[];
  attributes?: Attribute[];
};

type WCOptions = {
  css?: string;
  props?: props;
  shadow?: ShadowRootInit;
};

const defaultOptions: WCOptions = {
  css: "",
  shadow: { mode: "open" },
  props: {
    observedAttributes: [],
    attributes: [],
  },
};

function wc(from = HTMLElement, options: WCOptions = defaultOptions) {
  return class Raj extends from {
    /**
     * Shadow Root element of the component
     */
    private _root: ShadowRoot;

    /**
     * CSS to be applied to the element which is common to all instances/components
     * irrespective of the state of the element
     */
    private _commonCSS: string;

    /**
     * CSS to be applied to the element which is specific to the state of the element
     */
    private _styleSheet = new CSSStyleSheet();

    /**
     * Whether the element has been rendered or not
     * This is used to prevent the element from being rendered multiple times
     */
    private _rendered = false;

    private _events: {
      selector: CSSSelector;
      handler: EventListener;
      event: EventName;
    }[] = [];

    attrs: { [key: string]: any } = {};

    constructor() {
      super();
      this._root = this.attachShadow(options.shadow ?? { mode: "open" });
      this._commonCSS = options.css ?? "";

      this.onBeforeMount();
    }

    /**
     * Renders the DOM and applies the CSS
     */
    render() {
      this.renderHTML();
      this.renderCSS();
    }

    /**
     * Renders the DOM
     */
    renderHTML() {
      this.detachEvents();
      this._root.innerHTML = "";
      this._root.appendChild(sanitize(this.html()));
      this.attachEvents();
    }

    /**
     * Renders the CSS
     */
    renderCSS() {
      this._styleSheet.replaceSync(this._commonCSS + this.css());
      this._root.adoptedStyleSheets = [this._styleSheet];
    }

    /**
     *
     * @returns CSS to be applied to the element
     */
    css() {
      return "";
    }

    /**
     *
     * @returns HTML to be rendered inside the element
     */
    html() {
      return "";
    }

    /**
     * Called before the element is mounted to the DOM
     */
    onBeforeMount() {}

    /**
     * Called when the element is first connected to the DOM
     */
    onMount() {}

    connectedCallback() {
      // this is called when the element is first connected to the DOM
      if (!this._rendered) {
        this.render();
        this.onMount();
        this._rendered = true;
      }
    }

    /**
     * Called when the element is disconnected from the DOM
     */
    onUnMount() {}

    disconnectedCallback() {
      // this is called when the element is disconnected from the DOM
      this.onUnMount();
    }

    attachEvents() {
      this._events.forEach(({ selector, handler, event }) => {
        const $this = this;
        function $handler(event: Event) {
          handler.call($this, event);
        }
        this._root.querySelector(selector)?.addEventListener(event, $handler);
      });
      console.log("attached", this._events);
    }

    detachEvents() {
      this._events.forEach(({ selector, handler, event }) => {
        this._root.querySelector(selector)?.removeEventListener(event, handler);
        console.log("detached", event);
      });
    }

    /**
     * Nice way to add event listeners to the element
     * @param event event name
     * @returns an object with the `on` method which takes the selector as the argument
     */
    when(event: EventName) {
      return {
        /**
         * @param selector CSS selector to select the target element
         * @returns an object with the `do` method which takes the event handler as the argument
         */
        on: (selector: CSSSelector) => {
          return {
            /**
             * @param handler event handler
             */
            do: (handler: EventListener) => {
              this._events.push({ selector, handler, event });
            },
          };
        },
      };
    }

    static get observedAttributes() {
      const observedAttributes =
        options.props?.observedAttributes?.map((attribute) => attribute.name) ??
        [];
      return observedAttributes; // ["click", "type", 'label']
    }

    attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
      this.attrs[name] = newValue;
      this.render();
    }
  };
}

const parser = new DOMParser(); // used to sanitize the HTML string

/**
 * Sanitizes the HTML string and returns the ChildNode
 */
function sanitize(html: string) {
  return parser.parseFromString(html, "text/html").body.firstChild!;
}

export { wc as default, wc };

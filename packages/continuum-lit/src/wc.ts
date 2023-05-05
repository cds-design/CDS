type CSSSelector = string;
type EventName =
  | keyof ShadowRootEventMap
  | keyof HTMLElementEventMap
  | keyof DocumentEventMap;

export default class Raj extends HTMLElement {
  private events = new Map<
    CSSSelector,
    { event: EventName; handler: EventListenerOrEventListenerObject }
  >();

  private sheet = new CSSStyleSheet();

  private rendered = false;

  [key: string]: any;

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

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  /**
   * Called when the element is first connected to the DOM
   */
  onMount() {}

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.onMount();
      this.attributeObserver.observe(this, { attributes: true });
      this.rendered = true;
    }
  }

  /**
   * Called when the element is disconnected from the DOM
   */
  onUnMount() {}

  disconnectedCallback() {
    this.attributeObserver.disconnect();
    this.onUnMount();
  }

  renderHTML() {
    this.shadowRoot!.innerHTML = this.html();
  }

  renderCSS() {
    this.sheet.replaceSync(this.css());
    this.shadowRoot!.adoptedStyleSheets = [this.sheet];
  }

  render() {
    this.renderCSS();
    this.renderHTML();
  }

  attributeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes") {
        const attr = mutation.attributeName!;
        this[attr] = this.getAttribute(attr) || this[attr];
        this.render();
      }
    });
  });

  on(selector: CSSSelector, event: EventName, handler: EventListener) {
    this.events.set(selector, {
      event,
      handler,
    });
    this.shadowRoot!.addEventListener(event, handler.bind(this));
  }
}

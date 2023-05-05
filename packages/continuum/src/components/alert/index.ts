import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { html, svg } from "lit/static-html.js";
import { WC } from "../../WC";
import globalsCss from "../../styles/globals.css";
import stylesCss from "./style.css";

const Icons = {
  cross: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 18 2 2m0 16L18 2"/></svg>`,
  error: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.04 51.04"><path stroke="currentColor" fill="currentColor" d="M25.52 3.52c12.15 0 22 9.85 22 22s-9.85 22-22 22-22-9.85-22-22 9.85-22 22-22m0-3.52C11.45 0 0 11.45 0 25.52s11.45 25.52 25.52 25.52 25.52-11.45 25.52-25.52S39.59 0 25.52 0Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m33.52 33.52-16-16m0 16 16-16"/></svg>`,
  info: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4"/><path stroke="currentColor" fill="currentColor" stroke-miterlimit="10" stroke-width="2.5" d="M22.1 23v-1.3l6.6-.3v18.2c0 .8.4 1.2 1.3 1.2h1.8v1.3h-9.3v-1.3h1.7c1 0 1.6-.5 1.6-1.5V25c0-1.3-.8-2-2.3-2h-1.4Zm4.6-11.2c.5 0 1 .2 1.4.6.4.4.6 1 .6 1.5s-.2 1-.6 1.4c-.3.3-.8.5-1.4.5s-1-.2-1.4-.5c-.4-.4-.5-.9-.5-1.4a1.9 1.9 0 0 1 1.9-2Z"/></svg>`,
  warn: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.8 74.3"><g stroke="currentColor" stroke-miterlimit="10" stroke-width="4"><path stroke-linecap="round" d="M36.6 36.2v-1.3l6.5-.3v18.2c0 .8.4 1.2 1.3 1.2h1.9v1.3h-9.4V54h1.7c1 0 1.6-.5 1.6-1.5V38.1c0-1.3-.8-2-2.3-2h-1.3Z"/><path d="M41 25a2 2 0 0 1 2.1 2.1c0 .6-.2 1-.6 1.3-.3.4-.8.6-1.4.6s-1-.2-1.4-.6c-.4-.3-.5-.8-.5-1.3s.2-1 .5-1.5a2 2 0 0 1 1.4-.6Z"/></g><path fill="currentColor" stroke="currentColor" d="M41.4 6.7c1 0 2 .5 2.7 1.5l31.6 54.9a3 3 0 0 1-2.6 4.6H9.7A3 3 0 0 1 7.1 63L38.7 8.2a3 3 0 0 1 2.7-1.5m0-6.7A9.8 9.8 0 0 0 33 4.9L1.3 59.7a9.8 9.8 0 0 0 8.4 14.6h63.4a9.8 9.8 0 0 0 8.4-14.6L50 5A10 10 0 0 0 41.5.1Z"/></svg>`,
} as const;

/**
 * A component for displaying alerts
 */
export default class Alert extends WC {
  static styles = [globalsCss, stylesCss];

  /**
   * The type of alert
   * changes the color and icon of the alert
   */
  @property()
  type: Exclude<keyof typeof Icons, "cross"> = "info";

  /**
   * Makes the alert closable
   */
  @property({ type: Boolean })
  closable = false;

  @state()
  private _closed = false;

  /**
   * Closes the alert
   */
  close() {
    setTimeout(() => {
      this._closed = true;
    }, 0.4e3);
  }

  render() {
    const classes = {
      closable: this.closable,
      texture: true,
      [this.type]: true,
    };

    this.tagName;

    if (this._closed) return null;
    return html`
      <div class=${classMap(classes)}>
        <span class="indicator">${Icons[this.type]}</span>
        <span class="message">
          <slot></slot>
        </span>
        ${this.closable
        ? html`
              <span class="close-icon" @click=${this.close}>
                ${Icons.cross}
              </span>
            `
        : null}
      </div>
    `;
  }
}

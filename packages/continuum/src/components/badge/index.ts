
import { property, state } from "lit/decorators.js";
import { html, svg } from "lit/static-html.js";
import { WC } from "../../WC";
import globalsCss from "../../styles/globals.css";
import styleCss from "./style.css";

const Icon = {
  cross: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 18 2 2m0 16L18 2"/></svg>`,
};

export default class Badge extends WC {
  static styles = [globalsCss, styleCss];

  /**
   * Makes the badge closable
   */
  @property({ type: Boolean })
  closeable = false;

  /**
   * Disables the badge
   */
  @property({ type: Boolean })
  disabled = false;

  @state()
  private _closed = false;

  /**
   * Closes the badge
   */
  close() {
    setTimeout(() => {
      this._closed = true;
    }, 0.4e3);
  }

  render() {
    if (this._closed) return null;
    return html`
      <div
        class="texture"
        ?aria-disable=${this.disabled}
        aria-atomic
        role="status"
      >
        <span>
          <slot></slot>
        </span>
        ${this.closeable
        ? html`
              <span class="close-icon" @click=${this.close()}>
                ${Icon.cross}
              </span>
            `
        : null}
      </div>
    `;
  }
}

import { property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { WC } from "../../WC";
import globalsCss from "../../styles/globals.css";
import styleCss from "./style.css";

export default class Button extends WC {
  /**
   * Disables the button
   */
  @property({ type: Boolean })
  disabled = false;

  static styles = [globalsCss, styleCss];

  render() {
    return html`
      <button class="texture" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}

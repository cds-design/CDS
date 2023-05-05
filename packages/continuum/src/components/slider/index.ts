import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { html } from "lit/static-html.js";
import { WC } from "../../WC";
import globalsCss from "../../styles/globals.css";
import styleCss from "../slider/style.css";

export default class Slider extends WC {
  static styles = [globalsCss, styleCss];

  /**
   * The value of the slider
   * The value is a number between 0 and 100
   */
  @property({ type: Number, reflect: true })
  value = 0;

  /**
   * Disables the slider
   */
  @property({ type: Boolean })
  disabled = false;

  private _handleInput(event: Event) {
    this.value = parseInt((event.target as HTMLInputElement).value);
  }

  render() {
    return html`
      <input
        @input=${this._handleInput}
        type="range"
        value=${this.value}
        class=${classMap({
      disabled: this.disabled,
    })}
        style=${styleMap({
      "--value": `${this.value}%`,
    })}
      />
    `;
  }
}

import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { html, svg } from "lit/static-html.js";
import { WC } from "../../WC";
import globalsCss from "../../styles/globals.css";
import styleCss from "./style.css";

const svgAnimation = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 290">
                            <path
                                d="M32.74,36.65c9.16-10.22,22.46-16.65,37.26-16.65H220c27.61,0,50,22.39,50,50V220c0,27.61-22.39,50-50,50H70c-27.61,0-50-22.39-50-50V70c0-12.44,4.54-23.81,12.06-32.56"
                            />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 290" id="check">
                            <polyline points="290.27 20 117.44 192.83 20 95.4" />
                        </svg>`;

export default class Check extends WC {
  static styles = [globalsCss, styleCss];

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean })
  disabled = false;

  check() {
    this.checked = true;
  }

  uncheck() {
    this.checked = false;
  }

  toggle() {
    this.checked = !this.checked;
  }

  render() {
    return html`
      <label
        for="check"
        class=${classMap({
      disabled: this.disabled,
    })}
      >
        <input
          type="checkbox"
          name="check"
          ?disabled=${this.disabled}
          id="check"
          ?checked=${this.checked}
        />
        <div class="texture">${svgAnimation}</div>
        <span>
          <slot></slot>
        </span>
      </label>
    `;
  }
}

import { css } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { html, svg } from "lit/static-html.js";
import { WC } from "../../WC";
import globalsCss from "../../styles/globals.css";
import styleCss from "./style.css";

const svgClip = svg`<svg
              viewBox="0 0 1 1"
              aria-hidden
            >
              <clipPath id="circle" clipPathUnits="objectBoundingBox">
                <path
                  d="M1,0.5 c0,0.103,-0.03,0.197,-0.087,0.277 c-0.017,-0.027,-0.047,-0.043,-0.08,-0.043 c-0.057,0,-0.1,0.043,-0.1,0.1 c0,0.033,0.017,0.063,0.043,0.08 c-0.08,0.057,-0.173,0.087,-0.277,0.087 c-0.277,0,-0.5,-0.223,-0.5,-0.5 S0.223,0,0.5,0 s0.5,0.223,0.5,0.5"
                />
              </clipPath>
            </svg>`;

export default class Avatar extends WC {
  static styles = [
    globalsCss,
    styleCss,
    css`
      svg {
        position: absolute;
        pointer-events: none;
        top: -1px;
        left: -1px;
        width: 1px;
        height: 1px;
      }
    `,
  ];

  /**
   * Enables indicator in the icon
   */
  @property({ type: Boolean })
  active = false;

  /**
   * Background of the indicator
   * supports any valid css background value
   */
  @property({
    attribute: "indicator-bg",
  })
  indicatorBg = "limegreen";

  /**
   * URL of the Avatar image
   *
   * @required
   */
  @property()
  src!: string;

  render() {
    if (this.src === undefined) {
      throw new Error("Avatar requires a src attribute");
    }

    return html`
      <img
        class=${classMap({
      active: this.active,
    })}
        src=${this.src}
        alt="profile"
      />
      ${this.active
        ? html`<div class="indicator" style="--bg:${this.indicatorBg}">
            <slot name="indicator"></slot>
            ${svgClip}
          </div>`
        : null}
    `;
  }
}

import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ct-avatar',
  styleUrl: 'avatar.css',
  shadow: true,
})
export class Avatar {
  /**
   * Enables indicator in the icon
   */
  @Prop() active: boolean = false;

  /**
   * Background of the indicator
   * supports any valid css background value
   */
  @Prop() indicatorBg: string = 'limegreen';

  /**
   * URL of the Avatar image
   *
   * @required
   */
  @Prop() src!: string;

  render() {
    return (
      <Host>
        <img
          class={{
            active: this.active,
          }}
          src={this.src}
          alt="profile"
        />
        {this.active && (
          <div
            class={{
              indicator: this.active,
            }}
            style={{
              '--bg': this.indicatorBg,
            }}
          >
            <slot name="indicator"></slot>
            <svg
              viewBox="0 0 1 1"
              aria-hidden="true"
              style={{
                position: 'absolute',
                pointerEvents: 'none',
                top: '-1px',
                left: '-1px',
                width: '1px',
                height: '1px',
              }}
            >
              <clipPath id="circle" clipPathUnits="objectBoundingBox">
                <path d="M1,0.5 c0,0.103,-0.03,0.197,-0.087,0.277 c-0.017,-0.027,-0.047,-0.043,-0.08,-0.043 c-0.057,0,-0.1,0.043,-0.1,0.1 c0,0.033,0.017,0.063,0.043,0.08 c-0.08,0.057,-0.173,0.087,-0.277,0.087 c-0.277,0,-0.5,-0.223,-0.5,-0.5 S0.223,0,0.5,0 s0.5,0.223,0.5,0.5" />
              </clipPath>
            </svg>
          </div>
        )}
      </Host>
    );
  }
}

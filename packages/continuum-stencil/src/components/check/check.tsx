import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ct-check',
  styleUrl: 'check.css',
  shadow: true,
})
export class Check {
  /**
   * Checked state of the checkbox
   */
  @Prop() checked: boolean = false;

  /**
   * Disables the checkbox
   */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host>
        <label
          htmlFor="check"
          class={{
            disabled: this.disabled,
          }}
        >
          <input type="checkbox" name="check" disabled={this.disabled} id="check" checked={this.checked} />
          <div class="texture">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 290">
              <path d="M32.74,36.65c9.16-10.22,22.46-16.65,37.26-16.65H220c27.61,0,50,22.39,50,50V220c0,27.61-22.39,50-50,50H70c-27.61,0-50-22.39-50-50V70c0-12.44,4.54-23.81,12.06-32.56" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 290" id="check">
              <polyline points="290.27 20 117.44 192.83 20 95.4" />
            </svg>
          </div>
          <span>
            <slot />
          </span>
        </label>
      </Host>
    );
  }
}

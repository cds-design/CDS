import { Component, Prop, h, Host, Method } from '@stencil/core';

@Component({
  tag: 'ct-toggle',
  styleUrl: 'toggle.css',
  shadow: true,
})
export class Toggle {
  /**
   * The value of the toggle
   */
  @Prop({ reflect: true, mutable: true }) toggled: boolean = false;

  /**
   * Disables the toggle
   */
  @Prop() disabled: boolean = false;

  /**
   * Toggles the toggle state
   */
  @Method()
  async toggle() {
    this.toggled = !this.toggled;
  }

  render() {
    return (
      <Host>
        <label
          htmlFor="toggle"
          class={{
            disabled: this.disabled,
          }}
        >
          <input type="checkbox" name="toggle" class="texture" id="toggle" disabled={this.disabled} checked={this.toggled}></input>
          <span>
            <slot />
          </span>
        </label>
      </Host>
    );
  }
}

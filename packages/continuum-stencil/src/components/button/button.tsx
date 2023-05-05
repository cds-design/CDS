import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ct-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  /**
   * Disables the button
   */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host>
        <button class="texture" disabled={this.disabled}>
          <slot />
        </button>
      </Host>
    );
  }
}

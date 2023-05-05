import { Component, Host, h, Prop, State } from '@stencil/core';

const Icon = {
  cross: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 18L2 2m0 16L18 2"></path>
    </svg>
  ),
};

@Component({
  tag: 'ct-badge',
  styleUrl: 'badge.css',
  shadow: true,
})
export class Badge {
  /**
   * Makes the badge closable
   */
  @Prop() closable: boolean = false;

  /**
   * Disables the badge
   */
  @Prop() disabled: boolean = false;

  @State() closed: boolean = false;

  render() {
    if (this.closed) return null;
    return (
      <Host>
        <div class="texture" aria-disabled={this.disabled} aria-atomic={true} role="status">
          <span>
            <slot></slot>
          </span>
          {this.closable && (
            <span
              class="close-icon"
              onClick={() => {
                setTimeout(() => {
                  this.closed = true;
                }, 0.4e3);
              }}
            >
              {Icon.cross}
            </span>
          )}
        </div>
      </Host>
    );
  }
}

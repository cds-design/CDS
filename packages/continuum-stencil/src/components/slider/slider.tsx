import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'ct-slider',
  styleUrl: 'slider.css',
  shadow: true,
})
export class Slider {
  /**
   * The value of the slider
   * The value is a number between 0 and 100
   */
  @Prop({ reflect: true, mutable: true }) value: number = 0;

  /**
   * Disables the slider
   */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host>
        <input
          onInput={event => {
            this.value = parseInt((event.target as HTMLInputElement).value);
          }}
          type="range"
          value={this.value}
          disabled={this.disabled}
          style={{
            '--value': `${this.value}%`,
          }}
        />
      </Host>
    );
  }
}

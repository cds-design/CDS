import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'ct-progress',
  styleUrl: 'progress.css',
  shadow: true,
})
export class Progress {
  /**
   * The value of the progress bar
   */
  @Prop() value!: number;

  /**
   * The maximum value of the progress bar
   */
  @Prop() max: number = 100;

  render() {
    return (
      <Host>
        <progress value={this.value} max={this.max} />
      </Host>
    );
  }
}

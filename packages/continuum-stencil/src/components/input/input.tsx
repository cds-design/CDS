import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ct-input',
  styleUrl: 'input.css',
  shadow: true,
})
export class Input {
  /**
   * The label of the input field
   * If no label is provided, the placeholder will be used as label
   */
  @Prop() label!: string;

  /**
   * The type of the input field
   */
  @Prop() type: string = 'text';

  /**
   * The placeholder of the input field
   */
  @Prop() placeholder: string = this.label;

  /**
   * The value of the input field
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * Disables the input field
   */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host>
        <div
          class={{
            disabled: this.disabled,
          }}
        >
          <label htmlFor="input" class="texture">
            {this.label ?? this.placeholder}
          </label>
          <input
            onInput={event => {
              if (this.type !== 'password') {
                this.value = (event.target as HTMLInputElement).value;
              }
            }}
            type={this.type}
            disabled={this.disabled}
            id="input"
            placeholder={this.placeholder}
          />
        </div>
      </Host>
    );
  }
}

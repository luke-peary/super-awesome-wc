import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'sa-button',
  styleUrl: 'button.scss',
})
export class Button {
  @Prop() variant: 'primary' | 'secondary';
  @Prop() type: string;
  @Prop() disabled: boolean;

  render() {
    return (
      <button type={this.type} disabled={this.disabled} class={this.variant}>
        <slot />
      </button>
    );
  }
}

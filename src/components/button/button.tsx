import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'sa-button',
  styleUrl: 'button.scss',
})
export class Button {
  @Prop() variant: 'primary' | 'secondary';
  @Prop() type: string;
  @Prop() disabled: boolean;

  connectedCallback() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render() {
    return (
      <button type={this.type} disabled={this.disabled} class={this.variant} onClick={this.handleClick}>
        <slot />
      </button>
    );
  }
}

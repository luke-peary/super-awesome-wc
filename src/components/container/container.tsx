import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'sa-container',
  styleUrl: 'container.scss',
  shadow: true,
})
export class Container {
  @Prop() variant: 'fixed' | 'fluid';

  render() {
    return (
      <div class={`container ${this.variant}`}>
        <slot />
      </div>
    );
  }
}

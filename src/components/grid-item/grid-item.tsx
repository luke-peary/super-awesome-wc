import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'sa-grid-item',
  styleUrl: 'grid-item.scss',
  shadow: true,
})
export class Grid {
  @Prop() width: boolean;
  @Prop() push: number;
  @Prop() pull: number;

  render() {
    return (
      <div class={`${this.width} ${this.push} ${this.pull}`}>
        <slot />
      </div>
    );
  }
}

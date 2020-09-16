import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'sa-grid',
  styleUrl: 'grid.scss',
  shadow: true,
})
export class Grid {
  @Prop() gutter: boolean;
  @Prop() verticalGutter: boolean;

  render() {
    return (
      <div class={`${this.verticalGutter} ${this.gutter}`}>
        <slot />
      </div>
    );
  }
}

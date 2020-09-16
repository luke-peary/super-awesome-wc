import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'sa-copy',
  styleUrl: 'copy.scss',
  shadow: true,
})
export class Copy {
  @Prop() as: 'span' | 'p';
  @Prop() variant: 'small' | 'medium' | 'large';

  render() {
    const Tag = this.as;

    return (
      <Tag class={this.variant}>
        <slot />
      </Tag>
    );
  }
}

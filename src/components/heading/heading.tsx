import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'sa-heading',
  styleUrl: 'heading.scss',
  shadow: true,
})
export class Heading {
  @Prop() as: 'h1' | 'h2';
  @Prop() variant: 'small' | 'medium' | 'large' | 'title';

  render() {
    const Tag = this.as;

    return (
      <Tag class={this.variant}>
        <slot />
      </Tag>
    );
  }
}

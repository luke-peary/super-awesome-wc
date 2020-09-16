import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'sa-image',
  styleUrl: 'image.scss',
  shadow: true,
})
export class Image {
  @Prop() src: string;

  render() {
    return <img src={this.src} />;
  }
}

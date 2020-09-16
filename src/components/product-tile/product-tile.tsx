import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'sa-product-tile',
  styleUrl: 'product-tile.scss',
  shadow: true,
})
export class ProductTile {
  @Prop() name: string;
  @Prop() img: string;

  render() {
    return (
      <div class="wrapper">
        <sa-grid>
          <div class="image">
            <sa-image src={this.img}></sa-image>
          </div>
          <div class="details">
            <sa-heading as="h2" variant="medium">
              {this.name}
            </sa-heading>
            <span>2kg</span>
            <span>$5.26</span>
            <div>
              <sa-button variant="primary">Add to cart</sa-button>
              <sa-button variant="secondary">Remove</sa-button>
            </div>
          </div>
        </sa-grid>
      </div>
    );
  }
}

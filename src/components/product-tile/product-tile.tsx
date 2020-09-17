import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'sa-product-tile',
  styleUrl: 'product-tile.scss',
  shadow: true,
})
export class ProductTile {
  @Prop() name: string;
  @Prop() price: number;
  @Prop() quantity: number;
  @Prop() units: string;
  @Prop() img: string;

  render() {
    const total = this.quantity * this.price;

    return (
      <div class="wrapper">
        <div class="image">
          <sa-image src={this.img}></sa-image>
        </div>
        <div class="details">
          <div class="title">
            <sa-heading as="h2" variant="small">
              {this.name}
            </sa-heading>

            <sa-heading as="h2" variant="medium">
              ${total.toFixed(2)}
            </sa-heading>
          </div>
          <div class="quantity">
            <sa-copy as="span" variant="small">
              {this.quantity} x ${this.price} each
            </sa-copy>
          </div>
          <div class="actions">
            <sa-button variant="primary">Add to cart</sa-button>
            <sa-button variant="secondary">Remove</sa-button>
          </div>
        </div>
      </div>
    );
  }
}

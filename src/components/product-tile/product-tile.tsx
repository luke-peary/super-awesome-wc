import { h, Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sa-product-tile',
  styleUrl: 'product-tile.scss',
  shadow: true,
})
export class ProductTile {
  @Prop() name: string;
  @Prop() price: number;
  @Prop() quantity: number;
  @Prop() img: string;

  @Event() removed: EventEmitter;
  @Event() addedToCart: EventEmitter;

  removeHandler() {
    this.removed.emit();
  }

  addToCartHandler() {
    this.addedToCart.emit();
  }

  render() {
    const total = this.quantity * this.price;

    return (
      <div class="wrapper">
        <div class="info">
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
          </div>
        </div>
        <div class="actions">
          <sa-button onClick={() => this.addToCartHandler()} variant="primary">
            Add to cart
          </sa-button>
          <sa-button onClick={() => this.removeHandler()} variant="secondary">
            Remove
          </sa-button>
        </div>
      </div>
    );
  }
}

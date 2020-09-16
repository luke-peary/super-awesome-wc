import { h, Component, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'twg-off-canvas',
  shadow: true,
})
export class OffCanvas {
  @State() contentIsActive: boolean = false;
  @Prop({ reflect: true }) heading: string;
  @Prop({ reflect: true }) isOpen: boolean;

  @Method()
  async open() {
    this.isOpen = true;
  }

  @Method()
  async close() {
    this.isOpen = false;
  }

  onTabChange(tab: string): void {
    this.contentIsActive = tab === 'content';
  }

  render() {
    let mainContent = <slot />;

    if (this.contentIsActive) {
      mainContent = (
        <div>
          <h2>Contact information:</h2>
          <ul>
            <li>Ph: 0415713939</li>
            <li>Email: luke@foo.com</li>
          </ul>
        </div>
      );
    }

    return [
      <div onClick={this.close.bind(this)} class={`background ${this.isOpen ? 'open' : ''}`}></div>,
      <aside>
        <header>
          <h1>{this.heading}</h1>
          <button onClick={this.close.bind(this)} class="close-btn">
            X
          </button>
        </header>
        <main>
          <div class="tabs">
            <button onClick={() => this.onTabChange('nav')} class={!this.contentIsActive ? 'active' : ''}>
              Navigation
            </button>
            <button onClick={() => this.onTabChange('content')} class={this.contentIsActive ? 'active' : ''}>
              Content
            </button>
          </div>
          {mainContent}
        </main>
      </aside>,
    ];
  }
}

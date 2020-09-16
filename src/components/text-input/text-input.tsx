import { h, Component, EventEmitter, Event, Prop } from '@stencil/core';

@Component({
  tag: 'sa-text-input',
  styleUrl: 'text-input.scss',
  shadow: true,
})
export class TextInput {
  input: HTMLInputElement;

  @Prop({ mutable: true }) value: string;
  @Prop({ reflect: true }) type: 'text' | 'email';
  @Prop({ reflect: true }) disabled: boolean;

  @Event() saInput: EventEmitter;

  connectedCallback() {
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput() {
    this.value = this.input.value;

    this.saInput.emit();
  }

  render() {
    return <input type={this.type} ref={el => (this.input = el)} onInput={this.handleInput} value={this.value} />;
  }
}

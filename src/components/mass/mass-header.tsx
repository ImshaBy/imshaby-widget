import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'mass-header',
  styleUrl: 'mass.css',
  shadow: true
})

export class MassHeader {

  @Prop() address: string;
  @Prop() langCode: string;

  render() {
    return (<div>
      <span class="spanRow spanAddress">
        <span class="address">Адрас: ${this.address}</span>
      </span>
      <span class="langCode">Мова: ${this.langCode}</span>
    </div>)
  }
}
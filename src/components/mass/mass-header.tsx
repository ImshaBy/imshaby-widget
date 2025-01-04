import { Component, Prop, h, Fragment } from '@stencil/core';

@Component({
  tag: 'mass-header',
  styleUrl: 'mass.css',
  shadow: false
})

export class MassHeader {

  @Prop() address: string;
  @Prop() langCode: string;

  render() {
    return (<>

      <span class="spanRow spanAddress">
        <span class="address">Адрас: {this.address}</span>
      </span>
      <span class="langCode">Мова: {this.langCode}</span>
      
    </>)
  }
}
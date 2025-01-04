import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'mass-additional',
  styleUrl: 'mass.css',
  shadow: false
})

export class MassAdditional {

  @Prop() rorate: boolean = false;
  @Prop() online: boolean = false;
  @Prop() broadcastUrl: string = '#';

  render() {
    return (<div>

      {
        (this.rorate) ? (
          <span class="spanRow spanRorate">
            <span class="massRorate"></span> Раратняя Імша
          </span>
        ) : (null)
      }

      {
        (this.online) ? (
          <span class="spanRow spanOnline">
            <a href={this.broadcastUrl} class="broadcastUrl spanRow">
              <span class="massOnline"></span> Імша online
            </a>
          </span>
        ) : (null)
      }

    </div>)
  }
}
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'mass-footer',
  styleUrl: 'mass.css',
  shadow: true
})

export class MassFooter {

  @Prop() info: string;
  @Prop() lastConfirmRelevance: string;

  render() {
    return (<div>

      {
        (this.info != null) ? (
          <span class="spanRow spanComment">
            <span class="massComment">{this.info}</span>
          </span>
        ) : (null)
      }

      <span class="ms-auto text-muted">
        Последнее изменение: {this.lastConfirmRelevance}
      </span>
      
    </div>)
    }
}
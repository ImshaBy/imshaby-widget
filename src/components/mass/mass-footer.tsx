import { Component, Prop, h, Fragment } from '@stencil/core'

@Component({
  tag: 'mass-footer',
  styleUrl: 'mass.css',
  shadow: false
})

export class MassFooter {

  @Prop() info: string
  @Prop() lastConfirmRelevance: string

  render() {
    return (<>

      {
        (this.info != null) ? (
          <span class="spanRow spanComment">
            <span class="massComment">{this.info}</span>
          </span>
        ) : (null)
      }

      <span class="ms-auto text-muted">
        Последнее изменение: {this.lastConfirmRelevance.replace(/-/g, '.')}
      </span>
      
    </>)
    }
}
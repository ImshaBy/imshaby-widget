import { Component, Prop, h, Fragment } from '@stencil/core'

@Component({
  tag: 'mass-plate',
  styleUrl: 'mass.css',
  shadow: false
})

export class MassPlate {

  @Prop() time: string
  @Prop() actual: boolean = true
  @Prop() rorate: boolean = false
  @Prop() online: boolean = false

  render() {
    return (<>

      <span class={`circle bg-${this.actual ? 'actual' : 'notactual'}`}></span>

      <span class="massHour">{this.time}</span>

        <div class="ms-5 me-auto">
          {
            (this.rorate) ? (
              <span class="massRorate"></span>
            ) : (null)
          }

          { 
            (this.online) ? (
              <span class="massOnline"></span>
            ) : (null)
          }
        </div>

    </>)
    }
}
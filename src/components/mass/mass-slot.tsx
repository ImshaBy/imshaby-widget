import { Component, State, Prop, h, Fragment } from '@stencil/core';
import { D } from '../../utils/days';

@Component({
  tag: 'mass-slot',
  styleUrl: 'mass.css',
  shadow: false
})

export class MassSlot {

  @Prop() accordionIndex: number;
  @Prop() accordionExpanded: string;
  @Prop() massIndex: number;
  @Prop() expanded = true;

  @Prop() massInfo: {
    time: string,
    info: string,
    duration: string,
    langCode: string,
    needUpdate: boolean,
    lastConfirmRelevance: string,
    updatePeriodInDays: string,
    online: boolean,
    rorate: boolean,
    address: string,
    broadcastUrl: string,
  };

  private toggleMassPlateButton = (event: Event) => {
    let btn = (event.target) as HTMLElement
    
    btn.ariaExpanded = (!btn.classList.toggle('collapsed')).toString();
    btn.parentElement.parentElement.querySelector(btn.dataset.bsTarget).classList.toggle('show')
  }

  render() {
    let btnExpanded = (this.expanded) ? ("") : ("collapsed")
    let btnAria = (this.expanded) ? ("true") : ("false")
    let accordionExpanded = (this.expanded) ? ("show") : ("")

    let lCR = D.strToDate(this.massInfo.lastConfirmRelevance)
    let fCR = new Date(lCR)
    fCR.setDate(lCR.getDate() + parseInt(this.massInfo.updatePeriodInDays, 10))
    
    let actual = false
    if (fCR.getTime() >= Date.now()) {actual = true}

    return (
    <>
      <div class="accordion-item">

        <h2 class="accordion-header">
          <button
            class={`accordion-button ${btnExpanded}`}
            type="button" data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${this.accordionIndex}-${this.massIndex}`} 
            aria-expanded={btnAria}
            aria-controls={`flush-collapse${this.accordionIndex}-${this.massIndex}`}
            onClick={this.toggleMassPlateButton}
            >

            <mass-plate
              actual={actual}
              time={this.massInfo.time}
              rorate={this.massInfo.rorate}
              online={this.massInfo.online}
            ></mass-plate>

          </button>
        </h2>

        <div
          id={`flush-collapse${this.accordionIndex}-${this.massIndex}`}
          class={`accordion-collapse collapse ${accordionExpanded}`}
          data-bs-parent={`accordionFlush${this.accordionIndex}`}
        >
          <div class="accordion-body d-flex flex-column gap-2 border-gray">

            <mass-header
              address={this.massInfo.address}
              langCode={this.massInfo.langCode}
            ></mass-header>

            <mass-additional
              rorate={this.massInfo.rorate}
              online={this.massInfo.online}
              broadcastUrl={this.massInfo.broadcastUrl}
            ></mass-additional>
            
            <mass-footer
              info={this.massInfo.info}
              lastConfirmRelevance={this.massInfo.lastConfirmRelevance}
            ></mass-footer>

          </div>
        </div>

      </div>
    </>
    )
  }
}
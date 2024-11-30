import { Component, State, Prop, h } from '@stencil/core';
import { D } from '../../utils/days';

@Component({
  tag: 'mass',
  styleUrl: 'mass.css',
  shadow: true
})

export class Mass {

  @Prop() accordionIndex: string;
  @Prop() accordionExpanded: string;
  @Prop() massIndex: string;
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

  @State() actual: boolean = false;

  render() {
    let btnExpanded = (this.expanded) ? ("") : ("collapsed")
    let accordionExpanded = (this.expanded) ? ("show") : ("")

    let lCR = D.strToDate(this.massInfo.lastConfirmRelevance)
    let fCR = new Date(lCR)
    fCR.setDate(lCR.getDate() + parseInt(this.massInfo.updatePeriodInDays, 10))
    
    if (fCR.getTime() >= Date.now()) {this.actual = true}

    return <div>
      <div class="accordion-item">

        <h2 class="accordion-header">
          <button
            class={`accordion-button ${btnExpanded}`}
            type="button" data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${this.accordionIndex}-${this.massIndex}`} aria-expanded="false"
            aria-controls={`flush-collapse${this.accordionIndex}-${this.massIndex}`}>

            <mass-plate
              actual={this.actual}
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
    </div>
  }
}
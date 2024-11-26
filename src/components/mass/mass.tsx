import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'mass',
  styleUrl: 'mass.css',
  shadow: true
})

export class Mass {

  @Prop() accordionIndex: string;
  @Prop() massIndex: string;
  @Prop() expanded = true;

  
  @Prop() needUpdate: boolean = false;
  @Prop() time: string;
  @Prop() info: string;
  @Prop() langCode: string;
  @Prop() lastConfirmRelevance: string;
  @Prop() online: boolean = false;
  @Prop() rorate: boolean = false;
  @Prop() address: string;
  @Prop() broadcastUrl: string;

  render() {
    let btnExpanded = (this.expanded) ? ("") : ("collapsed")
    let accordionExpanded = (this.expanded) ? ("show") : ("")

    return <div>
      <div class="accordion-item">

        <h2 class="accordion-header">
          <button
            class={`accordion-button ${btnExpanded}`}
            type="button" data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${this.accordionIndex}-${this.massIndex}`} aria-expanded="false"
            aria-controls={`flush-collapse${this.accordionIndex}-${this.massIndex}`}>

            <mass-plate
              actual={this.needUpdate}
              time={this.time}
              rorate={this.rorate}
              online={this.online}
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
              address={this.address}
              langCode={this.langCode}
            ></mass-header>

            <mass-additional
              rorate={this.rorate}
              online={this.online}
              broadcastUrl={this.broadcastUrl}
            ></mass-additional>
            
            <mass-footer
              info={this.info}
              lastConfirmRelevance={this.lastConfirmRelevance}
            ></mass-footer>

          </div>
        </div>

      </div>
    </div>
  }
}
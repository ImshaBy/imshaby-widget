import { Prop, Component, h } from "@stencil/core";

@Component({
    tag: 'day-plate',
    styleUrl: 'days.css',
    shadow: false,
})

export class DayPlate {

    @Prop() active: string;
    @Prop() disabled: string;
    @Prop() k: number;
    @Prop() aria: string = 'false';
    @Prop() day: any;
    @Prop() date: any;

    private toggleDayNavButton = (event: Event) => {
        let btn = (event.target) as HTMLElement
        if (btn.tagName == 'SPAN') { btn = btn.parentElement }

        Array.from(btn.parentElement.parentElement.children).forEach(el => {
            el = el.querySelector('.daysNavLink')
            el.classList.remove('active')
            el.ariaSelected = 'false'
            el.setAttribute('tabindex', '-1')
        })

        btn.classList.add('active')
        btn.ariaSelected = 'true'
        btn.removeAttribute('tabindex')

        console.log(btn)
        let tabs = btn.parentElement.parentElement.parentElement.querySelector('#v-pills-tabContent')
        Array.from(tabs.children).forEach(el => {
            el.classList.remove('show', 'active')
        })
        tabs.querySelector(btn.dataset.bsTarget).classList.add('active', 'show')
    }

    render() {
        return (
        <button
            class={`nav-link daysNavLink ${this.active} ${this.disabled}`} 
            id={`v-pills-d${this.k}`} 
            data-bs-toggle="pill" 
            data-bs-target={`#v-pills-d${this.k}-tab`} 
            type="button" role="tab" 
            aria-controls={`v-pills-d${this.k}-tab`} 
            aria-selected={`${this.aria}`}
            onClick={this.toggleDayNavButton}
            >
            <span class="daysSpan">
                {this.day}
                <br />
                {this.date}
            </span>
        </button>
        )
    }

}
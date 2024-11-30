import { Prop, Component, h } from "@stencil/core";

@Component({
    tag: 'day-plate',
    styleUrl: 'days.css',
    shadow: true,
})

export class DayPlate {

    @Prop() active: string;
    @Prop() disabled: string;
    @Prop() k: number;
    @Prop() aria: string = 'false';
    @Prop() day: any;
    @Prop() date: any;


    render() {
        return (
        <button
            class={`nav-link daysNavLink ${this.active} ${this.disabled}`} 
            id={`v-pills-d${this.k}`} 
            data-bs-toggle="pill" 
            data-bs-target={`#v-pills-d${this.k}-tab`} 
            type="button" role="tab" 
            aria-controls={`v-pills-d${this.k}-tab`} 
            aria-selected={`${this.aria}`}>
            <span class="daysSpan">
                {this.day}
                <br />
                {this.date}
            </span>
        </button>
        )
    }

}
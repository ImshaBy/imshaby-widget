import { r as registerInstance, h } from './index-39d9f9e8.js';

const daysCss = ".daysNavLink{border-width:1px;border-style:solid;border-color:#dadada;border-radius:0 !important}.daysNavLink:hover{color:white !important}.daysNavLink.disabled{opacity:.3;pointer-events:none}";

const DayPlate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleDayNavButton = (event) => {
            let btn = (event.target);
            if (btn.tagName == 'SPAN') {
                btn = btn.parentElement;
            }
            Array.from(btn.parentElement.parentElement.children).forEach(el => {
                el = el.querySelector('.daysNavLink');
                el.classList.remove('active');
                el.ariaSelected = 'false';
                el.setAttribute('tabindex', '-1');
            });
            btn.classList.add('active');
            btn.ariaSelected = 'true';
            btn.removeAttribute('tabindex');
            let tabs = btn.parentElement.parentElement.parentElement.querySelector('#v-pills-tabContent');
            Array.from(tabs.children).forEach(el => {
                el.classList.remove('show', 'active');
            });
            tabs.querySelector(btn.dataset.bsTarget).classList.add('active', 'show');
        };
        this.active = undefined;
        this.disabled = undefined;
        this.k = undefined;
        this.aria = 'false';
        this.day = undefined;
        this.date = undefined;
    }
    render() {
        return (h("button", { key: '664fa5e9a7f9a598035d0a61a91c092472fdf7cc', class: `nav-link daysNavLink ${this.active} ${this.disabled}`, id: `v-pills-d${this.k}`, "data-bs-toggle": "pill", "data-bs-target": `#v-pills-d${this.k}-tab`, type: "button", role: "tab", "aria-controls": `v-pills-d${this.k}-tab`, "aria-selected": `${this.aria}`, onClick: this.toggleDayNavButton }, h("span", { key: 'd95ed14e4851615ca921425ced977f3aef526b94', class: "daysSpan" }, this.day, h("br", { key: '283e13bcf0f958889ddbaa936fdcf82cfdb560a1' }), this.date)));
    }
};
DayPlate.style = daysCss;

export { DayPlate as day_plate };

//# sourceMappingURL=day-plate.entry.js.map
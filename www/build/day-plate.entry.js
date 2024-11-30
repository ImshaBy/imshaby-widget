import { r as registerInstance, h } from './index-8cb4970f.js';

const daysCss = ".daysNavLink{border-width:1px;border-style:solid;border-color:#dadada;border-radius:0 !important}.daysNavLink:hover{color:white !important}.daysNavLink.disabled{opacity:.3;pointer-events:none}";

const DayPlate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.active = undefined;
        this.disabled = undefined;
        this.k = undefined;
        this.aria = 'false';
        this.day = undefined;
        this.date = undefined;
    }
    render() {
        h("button", { class: `nav-link daysNavLink ${this.active} ${this.disabled}`, id: `v-pills-d${this.k}`, "data-bs-toggle": "pill", "data-bs-target": `#v-pills-d${this.k}-tab`, type: "button", role: "tab", "aria-controls": `v-pills-d${this.k}-tab`, "aria-selected": `${this.aria}` }, h("span", { class: "daysSpan" }, this.day, h("br", null), this.date));
    }
};
DayPlate.style = daysCss;

export { DayPlate as day_plate };

//# sourceMappingURL=day-plate.entry.js.map
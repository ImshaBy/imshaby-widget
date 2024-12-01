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
        return (h("button", { key: '535837b9f23eac86fec14cd7a07103c37d06a2dc', class: `nav-link daysNavLink ${this.active} ${this.disabled}`, id: `v-pills-d${this.k}`, "data-bs-toggle": "pill", "data-bs-target": `#v-pills-d${this.k}-tab`, type: "button", role: "tab", "aria-controls": `v-pills-d${this.k}-tab`, "aria-selected": `${this.aria}` }, h("span", { key: 'ce9b845fb9b7575d5bbcd3c6aafcdeeb8b2ef9cf', class: "daysSpan" }, this.day, h("br", { key: '1276030eb7e4b91ed62571f1b0d61c2d1b2782d4' }), this.date)));
    }
};
DayPlate.style = daysCss;

export { DayPlate as day_plate };

//# sourceMappingURL=day-plate.entry.js.map
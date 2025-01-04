import { r as registerInstance, h } from './index-a51fdbd4.js';

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
        return (h("button", { key: 'ad7e2358fddd6b0eb64390ae2caac18b3845e7ae', class: `nav-link daysNavLink ${this.active} ${this.disabled}`, id: `v-pills-d${this.k}`, "data-bs-toggle": "pill", "data-bs-target": `#v-pills-d${this.k}-tab`, type: "button", role: "tab", "aria-controls": `v-pills-d${this.k}-tab`, "aria-selected": `${this.aria}` }, h("span", { key: '8d7f2fa6fcb3284dc615840e420bd0d12ca90210', class: "daysSpan" }, this.day, h("br", { key: 'dc5efd3ae8d5120527312fa56742bbb6befe426b' }), this.date)));
    }
};
DayPlate.style = daysCss;

export { DayPlate as day_plate };

//# sourceMappingURL=day-plate.entry.js.map
import { p as proxyCustomElement, H, h } from './p-4e89bfd8.js';

const daysCss = ".daysNavLink{border-width:1px;border-style:solid;border-color:#dadada;border-radius:0 !important}.daysNavLink:hover{color:white !important}.daysNavLink.disabled{opacity:.3;pointer-events:none}";
const DayPlateStyle0 = daysCss;

const DayPlate = /*@__PURE__*/ proxyCustomElement(class DayPlate extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return DayPlateStyle0; }
}, [1, "day-plate", {
        "active": [1],
        "disabled": [1],
        "k": [2],
        "aria": [1],
        "day": [8],
        "date": [8]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["day-plate"];
    components.forEach(tagName => { switch (tagName) {
        case "day-plate":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DayPlate);
            }
            break;
    } });
}
defineCustomElement();

export { DayPlate as D, defineCustomElement as d };

//# sourceMappingURL=p-70a7399f.js.map
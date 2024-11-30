import { p as proxyCustomElement, H, h } from './p-4e89bfd8.js';
import { d as defineCustomElement$4 } from './p-3fdf0c01.js';
import { d as defineCustomElement$3 } from './p-bf206b67.js';
import { d as defineCustomElement$2 } from './p-dd2404f6.js';
import { d as defineCustomElement$1 } from './p-cb38f138.js';

class D {
    static getWeekDay(date) {
        let dateTS = Date.parse(date);
        return this.daysNames[new Date(dateTS).getDay()];
    }
    static getToday() {
        let today = new Date();
        return today;
    }
    static getWeekName(index) {
        if (index == 7) {
            index = 0;
        }
        return this.daysNames[index];
    }
    static strToDate(dtStr) {
        if (!dtStr)
            return null;
        let dateParts = dtStr.split("-");
        let timeParts = dateParts[2].split(" ")[1].split(":");
        dateParts[2] = dateParts[2].split(" ")[0];
        // month is 0-based, that's why we need dataParts[1] - 1
        return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0], timeParts[0], timeParts[1], timeParts[2]);
    }
}
D.standardDays = ['1', '2', '3', '4', '5', '6', '7'];
D.daysNames = ['Нд', 'Пн', 'Ат', 'Ср', 'Чц', 'Пт', 'Сб'];

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassSlotStyle0 = massCss;

const Mass = /*@__PURE__*/ proxyCustomElement(class Mass extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.accordionIndex = undefined;
        this.accordionExpanded = undefined;
        this.massIndex = undefined;
        this.expanded = true;
        this.massInfo = undefined;
        this.actual = false;
    }
    render() {
        let btnExpanded = (this.expanded) ? ("") : ("collapsed");
        let accordionExpanded = (this.expanded) ? ("show") : ("");
        let lCR = D.strToDate(this.massInfo.lastConfirmRelevance);
        let fCR = new Date(lCR);
        fCR.setDate(lCR.getDate() + parseInt(this.massInfo.updatePeriodInDays, 10));
        if (fCR.getTime() >= Date.now()) {
            this.actual = true;
        }
        return h("div", { key: 'e8d5ea282bbe359021d53022ce3f99ecb50277c8' }, h("div", { key: '41574878bd42f224046338678b3197fdd48da3d8', class: "accordion-item" }, h("h2", { key: 'd399753ea6ca2635f63a8969316e027876428d15', class: "accordion-header" }, h("button", { key: 'ca4204589405fddfe3547490d2744f195b083757', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": "false", "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}` }, h("mass-plate", { key: 'df7b5e6120777d6373dcf1eb913effff23d206e3', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '2463cca9f6a4be3f73206af7c68d4e2d8e2ed6a5', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: 'ffba225b1a0d1c6b0e514a3a60fd61e38e1e1db4', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: '0d429885d7d2da6052499fc53db7913d1009824c', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '2a1e933f61b040c4cf5f40bdee3b436e6e1239c2', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: '890823e536901c9600b84a9d73171cc3e8118d74', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance })))));
    }
    static get style() { return MassSlotStyle0; }
}, [1, "mass-slot", {
        "accordionIndex": [2, "accordion-index"],
        "accordionExpanded": [1, "accordion-expanded"],
        "massIndex": [2, "mass-index"],
        "expanded": [4],
        "massInfo": [16],
        "actual": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mass-slot", "mass-additional", "mass-footer", "mass-header", "mass-plate"];
    components.forEach(tagName => { switch (tagName) {
        case "mass-slot":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Mass);
            }
            break;
        case "mass-additional":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "mass-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "mass-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "mass-plate":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { D, Mass as M, defineCustomElement as d };

//# sourceMappingURL=p-46d3153f.js.map
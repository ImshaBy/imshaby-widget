import { p as proxyCustomElement, H, h } from './p-2da27d48.js';
import { d as defineCustomElement$4 } from './p-dffda4e1.js';
import { d as defineCustomElement$3 } from './p-3e81ea16.js';
import { d as defineCustomElement$2 } from './p-90e7d533.js';
import { d as defineCustomElement$1 } from './p-802a258a.js';

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
        return (h("div", { key: 'bdb0ac52bb6ce135383280d65a961debde82472c' }, h("div", { key: '7a6e66cf6bd8db23dac0b5cea51a1f9f7934d20d', class: "accordion-item" }, h("h2", { key: '18b85b58381cffbabc57d4e489406f1819c8d2ca', class: "accordion-header" }, h("button", { key: '17064a323d5c38bfd2a74772d1c8a721319e55fd', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": "false", "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}` }, h("mass-plate", { key: '5b0c0926f2124133b5e816e809742bb1774b290c', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '8baa4675f83bf04c2b0fbf652272f1ad7d0c6e06', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: '2f0f252a91f6fb4b0797d849f6cfd3f8bedab0b5', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: '3551149dfd58002699550f001289504c45053a37', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '600af895cb72eb95db9863ada9ad857cf61f37ba', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: '0fac2d7e07e6fd2599da5bd5a46114b759269383', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
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

//# sourceMappingURL=p-c763fd6a.js.map
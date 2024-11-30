'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a57334ed.js');
const days = require('./days-2eb4148e.js');

const daysCss = ".daysNavLink{border-width:1px;border-style:solid;border-color:#dadada;border-radius:0 !important}.daysNavLink:hover{color:white !important}.daysNavLink.disabled{opacity:.3;pointer-events:none}";
const DayPlateStyle0 = daysCss;

const DayPlate = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.active = undefined;
        this.disabled = undefined;
        this.k = undefined;
        this.aria = 'false';
        this.day = undefined;
        this.date = undefined;
    }
    render() {
        index.h("button", { class: `nav-link daysNavLink ${this.active} ${this.disabled}`, id: `v-pills-d${this.k}`, "data-bs-toggle": "pill", "data-bs-target": `#v-pills-d${this.k}-tab`, type: "button", role: "tab", "aria-controls": `v-pills-d${this.k}-tab`, "aria-selected": `${this.aria}` }, index.h("span", { class: "daysSpan" }, this.day, index.h("br", null), this.date));
    }
};
DayPlate.style = DayPlateStyle0;

const massCss$1 = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassSlotStyle0 = massCss$1;

const Mass = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        let lCR = days.D.strToDate(this.massInfo.lastConfirmRelevance);
        let fCR = new Date(lCR);
        fCR.setDate(lCR.getDate() + parseInt(this.massInfo.updatePeriodInDays, 10));
        if (fCR.getTime() >= Date.now()) {
            this.actual = true;
        }
        return index.h("div", { key: 'e8d5ea282bbe359021d53022ce3f99ecb50277c8' }, index.h("div", { key: '41574878bd42f224046338678b3197fdd48da3d8', class: "accordion-item" }, index.h("h2", { key: 'd399753ea6ca2635f63a8969316e027876428d15', class: "accordion-header" }, index.h("button", { key: 'ca4204589405fddfe3547490d2744f195b083757', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": "false", "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}` }, index.h("mass-plate", { key: 'df7b5e6120777d6373dcf1eb913effff23d206e3', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), index.h("div", { key: '2463cca9f6a4be3f73206af7c68d4e2d8e2ed6a5', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, index.h("div", { key: 'ffba225b1a0d1c6b0e514a3a60fd61e38e1e1db4', class: "accordion-body d-flex flex-column gap-2 border-gray" }, index.h("mass-header", { key: '0d429885d7d2da6052499fc53db7913d1009824c', address: this.massInfo.address, langCode: this.massInfo.langCode }), index.h("mass-additional", { key: '2a1e933f61b040c4cf5f40bdee3b436e6e1239c2', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), index.h("mass-footer", { key: '890823e536901c9600b84a9d73171cc3e8118d74', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance })))));
    }
};
Mass.style = MassSlotStyle0;

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const NoMassStyle0 = massCss;

const NoMass = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        index.h("div", { class: "container-fluid mt-3" }, index.h("span", { class: "spanRow" }, "\u041D\u0430 \u0433\u044D\u0442\u044B \u0434\u0437\u0435\u043D\u044C \u0406\u043C\u0448 \u043D\u044F\u043C\u0430."));
    }
};
NoMass.style = NoMassStyle0;

exports.day_plate = DayPlate;
exports.mass_slot = Mass;
exports.no_mass = NoMass;

//# sourceMappingURL=day-plate_3.cjs.entry.js.map
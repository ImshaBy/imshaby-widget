import { r as registerInstance, h, F as Fragment } from './index-39d9f9e8.js';
import { D } from './days-60d6a976.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.massComment{color:rgb(127, 127, 127)}.circle{display:block;position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassSlot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleMassPlateButton = (event) => {
            let btn = (event.target);
            btn.ariaExpanded = (!btn.classList.toggle('collapsed')).toString();
            btn.parentElement.parentElement.querySelector(btn.dataset.bsTarget).classList.toggle('show');
        };
        this.accordionIndex = undefined;
        this.accordionExpanded = undefined;
        this.massIndex = undefined;
        this.expanded = true;
        this.massInfo = undefined;
    }
    render() {
        let btnExpanded = (this.expanded) ? ("") : ("collapsed");
        let btnAria = (this.expanded) ? ("true") : ("false");
        let accordionExpanded = (this.expanded) ? ("show") : ("");
        let lCR = D.strToDate(this.massInfo.lastConfirmRelevance);
        let fCR = new Date(lCR);
        fCR.setDate(lCR.getDate() + parseInt(this.massInfo.updatePeriodInDays, 10));
        let actual = false;
        if (fCR.getTime() >= Date.now()) {
            actual = true;
        }
        return (h(Fragment, null, h("div", { key: 'd946ec91c10ad1c61eac038648eda6c7f0b3cb78', class: "accordion-item" }, h("h2", { key: '6e4ee7391c419f5fad41c4106d74945afefee44f', class: "accordion-header" }, h("button", { key: '18fe75e358775d49081f5d5d333fc1bfd4680d49', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": btnAria, "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}`, onClick: this.toggleMassPlateButton }, h("mass-plate", { key: 'f71274c2453b9205b19f21ba0d94f141aa9b161a', class: 'd-flex flex-row align-items-center', actual: actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: 'a50f7ee090ba087a8547db43b9beb90696da445a', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: 'e47f2daeab2bfebe4215dfcbf1531f3f00797d7d', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: '00ae35e03d4d8e30cd7f530f6d223255c5911939', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '525d47544d494b7d451483955e4c8f71d64ca29a', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: 'a17f9973764cfb9c5f5ebb97a62f45d0df0b6c3f', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
    }
};
MassSlot.style = massCss;

export { MassSlot as mass_slot };

//# sourceMappingURL=mass-slot.entry.js.map
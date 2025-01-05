import { r as registerInstance, h, F as Fragment } from './index-39d9f9e8.js';
import { D } from './days-60d6a976.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

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
        return (h(Fragment, null, h("div", { key: '5642d20da363d7fc84e30f616dacfa38585900d7', class: "accordion-item" }, h("h2", { key: '41dc2c872cb18a5d6ae055c2e9a89e4df81f1a3e', class: "accordion-header" }, h("button", { key: 'c3a1d7976b415ede3de428eba70fb6476ef341bb', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": btnAria, "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}`, onClick: this.toggleMassPlateButton }, h("mass-plate", { key: 'ebdac230a543963dce758eadf2a36ebc7e07a64b', actual: actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '98c342d206aca4355575a08c7b7d69a63939738f', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: 'b538f9510d5c92efcc32fbfb30e0ee93d3517daf', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: '2869563ad27d26584a8c428287c1afd4a51612d6', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '92ef03f6f65127ea4d1a92afdc78b825f0bdeffd', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: '6d514f2a9b78e3f408ae541f92669cef2cd03961', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
    }
};
MassSlot.style = massCss;

export { MassSlot as mass_slot };

//# sourceMappingURL=mass-slot.entry.js.map
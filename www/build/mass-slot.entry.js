import { r as registerInstance, h, F as Fragment } from './index-a51fdbd4.js';
import { D } from './days-60d6a976.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassSlot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Fragment, null, h("div", { key: '2f03d089e4a15cdbc6ee678cea2a79291abb1100', class: "accordion-item" }, h("h2", { key: 'aa23e91ad64f1783dc88354b00af2fb9b559239e', class: "accordion-header" }, h("button", { key: 'bfb99fe685a9a95795c033932f8142b6f42fb9fe', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": "false", "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}` }, h("mass-plate", { key: '938cd49b42d88c2d2d42c53f6a5243366c85b7d8', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '41747949da248f1520b474ecf8d53be11f2da70d', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: '0b5c51acadc6545c1f2e2fd9586c6b5d41566b87', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: '4958559e112ad897a44df43d78907680b0644245', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '1187b4dfcaafb4030812a9d6566a18dfd0ddcc24', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: 'ec32071ebd546360be626fd25daee24b2876e303', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
    }
};
MassSlot.style = massCss;

export { MassSlot as mass_slot };

//# sourceMappingURL=mass-slot.entry.js.map
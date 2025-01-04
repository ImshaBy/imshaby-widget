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
        return (h(Fragment, null, h("div", { key: 'f17e84b55103e0df10103f6810f5dbf16f571e57', class: "accordion-item" }, h("h2", { key: '0047f5fba9db583279d205ae85fd978efb28fbe2', class: "accordion-header" }, h("button", { key: '132752dd9dfb9636bcad26a56ab14f9dc11f3801', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": "false", "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}` }, h("mass-plate", { key: '6cc7988dba136e69688b717d03a4acce2d162bef', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: 'd174598d8b53d2fff28efe68947d8b0ded9a0fba', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: '27d20bfe99e3cd1a5dc43f0e69247551f9c33bf6', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: 'eeafb05269b2f0f2337cb9f51e6c54b8ed74c023', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '9acb376ada64ac7a2e82d550a892a75d546b3e4b', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: '47540336c637a483f843dc771e28a2546b78c0b7', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
    }
};
MassSlot.style = massCss;

export { MassSlot as mass_slot };

//# sourceMappingURL=mass-slot.entry.js.map
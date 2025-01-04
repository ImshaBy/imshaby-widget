import { r as registerInstance, h } from './index-8cb4970f.js';
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
        return (h("div", { key: '020698d404e338102f3666b70e94d3185582ba4a' }, h("div", { key: 'ec7667981b6feb335acce6b7184f61621fabe950', class: "accordion-item" }, h("h2", { key: '813b096f8e038edeb6241784a6985201c7758061', class: "accordion-header" }, h("button", { key: '505ab9c87aaee87aba7bf1c0393db665586e3f7e', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": "false", "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}` }, h("mass-plate", { key: 'b9c909ba1ecd556aad891c037416eb08c55b44db', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '14536b0e13507f3f287a2618d2560502346e7e99', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: '265c6f84efe1e9b26b88fc15e8b420e121fb9aa8', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: '97ca92f22360f169b1f8bc2c07315099d279589b', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: 'e15abc42e5f4e3bf3ac8316c5e12607ee86d9176', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: 'bb61c85597e2e53663586881ec4ebe5de3346000', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
    }
};
MassSlot.style = massCss;

export { MassSlot as mass_slot };

//# sourceMappingURL=mass-slot.entry.js.map
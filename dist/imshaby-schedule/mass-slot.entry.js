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
        return (h("div", { key: 'ca5e4527ae0ab7ceb74b5ca78e04cad9f0cbd29b' }, h("div", { key: '64a32ab42d95da499cd2abb81fae22ab28094622', class: "accordion-item" }, h("h2", { key: '8f72c194ac317b25469e312e60abc1fb9dd2ced5', class: "accordion-header" }, h("button", { key: '6736f845ea4ab78a20f6196f3b771c203b27d62e', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": "false", "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}` }, h("mass-plate", { key: 'd08cb526f0ded5a06e1370af43fdef1f6fb53475', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '04b23fdb1fbb2bcf0f4dbeb9f26392cb65bd9487', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: 'fe4224022632d9fb618d1d8de0680c4dbcafa154', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: 'e28f73a4666507100d641bf2768348d21576891c', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: 'df97095a2ffcf5696df1873025143ef973ed16ac', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: 'da1e3b376a22b03fc6618a0c3c58e4d35cd595fd', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
    }
};
MassSlot.style = massCss;

export { MassSlot as mass_slot };

//# sourceMappingURL=mass-slot.entry.js.map
import { r as registerInstance, h, F as Fragment } from './index-39d9f9e8.js';
import { D } from './days-60d6a976.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.massComment{color:rgb(127, 127, 127)}.circle{display:block;position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassSlot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleMassPlateButton = (event) => {
            let btn = (event.target);
            if (btn.tagName != 'BUTTON') {
                while (btn.tagName != 'BUTTON' && !btn.classList.contains('accordion-button')) {
                    btn = btn.parentElement;
                }
            }
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
        return (h(Fragment, null, h("div", { key: '979c38a8afad3931be9a8d4586f816fe0105154c', class: "accordion-item" }, h("h2", { key: 'ddf447932fcef99433072bfb2b95c0c27f3605b8', class: "accordion-header" }, h("button", { key: 'ff682abdd6f14d6bc42c1730a88e03f04c0b4891', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": btnAria, "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}`, onClick: this.toggleMassPlateButton }, h("mass-plate", { key: '55bef462e5c39ef3e77c9aec533be5c679ad0282', class: 'd-flex flex-row align-items-center', actual: actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: 'eb5f3da9331b2dd38ee29cd3402ec0a4bcb20a09', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: '7eca778b97ec83e19519b2858ca5d1ff09d93a4a', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: '154b0d8364f8488d923253fed330ba589d019e0b', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '347640e32304c937bbb6450f89fa9bfaca1d1427', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: '4063f0ac3f2be20444ca6ddd596af76b9ea25f24', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
    }
};
MassSlot.style = massCss;

export { MassSlot as mass_slot };

//# sourceMappingURL=mass-slot.entry.js.map
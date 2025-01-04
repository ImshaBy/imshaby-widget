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
        this.actual = false;
    }
    render() {
        let btnExpanded = (this.expanded) ? ("") : ("collapsed");
        let btnAria = (this.expanded) ? ("true") : ("false");
        let accordionExpanded = (this.expanded) ? ("show") : ("");
        let lCR = D.strToDate(this.massInfo.lastConfirmRelevance);
        let fCR = new Date(lCR);
        fCR.setDate(lCR.getDate() + parseInt(this.massInfo.updatePeriodInDays, 10));
        if (fCR.getTime() >= Date.now()) {
            this.actual = true;
        }
        return (h(Fragment, null, h("div", { key: '4bb8b73157a5b1bdc64863a211fe0f0e1d5bcc3d', class: "accordion-item" }, h("h2", { key: 'db361a38ee00aebc81e4a5354ef0f092462da494', class: "accordion-header" }, h("button", { key: '4df083f04090aa9f76a7abbc6184f11a5d6eb475', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": btnAria, "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}`, onClick: this.toggleMassPlateButton }, h("mass-plate", { key: '74818ea26b9f9907523045469cf28ac0d0ad53bd', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '4b40c08c34efedd989c2759b79a6ac217ecb0bb8', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: 'a6c10358a5ca7f30720782e2de1e2fd3b9415ba8', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: 'de7ab29395b7b81b912ec1e784a212b94dc93a5e', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '63ec134f71406701e424b815a16678d01f396fea', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: '7a0b7e2493beea40f83b90138c7219eab0710fc7', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
    }
};
MassSlot.style = massCss;

export { MassSlot as mass_slot };

//# sourceMappingURL=mass-slot.entry.js.map
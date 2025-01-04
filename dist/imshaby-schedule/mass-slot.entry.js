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
        return (h(Fragment, null, h("div", { key: '125c42fbcfc255d1404d816fb1d3630ea1cadd43', class: "accordion-item" }, h("h2", { key: '92c7794b4ea78db3f42df92d0753e8506de991ef', class: "accordion-header" }, h("button", { key: '713f5edcfe19d20a04ad883b120262640d81019e', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": btnAria, "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}`, onClick: this.toggleMassPlateButton }, h("mass-plate", { key: '7442190ee221fd0675c3710fd89ccec35184e202', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '6c758a0b6503e88efbee4cdfac4760450f0ba57b', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: 'fc1a855e6c42b267c1574922e2c7e07050f6b14f', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: '5716b8ededcbbb541f0bea6cfc216ed92753fa88', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '2f28e5a3b94366026e1658e8730f4afa14c0ad91', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: 'df5044b8680b2e87a3b50da963ae34821b5c5a87', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
    }
};
MassSlot.style = massCss;

export { MassSlot as mass_slot };

//# sourceMappingURL=mass-slot.entry.js.map
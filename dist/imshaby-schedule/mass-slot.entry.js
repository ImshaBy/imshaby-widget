import { r as registerInstance, h } from './index-8cb4970f.js';
import { D } from './days-d652e4f4.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const Mass = class {
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
        return (h("div", { key: '2d48e96d3afa2750fe3e9884d542597fa8806ea4' }, h("div", { key: '69ccf0e7801bca1b1fde45d472bf8a9c398be2df', class: "accordion-item" }, h("h2", { key: '68c1ae40e250b2e94f9aa8fe4d304b79de72999f', class: "accordion-header" }, h("button", { key: 'eb6939ca89de4dab19e3f5edd936e99cd0d77805', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": "false", "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}` }, h("mass-plate", { key: '6b2810ece298b4484cf8f603e4a9a91814b7789b', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '4f908f37007ab12237f0d796e95ad9cf9f4e9ec9', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: 'fd2704a2e1652635954367745fc73214970d24c4', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: 'd6203d7bad58c23b25a1f5abdbe8bb49a8999a72', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: 'e87228c554c0cbb0ca70d18f8904dda8d575e7fa', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: '01eca0b0799c52dc7d500cd671d89b77dc413d12', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
    }
};
Mass.style = massCss;

export { Mass as mass_slot };

//# sourceMappingURL=mass-slot.entry.js.map
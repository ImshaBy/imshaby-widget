import { r as registerInstance, h } from './index-8cb4970f.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.info = undefined;
        this.lastConfirmRelevance = undefined;
    }
    render() {
        return (h("div", { key: '79440201e82b4d8e0ea08e3e961523d51a6b96ab' }, "!this.info ? (", h("span", { key: 'bbb5530f9ad60ba548776756d5d384307fe77bf2', class: "spanRow spanComment" }, h("span", { key: '228027bff59a65a9166514a803f626bfa596c0ba', class: "massComment" }, this.info)), ")", h("span", { key: '1ff13e720133142620a93559e73555fe0a5022fc', class: "ms-auto text-muted" }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435: ", this.lastConfirmRelevance)));
    }
};
MassFooter.style = massCss;

export { MassFooter as mass_footer };

//# sourceMappingURL=mass-footer.entry.js.map
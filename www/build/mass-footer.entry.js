import { r as registerInstance, h, F as Fragment } from './index-39d9f9e8.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.info = undefined;
        this.lastConfirmRelevance = undefined;
    }
    render() {
        return (h(Fragment, null, (this.info != null) ? (h("span", { class: "spanRow spanComment" }, h("span", { class: "massComment" }, this.info))) : (null), h("span", { key: '804c506304e6cb7a49f47c88ce8e02b7928bb716', class: "ms-auto text-muted" }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435: ", this.lastConfirmRelevance)));
    }
};
MassFooter.style = massCss;

export { MassFooter as mass_footer };

//# sourceMappingURL=mass-footer.entry.js.map
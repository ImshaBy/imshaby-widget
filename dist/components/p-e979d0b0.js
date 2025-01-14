import { p as proxyCustomElement, H, h, F as Fragment } from './p-b1207f47.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.massComment{color:rgb(127, 127, 127)}.circle{display:block;position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassFooterStyle0 = massCss;

const MassFooter = /*@__PURE__*/ proxyCustomElement(class MassFooter extends H {
    constructor() {
        super();
        this.__registerHost();
        this.info = undefined;
        this.lastConfirmRelevance = undefined;
    }
    render() {
        return (h(Fragment, null, (this.info != null) ? (h("span", { class: "spanRow spanComment" }, h("span", { class: "massComment" }, this.info))) : (null), h("span", { key: '9c61fae2725481a0018727053bb2501a5953f326', class: "ms-auto text-muted" }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435: ", this.lastConfirmRelevance.replace(/-/g, '.'))));
    }
    static get style() { return MassFooterStyle0; }
}, [0, "mass-footer", {
        "info": [1],
        "lastConfirmRelevance": [1, "last-confirm-relevance"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mass-footer"];
    components.forEach(tagName => { switch (tagName) {
        case "mass-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MassFooter);
            }
            break;
    } });
}
defineCustomElement();

export { MassFooter as M, defineCustomElement as d };

//# sourceMappingURL=p-e979d0b0.js.map
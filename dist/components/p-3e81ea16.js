import { p as proxyCustomElement, H, h } from './p-2da27d48.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassFooterStyle0 = massCss;

const MassFooter = /*@__PURE__*/ proxyCustomElement(class MassFooter extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.info = undefined;
        this.lastConfirmRelevance = undefined;
    }
    render() {
        return (h("div", { key: '9c5ae2a442d3fea01d320f79e58afe89ae9717df' }, "!this.info ? (", h("span", { key: 'fe2dfaf07fda33fbc5f81c4a7a1c21c4aa50f77b', class: "spanRow spanComment" }, h("span", { key: '2f0be9e8816c203079b8b2697574ac22d49f07a7', class: "massComment" }, this.info)), ")", h("span", { key: '8263c77632063b8e9d9bb7657c51536b67bbc5af', class: "ms-auto text-muted" }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435: ", this.lastConfirmRelevance)));
    }
    static get style() { return MassFooterStyle0; }
}, [1, "mass-footer", {
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

//# sourceMappingURL=p-3e81ea16.js.map
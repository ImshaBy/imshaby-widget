import { p as proxyCustomElement, H, h } from './p-4e89bfd8.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const NoMassStyle0 = massCss;

const NoMass = /*@__PURE__*/ proxyCustomElement(class NoMass extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: '0eedc796f8c6f6f7ce961d757392b07402ceea85', class: "container-fluid mt-3" }, h("span", { key: '441cbe7c2b23117c03771a4d711ae7a91ed5e3b4', class: "spanRow" }, "\u041D\u0430 \u0433\u044D\u0442\u044B \u0434\u0437\u0435\u043D\u044C \u0406\u043C\u0448 \u043D\u044F\u043C\u0430.")));
    }
    static get style() { return NoMassStyle0; }
}, [1, "no-mass"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["no-mass"];
    components.forEach(tagName => { switch (tagName) {
        case "no-mass":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, NoMass);
            }
            break;
    } });
}
defineCustomElement();

export { NoMass as N, defineCustomElement as d };

//# sourceMappingURL=p-cc33fbbd.js.map
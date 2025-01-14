import { p as proxyCustomElement, H, h, F as Fragment } from './p-b1207f47.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.massComment{color:rgb(127, 127, 127)}.circle{display:block;position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassHeaderStyle0 = massCss;

const MassHeader = /*@__PURE__*/ proxyCustomElement(class MassHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.address = undefined;
        this.langCode = undefined;
    }
    render() {
        return (h(Fragment, null, h("span", { key: '2d380fc68324afa5962f96df264d44d6ab394b9d', class: "spanRow spanAddress" }, h("span", { key: '752a3747001faccebfb2cf411349246e44fc7ec4', class: "address" }, "\u0410\u0434\u0440\u0430\u0441: ", this.address)), h("span", { key: 'c8800526af34af99dfb8e5e2ab3f90e726d7b397', class: "langCode" }, "\u041C\u043E\u0432\u0430: ", this.langCode)));
    }
    static get style() { return MassHeaderStyle0; }
}, [0, "mass-header", {
        "address": [1],
        "langCode": [1, "lang-code"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mass-header"];
    components.forEach(tagName => { switch (tagName) {
        case "mass-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MassHeader);
            }
            break;
    } });
}
defineCustomElement();

export { MassHeader as M, defineCustomElement as d };

//# sourceMappingURL=p-67402423.js.map
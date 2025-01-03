import { p as proxyCustomElement, H, h } from './p-2da27d48.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassHeaderStyle0 = massCss;

const MassHeader = /*@__PURE__*/ proxyCustomElement(class MassHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.address = undefined;
        this.langCode = undefined;
    }
    render() {
        return (h("div", { key: '00ec88a3ec89860fd86467db81b719d8825a71b5' }, h("span", { key: 'd188f90a0f4845019dcf364a4a20c871ec37b05c', class: "spanRow spanAddress" }, h("span", { key: '19dd3a4c7556a6ec27d61d1f049f73750bd843de', class: "address" }, "\u0410\u0434\u0440\u0430\u0441: $", this.address)), h("span", { key: 'b07bcdef8891a7ce1dd927358ac15858660b2a23', class: "langCode" }, "\u041C\u043E\u0432\u0430: $", this.langCode)));
    }
    static get style() { return MassHeaderStyle0; }
}, [1, "mass-header", {
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

//# sourceMappingURL=p-90e7d533.js.map
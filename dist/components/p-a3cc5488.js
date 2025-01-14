import { p as proxyCustomElement, H, h, F as Fragment } from './p-b1207f47.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.massComment{color:rgb(127, 127, 127)}.circle{display:block;position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassAdditionalStyle0 = massCss;

const MassAdditional = /*@__PURE__*/ proxyCustomElement(class MassAdditional extends H {
    constructor() {
        super();
        this.__registerHost();
        this.rorate = false;
        this.online = false;
        this.broadcastUrl = '#';
    }
    render() {
        return (h(Fragment, null, (this.rorate) ? (h("span", { class: "spanRow spanRorate" }, h("span", { class: "massRorate" }), " \u0420\u0430\u0440\u0430\u0442\u043D\u044F\u044F \u0406\u043C\u0448\u0430")) : (null), (this.online) ? (h("span", { class: "spanRow spanOnline" }, h("a", { href: this.broadcastUrl, class: "broadcastUrl spanRow" }, h("span", { class: "massOnline" }), " \u0406\u043C\u0448\u0430 online"))) : (null)));
    }
    static get style() { return MassAdditionalStyle0; }
}, [0, "mass-additional", {
        "rorate": [4],
        "online": [4],
        "broadcastUrl": [1, "broadcast-url"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mass-additional"];
    components.forEach(tagName => { switch (tagName) {
        case "mass-additional":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MassAdditional);
            }
            break;
    } });
}
defineCustomElement();

export { MassAdditional as M, defineCustomElement as d };

//# sourceMappingURL=p-a3cc5488.js.map
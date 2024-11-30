import { p as proxyCustomElement, H, h } from './p-4e89bfd8.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassAdditionalStyle0 = massCss;

const MassAdditional = /*@__PURE__*/ proxyCustomElement(class MassAdditional extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.rorate = false;
        this.online = false;
        this.broadcastUrl = '#';
    }
    render() {
        return (h("div", { key: '6ca8917e1a1e0b620b4da1ac600b2df0e07c5edf' }, "this.rorate ? (", h("span", { key: '3cdb7765af9d31cf46c5208da93003feca058e9e', class: "spanRow spanRorate" }, h("span", { key: '06400a4ae0c33d1f2d5a96143a742bdd9badb457', class: "massRorate" }), " \u0420\u0430\u0440\u0430\u0442\u043D\u044F\u044F \u0406\u043C\u0448\u0430"), ") this.online ? (", h("span", { key: '7c323154888654f78f60a8b92ade942c338a96bc', class: "spanRow spanOnline" }, h("a", { key: 'cad3d9bb1af33e355e22da8db650d7f497d5648a', href: "{this.broadcastUrl}", class: "broadcastUrl spanRow" }, h("span", { key: '2d15a95d4825bcfcf7c4c398358889ff49391fea', class: "massOnline" }), " \u0406\u043C\u0448\u0430 online")), ")"));
    }
    static get style() { return MassAdditionalStyle0; }
}, [1, "mass-additional", {
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

//# sourceMappingURL=p-3fdf0c01.js.map
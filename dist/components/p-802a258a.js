import { p as proxyCustomElement, H, h } from './p-2da27d48.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassPlateStyle0 = massCss;

const MassPlate = /*@__PURE__*/ proxyCustomElement(class MassPlate extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.time = undefined;
        this.actual = true;
        this.rorate = false;
        this.online = false;
    }
    render() {
        return (h("div", { key: '67d3621b70d1527633839afa273ac62b9645ec5d' }, h("span", { key: '1b56cbe26b1736ee007a83e590cc3ca174814b6d', class: `circle bg-${this.actual ? 'actual' : 'notactual'}` }), h("span", { key: '0c7cf8bd81969d39b5a935ecdc8df06e89d4a7b9', class: "massHour" }, this.time), h("div", { key: 'd046f7eb0b1c8568b9486686f38b0a195bcd8794', class: "ms-5 me-auto" }, "this.rorate ? (", h("span", { key: 'fbe8cfb0a079126d4640099cbf175841eb3fa94f', class: "massRorate" }), ") this.online ? (", h("span", { key: 'fedaa36133325243ae79796081b4153f3377ca1e', class: "massOnline" }), ")")));
    }
    static get style() { return MassPlateStyle0; }
}, [1, "mass-plate", {
        "time": [1],
        "actual": [4],
        "rorate": [4],
        "online": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mass-plate"];
    components.forEach(tagName => { switch (tagName) {
        case "mass-plate":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MassPlate);
            }
            break;
    } });
}
defineCustomElement();

export { MassPlate as M, defineCustomElement as d };

//# sourceMappingURL=p-802a258a.js.map
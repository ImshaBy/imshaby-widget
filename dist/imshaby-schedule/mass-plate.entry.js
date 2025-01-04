import { r as registerInstance, h, F as Fragment } from './index-a51fdbd4.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassPlate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.time = undefined;
        this.actual = true;
        this.rorate = false;
        this.online = false;
    }
    render() {
        return (h(Fragment, null, h("span", { key: '663914c62331cf79c8b32f0cdf24d9d37922dc80', class: `circle bg-${this.actual ? 'actual' : 'notactual'}` }), h("span", { key: 'd71d365b75ce1742cb357e29bcd56c9bbe143428', class: "massHour" }, this.time), h("div", { key: '16d2cfc4c1594d81b2d4ed370f1d352c7320f95d', class: "ms-5 me-auto" }, (this.rorate) ? (h("span", { class: "massRorate" })) : (null), (this.online) ? (h("span", { class: "massOnline" })) : (null))));
    }
};
MassPlate.style = massCss;

export { MassPlate as mass_plate };

//# sourceMappingURL=mass-plate.entry.js.map
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
        return (h(Fragment, null, h("span", { key: '0c00e234fd09c24c9e0f1ac6584843a376d03cb6', class: `circle bg-${this.actual ? 'actual' : 'notactual'}` }), h("span", { key: '82e8f9c4be2e7e69f6e0c0669c0b4378e3b0ac3e', class: "massHour" }, this.time), h("div", { key: 'c4c302b0e534bbc8266516f2afe2aee11a5fac8c', class: "ms-5 me-auto" }, (this.rorate) ? (h("span", { class: "massRorate" })) : (null), (this.online) ? (h("span", { class: "massOnline" })) : (null))));
    }
};
MassPlate.style = massCss;

export { MassPlate as mass_plate };

//# sourceMappingURL=mass-plate.entry.js.map
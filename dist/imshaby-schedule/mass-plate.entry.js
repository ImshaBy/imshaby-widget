import { r as registerInstance, h, F as Fragment } from './index-39d9f9e8.js';

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
        return (h(Fragment, null, h("span", { key: '083e549000fcc023b2d3a48145670d6803be37ee', class: `circle bg-${this.actual ? 'actual' : 'notactual'}` }), h("span", { key: 'cfdc59d69a8d9ef8b3bb9a485adb52749163b0e9', class: "massHour" }, this.time), h("div", { key: '09245e781af354f318361eb13520cdef330c5ed1', class: "ms-5 me-auto" }, (this.rorate) ? (h("span", { class: "massRorate" })) : (null), (this.online) ? (h("span", { class: "massOnline" })) : (null))));
    }
};
MassPlate.style = massCss;

export { MassPlate as mass_plate };

//# sourceMappingURL=mass-plate.entry.js.map
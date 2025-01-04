import { r as registerInstance, h } from './index-8cb4970f.js';

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
        return (h("div", { key: '707cac4ddc5fe458620dc35d4dce0317abef613f' }, h("span", { key: 'fdc6edca4621b946503b1c00639130b818466dc9', class: `circle bg-${this.actual ? 'actual' : 'notactual'}` }), h("span", { key: 'a1f7e95a753244bd59572979bf627004218582bc', class: "massHour" }, this.time), h("div", { key: '72ae8bb28edadbb67c95d97b19f13c10da28b15a', class: "ms-5 me-auto" }, "this.rorate ? (", h("span", { key: '487f6d5f7265cc97f04b0c9a4c9b6bf2fab509ec', class: "massRorate" }), ") this.online ? (", h("span", { key: '223efc31757424c045aff812360cd5997a1b4407', class: "massOnline" }), ")")));
    }
};
MassPlate.style = massCss;

export { MassPlate as mass_plate };

//# sourceMappingURL=mass-plate.entry.js.map
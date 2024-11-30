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
        return (h("div", { key: 'a6afd2e34d5931651173e827a1e3399478df665d' }, h("span", { key: 'bbbeaabe4665734982910f2d773b9e5cfc9496ec', class: `circle bg-${this.actual ? 'actual' : 'notactual'}` }), h("span", { key: 'd7d23e96ce02605d7a9f00e4fb13efe2e3ec4a7d', class: "massHour" }, this.time), h("div", { key: '3da5dc5063b6a1fcb402cb0a69d2f94c3ea252ec', class: "ms-5 me-auto" }, "this.rorate ? (", h("span", { key: 'f13cecb9c9660541bc6d6d8b335bfdcfd465ee31', class: "massRorate" }), ") this.online ? (", h("span", { key: '0cc2fae5f29e763f23cd3e4de537c1ea6b692846', class: "massOnline" }), ")")));
    }
};
MassPlate.style = massCss;

export { MassPlate as mass_plate };

//# sourceMappingURL=mass-plate.entry.js.map
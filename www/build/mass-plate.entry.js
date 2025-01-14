import { r as registerInstance, h, F as Fragment } from './index-39d9f9e8.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.massComment{color:rgb(127, 127, 127)}.circle{display:block;position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassPlate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.time = undefined;
        this.actual = true;
        this.rorate = false;
        this.online = false;
    }
    render() {
        return (h(Fragment, null, h("span", { key: 'fdcefb18c3305c866f33dfd0f818d82bb4b5baff', class: `circle bg-${this.actual ? 'actual' : 'notactual'}` }), h("span", { key: '032918fd6a717e683ffb84cdd8ea6617b9b7dd44', class: "massHour" }, this.time), h("div", { key: 'b4f344624e04404b8b2b25ab44c5f15122a440ef', class: "ms-5 me-auto" }, (this.rorate) ? (h("span", { class: "massRorate" })) : (null), (this.online) ? (h("span", { class: "massOnline" })) : (null))));
    }
};
MassPlate.style = massCss;

export { MassPlate as mass_plate };

//# sourceMappingURL=mass-plate.entry.js.map
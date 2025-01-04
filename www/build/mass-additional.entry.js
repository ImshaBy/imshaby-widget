import { r as registerInstance, h, F as Fragment } from './index-a51fdbd4.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassAdditional = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rorate = false;
        this.online = false;
        this.broadcastUrl = '#';
    }
    render() {
        return (h(Fragment, null, (this.rorate) ? (h("span", { class: "spanRow spanRorate" }, h("span", { class: "massRorate" }), " \u0420\u0430\u0440\u0430\u0442\u043D\u044F\u044F \u0406\u043C\u0448\u0430")) : (null), (this.online) ? (h("span", { class: "spanRow spanOnline" }, h("a", { href: this.broadcastUrl, class: "broadcastUrl spanRow" }, h("span", { class: "massOnline" }), " \u0406\u043C\u0448\u0430 online"))) : (null)));
    }
};
MassAdditional.style = massCss;

export { MassAdditional as mass_additional };

//# sourceMappingURL=mass-additional.entry.js.map
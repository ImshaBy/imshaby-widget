import { r as registerInstance, h } from './index-8cb4970f.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassAdditional = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rorate = false;
        this.online = false;
        this.broadcastUrl = '#';
    }
    render() {
        return (h("div", { key: '9b6a3a18d3788c3bc9a1e584f2405230acdf4364' }, "this.rorate ? (", h("span", { key: '4ec14632d464f23e7cb0b88ca5aa6a67b854877d', class: "spanRow spanRorate" }, h("span", { key: '6f5e61afa3a8f116f3c0451860547fa8c6186629', class: "massRorate" }), " \u0420\u0430\u0440\u0430\u0442\u043D\u044F\u044F \u0406\u043C\u0448\u0430"), ") this.online ? (", h("span", { key: 'e92807257be83c83ff0290e5b5bb59957a03219c', class: "spanRow spanOnline" }, h("a", { key: '7cd6b37b5501fd3ff45382bb1c28f82ce02552be', href: "{this.broadcastUrl}", class: "broadcastUrl spanRow" }, h("span", { key: 'd18d0c611add880be18a24baff56e87eaf71e7d2', class: "massOnline" }), " \u0406\u043C\u0448\u0430 online")), ")"));
    }
};
MassAdditional.style = massCss;

export { MassAdditional as mass_additional };

//# sourceMappingURL=mass-additional.entry.js.map
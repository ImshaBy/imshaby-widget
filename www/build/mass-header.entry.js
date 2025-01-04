import { r as registerInstance, h } from './index-8cb4970f.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.address = undefined;
        this.langCode = undefined;
    }
    render() {
        return (h("div", { key: '3b04530be5e91e6d9c735c6a138549e31bed216c' }, h("span", { key: '825b1600acdc4c848de6d9dc86658402ad515bdb', class: "spanRow spanAddress" }, h("span", { key: '5c5c83d13eefe4591e416f0446f14aea748d4b26', class: "address" }, "\u0410\u0434\u0440\u0430\u0441: $", this.address)), h("span", { key: '948bbc77c12135ac5d491875fc59627f4ffa1251', class: "langCode" }, "\u041C\u043E\u0432\u0430: $", this.langCode)));
    }
};
MassHeader.style = massCss;

export { MassHeader as mass_header };

//# sourceMappingURL=mass-header.entry.js.map
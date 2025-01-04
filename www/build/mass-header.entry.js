import { r as registerInstance, h, F as Fragment } from './index-a51fdbd4.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.address = undefined;
        this.langCode = undefined;
    }
    render() {
        return (h(Fragment, null, h("span", { key: '5d5eb2df7323728b84dd7e85f33168326fcbb3eb', class: "spanRow spanAddress" }, h("span", { key: '22ef95f50f8b030f7590e7b71b0bf01082ba68d4', class: "address" }, "\u0410\u0434\u0440\u0430\u0441: ", this.address)), h("span", { key: 'e61f7b624175a265cca1bf5f124aae2cf6a34409', class: "langCode" }, "\u041C\u043E\u0432\u0430: ", this.langCode)));
    }
};
MassHeader.style = massCss;

export { MassHeader as mass_header };

//# sourceMappingURL=mass-header.entry.js.map
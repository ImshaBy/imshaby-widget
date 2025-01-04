import { r as registerInstance, h, F as Fragment } from './index-a51fdbd4.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.address = undefined;
        this.langCode = undefined;
    }
    render() {
        return (h(Fragment, null, h("span", { key: 'd44f3f2a708617107eab3b933bd0979cfafc75a4', class: "spanRow spanAddress" }, h("span", { key: '8eb3889862aa20f1929bd6d3f8f566b9bbc75b71', class: "address" }, "\u0410\u0434\u0440\u0430\u0441: ", this.address)), h("span", { key: 'cf79a15fb5b2db4b53bf5a11536c4f87f8ee2042', class: "langCode" }, "\u041C\u043E\u0432\u0430: ", this.langCode)));
    }
};
MassHeader.style = massCss;

export { MassHeader as mass_header };

//# sourceMappingURL=mass-header.entry.js.map
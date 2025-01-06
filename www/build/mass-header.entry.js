import { r as registerInstance, h, F as Fragment } from './index-39d9f9e8.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.massComment{color:rgb(127, 127, 127)}.circle{display:block;position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.address = undefined;
        this.langCode = undefined;
    }
    render() {
        return (h(Fragment, null, h("span", { key: '2363bc8d748ed5462c23803baa5a2a9b3072604e', class: "spanRow spanAddress" }, h("span", { key: '9c3ef1941666723710a5e5b907075d6aed4d036d', class: "address" }, "\u0410\u0434\u0440\u0430\u0441: ", this.address)), h("span", { key: 'a954e6fa820bd7d9e522ed6097c8efdabb2b4ff5', class: "langCode" }, "\u041C\u043E\u0432\u0430: ", this.langCode)));
    }
};
MassHeader.style = massCss;

export { MassHeader as mass_header };

//# sourceMappingURL=mass-header.entry.js.map
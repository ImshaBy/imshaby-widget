import { r as registerInstance, h } from './index-8cb4970f.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.address = undefined;
        this.langCode = undefined;
    }
    render() {
        return h("div", { key: '789ef0c4ac4071a8c76cfc4db24613c70de1854d' }, h("span", { key: '867da962aa10ca9d273686492cebba9c66625671', class: "spanRow spanAddress" }, h("span", { key: '8777125d10e7f90110b6013b5f077cf441eb9497', class: "address" }, "\u0410\u0434\u0440\u0430\u0441: $", this.address)), h("span", { key: 'c42f11e4ba2e30d6129f9211da3d4b155153ea8f', class: "langCode" }, "\u041C\u043E\u0432\u0430: $", this.langCode));
    }
};
MassHeader.style = massCss;

export { MassHeader as mass_header };

//# sourceMappingURL=mass-header.entry.js.map
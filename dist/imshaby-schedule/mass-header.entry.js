import { r as registerInstance, h } from './index-8cb4970f.js';

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";

const MassHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.address = undefined;
        this.langCode = undefined;
    }
    render() {
        return (h("div", { key: 'bfe4210cc2e1e2dc091b8a6b0ce98c34b9bed507' }, h("span", { key: '79b352687b66e21dda7bf8f8b2e9244433fbffda', class: "spanRow spanAddress" }, h("span", { key: '4aa5df1af49ce24167a373f0cb58941d84547acf', class: "address" }, "\u0410\u0434\u0440\u0430\u0441: ", this.address)), h("span", { key: 'b5a7bf5133398efa5ac4d2747ae5f221ddf72b52', class: "langCode" }, "\u041C\u043E\u0432\u0430: ", this.langCode)));
    }
};
MassHeader.style = massCss;

export { MassHeader as mass_header };

//# sourceMappingURL=mass-header.entry.js.map
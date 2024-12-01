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
        return (h("div", { key: '6f84a40f7a2c17373c9c6d45b9ba8cc2962040f3' }, "this.rorate ? (", h("span", { key: '9f2d7b31e930b712fdbff8cdf673fb22d7b2b264', class: "spanRow spanRorate" }, h("span", { key: 'f4163eb8f42207eeaeadfb65cef9e7fde514785b', class: "massRorate" }), " \u0420\u0430\u0440\u0430\u0442\u043D\u044F\u044F \u0406\u043C\u0448\u0430"), ") this.online ? (", h("span", { key: '631c92772c7fae221e1f52b9295d6dd3bce52c1b', class: "spanRow spanOnline" }, h("a", { key: '36b6f65d259c3b829b6b30b30cb358d63f618fd4', href: "{this.broadcastUrl}", class: "broadcastUrl spanRow" }, h("span", { key: '6ae296fb0b609e60925efd1f95244e8d06a99c4e', class: "massOnline" }), " \u0406\u043C\u0448\u0430 online")), ")"));
    }
};
MassAdditional.style = massCss;

export { MassAdditional as mass_additional };

//# sourceMappingURL=mass-additional.entry.js.map
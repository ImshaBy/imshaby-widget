import { r as registerInstance, h } from './index-d0479849.js';

const massCss$3 = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassAdditionalStyle0 = massCss$3;

const MassAdditional = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rorate = false;
        this.online = false;
        this.broadcastUrl = '#';
    }
    render() {
        return (h("div", { key: '6ca8917e1a1e0b620b4da1ac600b2df0e07c5edf' }, "this.rorate ? (", h("span", { key: '3cdb7765af9d31cf46c5208da93003feca058e9e', class: "spanRow spanRorate" }, h("span", { key: '06400a4ae0c33d1f2d5a96143a742bdd9badb457', class: "massRorate" }), " \u0420\u0430\u0440\u0430\u0442\u043D\u044F\u044F \u0406\u043C\u0448\u0430"), ") this.online ? (", h("span", { key: '7c323154888654f78f60a8b92ade942c338a96bc', class: "spanRow spanOnline" }, h("a", { key: 'cad3d9bb1af33e355e22da8db650d7f497d5648a', href: "{this.broadcastUrl}", class: "broadcastUrl spanRow" }, h("span", { key: '2d15a95d4825bcfcf7c4c398358889ff49391fea', class: "massOnline" }), " \u0406\u043C\u0448\u0430 online")), ")"));
    }
};
MassAdditional.style = MassAdditionalStyle0;

const massCss$2 = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassFooterStyle0 = massCss$2;

const MassFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.info = undefined;
        this.lastConfirmRelevance = undefined;
    }
    render() {
        return (h("div", { key: 'd2e2f656d73647918941f4fb1c1a1ed8c464669f' }, "!this.info ? (", h("span", { key: '29f85f237ced19141f02738230983ecdfb359c43', class: "spanRow spanComment" }, h("span", { key: '80126df269eec18366f773b631011fdb3d0f3a42', class: "massComment" }, this.info)), ")", h("span", { key: 'b9ae168feaa6f57175dc1ea546e2317d2f0d4483', class: "ms-auto text-muted" }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435: ", this.lastConfirmRelevance)));
    }
};
MassFooter.style = MassFooterStyle0;

const massCss$1 = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassHeaderStyle0 = massCss$1;

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
MassHeader.style = MassHeaderStyle0;

const massCss = ".bg-actual{background-color:#739953}.bg-notactual{background-color:yellow}.broadcastUrl{text-decoration:none;color:rgb(69, 68, 68);cursor:pointer}.border-gray{border:1px solid rgb(221, 221, 221);border-radius:4px}.massRorate,.massOnline{display:inline-block;align-items:center;background-repeat:no-repeat;background-position:center;background-size:contain;width:1.5rem;height:1.5rem}.spanRow{display:flex;align-items:center;gap:1ch;color:black}.circle{position:relative;width:1.5rem;height:1.5rem;margin-right:1.5rem;border-radius:50%;box-sizing:border-box}";
const MassPlateStyle0 = massCss;

const MassPlate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.time = undefined;
        this.actual = true;
        this.rorate = false;
        this.online = false;
    }
    render() {
        return (h("div", { key: 'a6afd2e34d5931651173e827a1e3399478df665d' }, h("span", { key: 'bbbeaabe4665734982910f2d773b9e5cfc9496ec', class: `circle bg-${this.actual ? 'actual' : 'notactual'}` }), h("span", { key: 'd7d23e96ce02605d7a9f00e4fb13efe2e3ec4a7d', class: "massHour" }, this.time), h("div", { key: '3da5dc5063b6a1fcb402cb0a69d2f94c3ea252ec', class: "ms-5 me-auto" }, "this.rorate ? (", h("span", { key: 'f13cecb9c9660541bc6d6d8b335bfdcfd465ee31', class: "massRorate" }), ") this.online ? (", h("span", { key: '0cc2fae5f29e763f23cd3e4de537c1ea6b692846', class: "massOnline" }), ")")));
    }
};
MassPlate.style = MassPlateStyle0;

export { MassAdditional as mass_additional, MassFooter as mass_footer, MassHeader as mass_header, MassPlate as mass_plate };

//# sourceMappingURL=mass-additional_4.entry.js.map
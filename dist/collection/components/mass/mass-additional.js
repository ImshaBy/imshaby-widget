import { h } from "@stencil/core";
export class MassAdditional {
    constructor() {
        this.rorate = false;
        this.online = false;
        this.broadcastUrl = '#';
    }
    render() {
        return (h("div", { key: '6f84a40f7a2c17373c9c6d45b9ba8cc2962040f3' }, "this.rorate ? (", h("span", { key: '9f2d7b31e930b712fdbff8cdf673fb22d7b2b264', class: "spanRow spanRorate" }, h("span", { key: 'f4163eb8f42207eeaeadfb65cef9e7fde514785b', class: "massRorate" }), " \u0420\u0430\u0440\u0430\u0442\u043D\u044F\u044F \u0406\u043C\u0448\u0430"), ") this.online ? (", h("span", { key: '631c92772c7fae221e1f52b9295d6dd3bce52c1b', class: "spanRow spanOnline" }, h("a", { key: '36b6f65d259c3b829b6b30b30cb358d63f618fd4', href: "{this.broadcastUrl}", class: "broadcastUrl spanRow" }, h("span", { key: '6ae296fb0b609e60925efd1f95244e8d06a99c4e', class: "massOnline" }), " \u0406\u043C\u0448\u0430 online")), ")"));
    }
    static get is() { return "mass-additional"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["mass.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["mass.css"]
        };
    }
    static get properties() {
        return {
            "rorate": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "rorate",
                "reflect": false,
                "defaultValue": "false"
            },
            "online": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "online",
                "reflect": false,
                "defaultValue": "false"
            },
            "broadcastUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "broadcast-url",
                "reflect": false,
                "defaultValue": "'#'"
            }
        };
    }
}
//# sourceMappingURL=mass-additional.js.map

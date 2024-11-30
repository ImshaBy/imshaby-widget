import { h } from "@stencil/core";
export class MassAdditional {
    constructor() {
        this.rorate = false;
        this.online = false;
        this.broadcastUrl = '#';
    }
    render() {
        return (h("div", { key: '6ca8917e1a1e0b620b4da1ac600b2df0e07c5edf' }, "this.rorate ? (", h("span", { key: '3cdb7765af9d31cf46c5208da93003feca058e9e', class: "spanRow spanRorate" }, h("span", { key: '06400a4ae0c33d1f2d5a96143a742bdd9badb457', class: "massRorate" }), " \u0420\u0430\u0440\u0430\u0442\u043D\u044F\u044F \u0406\u043C\u0448\u0430"), ") this.online ? (", h("span", { key: '7c323154888654f78f60a8b92ade942c338a96bc', class: "spanRow spanOnline" }, h("a", { key: 'cad3d9bb1af33e355e22da8db650d7f497d5648a', href: "{this.broadcastUrl}", class: "broadcastUrl spanRow" }, h("span", { key: '2d15a95d4825bcfcf7c4c398358889ff49391fea', class: "massOnline" }), " \u0406\u043C\u0448\u0430 online")), ")"));
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

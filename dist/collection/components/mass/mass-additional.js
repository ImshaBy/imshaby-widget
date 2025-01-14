import { h, Fragment } from "@stencil/core";
export class MassAdditional {
    constructor() {
        this.rorate = false;
        this.online = false;
        this.broadcastUrl = '#';
    }
    render() {
        return (h(Fragment, null, (this.rorate) ? (h("span", { class: "spanRow spanRorate" }, h("span", { class: "massRorate" }), " \u0420\u0430\u0440\u0430\u0442\u043D\u044F\u044F \u0406\u043C\u0448\u0430")) : (null), (this.online) ? (h("span", { class: "spanRow spanOnline" }, h("a", { href: this.broadcastUrl, class: "broadcastUrl spanRow" }, h("span", { class: "massOnline" }), " \u0406\u043C\u0448\u0430 online"))) : (null)));
    }
    static get is() { return "mass-additional"; }
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

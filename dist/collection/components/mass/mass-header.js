import { h } from "@stencil/core";
export class MassHeader {
    constructor() {
        this.address = undefined;
        this.langCode = undefined;
    }
    render() {
        return h("div", { key: '789ef0c4ac4071a8c76cfc4db24613c70de1854d' }, h("span", { key: '867da962aa10ca9d273686492cebba9c66625671', class: "spanRow spanAddress" }, h("span", { key: '8777125d10e7f90110b6013b5f077cf441eb9497', class: "address" }, "\u0410\u0434\u0440\u0430\u0441: $", this.address)), h("span", { key: 'c42f11e4ba2e30d6129f9211da3d4b155153ea8f', class: "langCode" }, "\u041C\u043E\u0432\u0430: $", this.langCode));
    }
    static get is() { return "mass-header"; }
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
            "address": {
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
                "attribute": "address",
                "reflect": false
            },
            "langCode": {
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
                "attribute": "lang-code",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=mass-header.js.map

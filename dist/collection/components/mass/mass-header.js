import { h, Fragment } from "@stencil/core";
export class MassHeader {
    constructor() {
        this.address = undefined;
        this.langCode = undefined;
    }
    render() {
        return (h(Fragment, null, h("span", { key: '2d380fc68324afa5962f96df264d44d6ab394b9d', class: "spanRow spanAddress" }, h("span", { key: '752a3747001faccebfb2cf411349246e44fc7ec4', class: "address" }, "\u0410\u0434\u0440\u0430\u0441: ", this.address)), h("span", { key: 'c8800526af34af99dfb8e5e2ab3f90e726d7b397', class: "langCode" }, "\u041C\u043E\u0432\u0430: ", this.langCode)));
    }
    static get is() { return "mass-header"; }
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

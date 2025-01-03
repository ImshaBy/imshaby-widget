import { h } from "@stencil/core";
export class MassHeader {
    constructor() {
        this.address = undefined;
        this.langCode = undefined;
    }
    render() {
        return (h("div", { key: '00ec88a3ec89860fd86467db81b719d8825a71b5' }, h("span", { key: 'd188f90a0f4845019dcf364a4a20c871ec37b05c', class: "spanRow spanAddress" }, h("span", { key: '19dd3a4c7556a6ec27d61d1f049f73750bd843de', class: "address" }, "\u0410\u0434\u0440\u0430\u0441: $", this.address)), h("span", { key: 'b07bcdef8891a7ce1dd927358ac15858660b2a23', class: "langCode" }, "\u041C\u043E\u0432\u0430: $", this.langCode)));
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

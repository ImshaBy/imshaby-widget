import { h } from "@stencil/core";
export class MassFooter {
    constructor() {
        this.info = undefined;
        this.lastConfirmRelevance = undefined;
    }
    render() {
        return (h("div", { key: 'd2e2f656d73647918941f4fb1c1a1ed8c464669f' }, "!this.info ? (", h("span", { key: '29f85f237ced19141f02738230983ecdfb359c43', class: "spanRow spanComment" }, h("span", { key: '80126df269eec18366f773b631011fdb3d0f3a42', class: "massComment" }, this.info)), ")", h("span", { key: 'b9ae168feaa6f57175dc1ea546e2317d2f0d4483', class: "ms-auto text-muted" }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435: ", this.lastConfirmRelevance)));
    }
    static get is() { return "mass-footer"; }
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
            "info": {
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
                "attribute": "info",
                "reflect": false
            },
            "lastConfirmRelevance": {
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
                "attribute": "last-confirm-relevance",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=mass-footer.js.map

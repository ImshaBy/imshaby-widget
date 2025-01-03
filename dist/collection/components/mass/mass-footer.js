import { h } from "@stencil/core";
export class MassFooter {
    constructor() {
        this.info = undefined;
        this.lastConfirmRelevance = undefined;
    }
    render() {
        return (h("div", { key: '9c5ae2a442d3fea01d320f79e58afe89ae9717df' }, "!this.info ? (", h("span", { key: 'fe2dfaf07fda33fbc5f81c4a7a1c21c4aa50f77b', class: "spanRow spanComment" }, h("span", { key: '2f0be9e8816c203079b8b2697574ac22d49f07a7', class: "massComment" }, this.info)), ")", h("span", { key: '8263c77632063b8e9d9bb7657c51536b67bbc5af', class: "ms-auto text-muted" }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435: ", this.lastConfirmRelevance)));
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

import { h, Fragment } from "@stencil/core";
export class MassFooter {
    constructor() {
        this.info = undefined;
        this.lastConfirmRelevance = undefined;
    }
    render() {
        return (h(Fragment, null, (this.info != null) ? (h("span", { class: "spanRow spanComment" }, h("span", { class: "massComment" }, this.info))) : (null), h("span", { key: '9c61fae2725481a0018727053bb2501a5953f326', class: "ms-auto text-muted" }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435: ", this.lastConfirmRelevance.replace(/-/g, '.'))));
    }
    static get is() { return "mass-footer"; }
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

import { h } from "@stencil/core";
export class DayPlate {
    constructor() {
        this.active = undefined;
        this.disabled = undefined;
        this.k = undefined;
        this.aria = 'false';
        this.day = undefined;
        this.date = undefined;
    }
    render() {
        return (h("button", { key: '535837b9f23eac86fec14cd7a07103c37d06a2dc', class: `nav-link daysNavLink ${this.active} ${this.disabled}`, id: `v-pills-d${this.k}`, "data-bs-toggle": "pill", "data-bs-target": `#v-pills-d${this.k}-tab`, type: "button", role: "tab", "aria-controls": `v-pills-d${this.k}-tab`, "aria-selected": `${this.aria}` }, h("span", { key: 'ce9b845fb9b7575d5bbcd3c6aafcdeeb8b2ef9cf', class: "daysSpan" }, this.day, h("br", { key: '1276030eb7e4b91ed62571f1b0d61c2d1b2782d4' }), this.date)));
    }
    static get is() { return "day-plate"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["days.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["days.css"]
        };
    }
    static get properties() {
        return {
            "active": {
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
                "attribute": "active",
                "reflect": false
            },
            "disabled": {
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
                "attribute": "disabled",
                "reflect": false
            },
            "k": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "k",
                "reflect": false
            },
            "aria": {
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
                "attribute": "aria",
                "reflect": false,
                "defaultValue": "'false'"
            },
            "day": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "day",
                "reflect": false
            },
            "date": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "date",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=days.js.map

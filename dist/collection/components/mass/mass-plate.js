import { h } from "@stencil/core";
export class MassPlate {
    constructor() {
        this.time = undefined;
        this.actual = true;
        this.rorate = false;
        this.online = false;
    }
    render() {
        return (h("div", { key: '67d3621b70d1527633839afa273ac62b9645ec5d' }, h("span", { key: '1b56cbe26b1736ee007a83e590cc3ca174814b6d', class: `circle bg-${this.actual ? 'actual' : 'notactual'}` }), h("span", { key: '0c7cf8bd81969d39b5a935ecdc8df06e89d4a7b9', class: "massHour" }, this.time), h("div", { key: 'd046f7eb0b1c8568b9486686f38b0a195bcd8794', class: "ms-5 me-auto" }, "this.rorate ? (", h("span", { key: 'fbe8cfb0a079126d4640099cbf175841eb3fa94f', class: "massRorate" }), ") this.online ? (", h("span", { key: 'fedaa36133325243ae79796081b4153f3377ca1e', class: "massOnline" }), ")")));
    }
    static get is() { return "mass-plate"; }
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
            "time": {
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
                "attribute": "time",
                "reflect": false
            },
            "actual": {
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
                "attribute": "actual",
                "reflect": false,
                "defaultValue": "true"
            },
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
            }
        };
    }
}
//# sourceMappingURL=mass-plate.js.map

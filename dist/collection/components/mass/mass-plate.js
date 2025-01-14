import { h, Fragment } from "@stencil/core";
export class MassPlate {
    constructor() {
        this.time = undefined;
        this.actual = true;
        this.rorate = false;
        this.online = false;
    }
    render() {
        return (h(Fragment, null, h("span", { key: 'fdcefb18c3305c866f33dfd0f818d82bb4b5baff', class: `circle bg-${this.actual ? 'actual' : 'notactual'}` }), h("span", { key: '032918fd6a717e683ffb84cdd8ea6617b9b7dd44', class: "massHour" }, this.time), h("div", { key: 'b4f344624e04404b8b2b25ab44c5f15122a440ef', class: "ms-5 me-auto" }, (this.rorate) ? (h("span", { class: "massRorate" })) : (null), (this.online) ? (h("span", { class: "massOnline" })) : (null))));
    }
    static get is() { return "mass-plate"; }
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

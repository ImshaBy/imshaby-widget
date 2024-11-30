import { h } from "@stencil/core";
export class MassPlate {
    constructor() {
        this.time = undefined;
        this.actual = true;
        this.rorate = false;
        this.online = false;
    }
    render() {
        return (h("div", { key: 'a6afd2e34d5931651173e827a1e3399478df665d' }, h("span", { key: 'bbbeaabe4665734982910f2d773b9e5cfc9496ec', class: `circle bg-${this.actual ? 'actual' : 'notactual'}` }), h("span", { key: 'd7d23e96ce02605d7a9f00e4fb13efe2e3ec4a7d', class: "massHour" }, this.time), h("div", { key: '3da5dc5063b6a1fcb402cb0a69d2f94c3ea252ec', class: "ms-5 me-auto" }, "this.rorate ? (", h("span", { key: 'f13cecb9c9660541bc6d6d8b335bfdcfd465ee31', class: "massRorate" }), ") this.online ? (", h("span", { key: '0cc2fae5f29e763f23cd3e4de537c1ea6b692846', class: "massOnline" }), ")")));
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

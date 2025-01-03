import { h } from "@stencil/core";
import { D } from "../../utils/days";
export class Mass {
    constructor() {
        this.accordionIndex = undefined;
        this.accordionExpanded = undefined;
        this.massIndex = undefined;
        this.expanded = true;
        this.massInfo = undefined;
        this.actual = false;
    }
    render() {
        let btnExpanded = (this.expanded) ? ("") : ("collapsed");
        let accordionExpanded = (this.expanded) ? ("show") : ("");
        let lCR = D.strToDate(this.massInfo.lastConfirmRelevance);
        let fCR = new Date(lCR);
        fCR.setDate(lCR.getDate() + parseInt(this.massInfo.updatePeriodInDays, 10));
        if (fCR.getTime() >= Date.now()) {
            this.actual = true;
        }
        return (h("div", { key: 'bdb0ac52bb6ce135383280d65a961debde82472c' }, h("div", { key: '7a6e66cf6bd8db23dac0b5cea51a1f9f7934d20d', class: "accordion-item" }, h("h2", { key: '18b85b58381cffbabc57d4e489406f1819c8d2ca', class: "accordion-header" }, h("button", { key: '17064a323d5c38bfd2a74772d1c8a721319e55fd', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": "false", "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}` }, h("mass-plate", { key: '5b0c0926f2124133b5e816e809742bb1774b290c', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '8baa4675f83bf04c2b0fbf652272f1ad7d0c6e06', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: '2f0f252a91f6fb4b0797d849f6cfd3f8bedab0b5', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: '3551149dfd58002699550f001289504c45053a37', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '600af895cb72eb95db9863ada9ad857cf61f37ba', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: '0fac2d7e07e6fd2599da5bd5a46114b759269383', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
    }
    static get is() { return "mass-slot"; }
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
            "accordionIndex": {
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
                "attribute": "accordion-index",
                "reflect": false
            },
            "accordionExpanded": {
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
                "attribute": "accordion-expanded",
                "reflect": false
            },
            "massIndex": {
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
                "attribute": "mass-index",
                "reflect": false
            },
            "expanded": {
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
                "attribute": "expanded",
                "reflect": false,
                "defaultValue": "true"
            },
            "massInfo": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{\r\n    time: string,\r\n    info: string,\r\n    duration: string,\r\n    langCode: string,\r\n    needUpdate: boolean,\r\n    lastConfirmRelevance: string,\r\n    updatePeriodInDays: string,\r\n    online: boolean,\r\n    rorate: boolean,\r\n    address: string,\r\n    broadcastUrl: string,\r\n  }",
                    "resolved": "{ time: string; info: string; duration: string; langCode: string; needUpdate: boolean; lastConfirmRelevance: string; updatePeriodInDays: string; online: boolean; rorate: boolean; address: string; broadcastUrl: string; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "actual": {}
        };
    }
}
//# sourceMappingURL=mass.js.map

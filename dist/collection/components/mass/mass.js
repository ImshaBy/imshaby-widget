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
        return (h("div", { key: '8094f67feb223dc90714b3eb45d583e1121be23a' }, h("div", { key: 'c69b06663b3255a33cfc346bc214e2c9c2829ab9', class: "accordion-item" }, h("h2", { key: 'b7d9eed3b2c15b4836d16fc3604fbb7f891abed6', class: "accordion-header" }, h("button", { key: '94f76d80fef0446c3f6820d7895b53d8d8e72677', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": "false", "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}` }, h("mass-plate", { key: 'd459a0c64efc60485d8b9b4d005866d9c638bb09', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '0158f66c07bd392834c8ec935c1f802d199ffe38', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: '6f34520b6cb1cd866b672a83890573087b470e99', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: '82de4a7ae4fa53df779f40c95cce9d761b06d428', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '67a01a358f037a48809a0b057bc4f37821286a79', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: '25703a09dc1529250da4c7bb7be25228e1ad0986', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance }))))));
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

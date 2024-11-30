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
        return h("div", { key: 'e8d5ea282bbe359021d53022ce3f99ecb50277c8' }, h("div", { key: '41574878bd42f224046338678b3197fdd48da3d8', class: "accordion-item" }, h("h2", { key: 'd399753ea6ca2635f63a8969316e027876428d15', class: "accordion-header" }, h("button", { key: 'ca4204589405fddfe3547490d2744f195b083757', class: `accordion-button ${btnExpanded}`, type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#flush-collapse${this.accordionIndex}-${this.massIndex}`, "aria-expanded": "false", "aria-controls": `flush-collapse${this.accordionIndex}-${this.massIndex}` }, h("mass-plate", { key: 'df7b5e6120777d6373dcf1eb913effff23d206e3', actual: this.actual, time: this.massInfo.time, rorate: this.massInfo.rorate, online: this.massInfo.online }))), h("div", { key: '2463cca9f6a4be3f73206af7c68d4e2d8e2ed6a5', id: `flush-collapse${this.accordionIndex}-${this.massIndex}`, class: `accordion-collapse collapse ${accordionExpanded}`, "data-bs-parent": `accordionFlush${this.accordionIndex}` }, h("div", { key: 'ffba225b1a0d1c6b0e514a3a60fd61e38e1e1db4', class: "accordion-body d-flex flex-column gap-2 border-gray" }, h("mass-header", { key: '0d429885d7d2da6052499fc53db7913d1009824c', address: this.massInfo.address, langCode: this.massInfo.langCode }), h("mass-additional", { key: '2a1e933f61b040c4cf5f40bdee3b436e6e1239c2', rorate: this.massInfo.rorate, online: this.massInfo.online, broadcastUrl: this.massInfo.broadcastUrl }), h("mass-footer", { key: '890823e536901c9600b84a9d73171cc3e8118d74', info: this.massInfo.info, lastConfirmRelevance: this.massInfo.lastConfirmRelevance })))));
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

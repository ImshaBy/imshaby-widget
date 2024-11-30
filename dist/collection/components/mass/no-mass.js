import { h } from "@stencil/core";
export class NoMass {
    render() {
        h("div", { class: "container-fluid mt-3" }, h("span", { class: "spanRow" }, "\u041D\u0430 \u0433\u044D\u0442\u044B \u0434\u0437\u0435\u043D\u044C \u0406\u043C\u0448 \u043D\u044F\u043C\u0430."));
    }
    static get is() { return "no-mass"; }
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
}
//# sourceMappingURL=no-mass.js.map

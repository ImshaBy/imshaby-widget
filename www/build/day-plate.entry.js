import { r as registerInstance, h } from './index-39d9f9e8.js';

const daysCss = ".daysNavLink{border-width:1px !important;border-style:solid !important;border-color:#dadada !important;border-radius:0 !important}.daysNavLink:hover{color:white !important}.daysNavLink.disabled{opacity:.3;pointer-events:none}";

const DayPlate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleDayNavButton = (event) => {
            let btn = (event.target);
            if (btn.tagName != 'BUTTON') {
                while (btn.tagName != 'BUTTON' && !btn.classList.contains('daysNavLink')) {
                    btn = btn.parentElement;
                }
            }
            Array.from(btn.parentElement.parentElement.children).forEach(el => {
                el = el.querySelector('.daysNavLink');
                el.classList.remove('active');
                el.ariaSelected = 'false';
                el.setAttribute('tabindex', '-1');
            });
            btn.classList.add('active');
            btn.ariaSelected = 'true';
            btn.removeAttribute('tabindex');
            let tabs = btn.parentElement.parentElement.parentElement.querySelector('#v-pills-tabContent');
            Array.from(tabs.children).forEach(el => {
                el.classList.remove('show', 'active');
            });
            tabs.querySelector(btn.dataset.bsTarget).classList.add('active', 'show');
        };
        this.active = undefined;
        this.disabled = undefined;
        this.k = undefined;
        this.aria = 'false';
        this.day = undefined;
        this.date = undefined;
    }
    render() {
        return (h("button", { key: 'eccbc59e6c9d62d65580074b886b843e7da2738b', class: `btn btn-sm daysNavLink w-100 ${this.active} ${this.disabled}`, id: `v-pills-d${this.k}`, "data-bs-toggle": "pill", "data-bs-target": `#v-pills-d${this.k}-tab`, type: "button", role: "tab", "aria-controls": `v-pills-d${this.k}-tab`, "aria-selected": `${this.aria}`, onClick: this.toggleDayNavButton }, h("span", { key: 'c75db745e64dbefe72e04ea1df768148636334c3', class: "daysSpan" }, this.day, h("br", { key: '5e32923c9dadb5b68f33d89e2d8bec6d1b855c31' }), this.date)));
    }
};
DayPlate.style = daysCss;

export { DayPlate as day_plate };

//# sourceMappingURL=day-plate.entry.js.map
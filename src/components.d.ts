/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DayPlate {
        "active": string;
        "aria": string;
        "date": any;
        "day": any;
        "disabled": string;
        "k": number;
    }
    interface ImshabySchedule {
        "expanded": boolean;
        "parishId": string;
    }
    interface MassAdditional {
        "broadcastUrl": string;
        "online": boolean;
        "rorate": boolean;
    }
    interface MassFooter {
        "info": string;
        "lastConfirmRelevance": string;
    }
    interface MassHeader {
        "address": string;
        "langCode": string;
    }
    interface MassPlate {
        "actual": boolean;
        "online": boolean;
        "rorate": boolean;
        "time": string;
    }
    interface MassSlot {
        "accordionExpanded": string;
        "accordionIndex": number;
        "expanded": boolean;
        "massIndex": number;
        "massInfo": {
    time: string,
    info: string,
    duration: string,
    langCode: string,
    needUpdate: boolean,
    lastConfirmRelevance: string,
    updatePeriodInDays: string,
    online: boolean,
    rorate: boolean,
    address: string,
    broadcastUrl: string,
  };
    }
    interface NoMass {
    }
}
declare global {
    interface HTMLDayPlateElement extends Components.DayPlate, HTMLStencilElement {
    }
    var HTMLDayPlateElement: {
        prototype: HTMLDayPlateElement;
        new (): HTMLDayPlateElement;
    };
    interface HTMLImshabyScheduleElement extends Components.ImshabySchedule, HTMLStencilElement {
    }
    var HTMLImshabyScheduleElement: {
        prototype: HTMLImshabyScheduleElement;
        new (): HTMLImshabyScheduleElement;
    };
    interface HTMLMassAdditionalElement extends Components.MassAdditional, HTMLStencilElement {
    }
    var HTMLMassAdditionalElement: {
        prototype: HTMLMassAdditionalElement;
        new (): HTMLMassAdditionalElement;
    };
    interface HTMLMassFooterElement extends Components.MassFooter, HTMLStencilElement {
    }
    var HTMLMassFooterElement: {
        prototype: HTMLMassFooterElement;
        new (): HTMLMassFooterElement;
    };
    interface HTMLMassHeaderElement extends Components.MassHeader, HTMLStencilElement {
    }
    var HTMLMassHeaderElement: {
        prototype: HTMLMassHeaderElement;
        new (): HTMLMassHeaderElement;
    };
    interface HTMLMassPlateElement extends Components.MassPlate, HTMLStencilElement {
    }
    var HTMLMassPlateElement: {
        prototype: HTMLMassPlateElement;
        new (): HTMLMassPlateElement;
    };
    interface HTMLMassSlotElement extends Components.MassSlot, HTMLStencilElement {
    }
    var HTMLMassSlotElement: {
        prototype: HTMLMassSlotElement;
        new (): HTMLMassSlotElement;
    };
    interface HTMLNoMassElement extends Components.NoMass, HTMLStencilElement {
    }
    var HTMLNoMassElement: {
        prototype: HTMLNoMassElement;
        new (): HTMLNoMassElement;
    };
    interface HTMLElementTagNameMap {
        "day-plate": HTMLDayPlateElement;
        "imshaby-schedule": HTMLImshabyScheduleElement;
        "mass-additional": HTMLMassAdditionalElement;
        "mass-footer": HTMLMassFooterElement;
        "mass-header": HTMLMassHeaderElement;
        "mass-plate": HTMLMassPlateElement;
        "mass-slot": HTMLMassSlotElement;
        "no-mass": HTMLNoMassElement;
    }
}
declare namespace LocalJSX {
    interface DayPlate {
        "active"?: string;
        "aria"?: string;
        "date"?: any;
        "day"?: any;
        "disabled"?: string;
        "k"?: number;
    }
    interface ImshabySchedule {
        "expanded"?: boolean;
        "parishId"?: string;
    }
    interface MassAdditional {
        "broadcastUrl"?: string;
        "online"?: boolean;
        "rorate"?: boolean;
    }
    interface MassFooter {
        "info"?: string;
        "lastConfirmRelevance"?: string;
    }
    interface MassHeader {
        "address"?: string;
        "langCode"?: string;
    }
    interface MassPlate {
        "actual"?: boolean;
        "online"?: boolean;
        "rorate"?: boolean;
        "time"?: string;
    }
    interface MassSlot {
        "accordionExpanded"?: string;
        "accordionIndex"?: number;
        "expanded"?: boolean;
        "massIndex"?: number;
        "massInfo"?: {
    time: string,
    info: string,
    duration: string,
    langCode: string,
    needUpdate: boolean,
    lastConfirmRelevance: string,
    updatePeriodInDays: string,
    online: boolean,
    rorate: boolean,
    address: string,
    broadcastUrl: string,
  };
    }
    interface NoMass {
    }
    interface IntrinsicElements {
        "day-plate": DayPlate;
        "imshaby-schedule": ImshabySchedule;
        "mass-additional": MassAdditional;
        "mass-footer": MassFooter;
        "mass-header": MassHeader;
        "mass-plate": MassPlate;
        "mass-slot": MassSlot;
        "no-mass": NoMass;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "day-plate": LocalJSX.DayPlate & JSXBase.HTMLAttributes<HTMLDayPlateElement>;
            "imshaby-schedule": LocalJSX.ImshabySchedule & JSXBase.HTMLAttributes<HTMLImshabyScheduleElement>;
            "mass-additional": LocalJSX.MassAdditional & JSXBase.HTMLAttributes<HTMLMassAdditionalElement>;
            "mass-footer": LocalJSX.MassFooter & JSXBase.HTMLAttributes<HTMLMassFooterElement>;
            "mass-header": LocalJSX.MassHeader & JSXBase.HTMLAttributes<HTMLMassHeaderElement>;
            "mass-plate": LocalJSX.MassPlate & JSXBase.HTMLAttributes<HTMLMassPlateElement>;
            "mass-slot": LocalJSX.MassSlot & JSXBase.HTMLAttributes<HTMLMassSlotElement>;
            "no-mass": LocalJSX.NoMass & JSXBase.HTMLAttributes<HTMLNoMassElement>;
        }
    }
}

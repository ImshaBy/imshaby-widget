import type { Components, JSX } from "../types/components";

interface ImshabySchedule extends Components.ImshabySchedule, HTMLElement {}
export const ImshabySchedule: {
    prototype: ImshabySchedule;
    new (): ImshabySchedule;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

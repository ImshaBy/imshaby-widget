import type { Components, JSX } from "../types/components";

interface MassPlate extends Components.MassPlate, HTMLElement {}
export const MassPlate: {
    prototype: MassPlate;
    new (): MassPlate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

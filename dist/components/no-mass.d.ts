import type { Components, JSX } from "../types/components";

interface NoMass extends Components.NoMass, HTMLElement {}
export const NoMass: {
    prototype: NoMass;
    new (): NoMass;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

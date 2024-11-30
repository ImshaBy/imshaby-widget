import type { Components, JSX } from "../types/components";

interface MassAdditional extends Components.MassAdditional, HTMLElement {}
export const MassAdditional: {
    prototype: MassAdditional;
    new (): MassAdditional;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

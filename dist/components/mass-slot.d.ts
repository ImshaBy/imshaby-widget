import type { Components, JSX } from "../types/components";

interface MassSlot extends Components.MassSlot, HTMLElement {}
export const MassSlot: {
    prototype: MassSlot;
    new (): MassSlot;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

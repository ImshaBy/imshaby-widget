import type { Components, JSX } from "../types/components";

interface MassFooter extends Components.MassFooter, HTMLElement {}
export const MassFooter: {
    prototype: MassFooter;
    new (): MassFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

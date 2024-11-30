import type { Components, JSX } from "../types/components";

interface MassHeader extends Components.MassHeader, HTMLElement {}
export const MassHeader: {
    prototype: MassHeader;
    new (): MassHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

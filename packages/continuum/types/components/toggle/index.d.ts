import type { CSSResult, TemplateResult } from 'lit';
import { WC } from "../../WC";
export default class Toggle extends WC {
    static styles: CSSResult[];
    /**
     * Value of the toggle
     */
    toggled: boolean;
    /**
     * Disables the toggle
     */
    disabled: boolean;
    /**
     * Toggles the toggle switch
     */
    toggle(): void;
    render(): TemplateResult;
}

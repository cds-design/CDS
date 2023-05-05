import type { CSSResult, TemplateResult } from 'lit';
import { WC } from "../../WC";
export default class Button extends WC {
    /**
     * Disables the button
     */
    disabled: boolean;
    static styles: CSSResult[];
    render(): TemplateResult;
}

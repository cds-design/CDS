import type { CSSResult, TemplateResult } from 'lit';
import { WC } from "../../WC";
export default class Slider extends WC {
    static styles: CSSResult[];
    /**
     * The value of the slider
     * The value is a number between 0 and 100
     */
    value: number;
    /**
     * Disables the slider
     */
    disabled: boolean;
    private _handleInput;
    render(): TemplateResult;
}

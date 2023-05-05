import type { CSSResult, TemplateResult } from 'lit';
import { WC } from "../../WC";
export default class Input extends WC {
    static styles: CSSResult[];
    /**
     * The label of the input field
     * If no label is provided, the placeholder will be used as label
     */
    label: string;
    /**
     * The type of the input field
     */
    type: string;
    /**
     * The placeholder of the input field
     */
    placeholder: string;
    /**
     * The value of the input field
     */
    value: string;
    /**
     * Disables the input field
     */
    disabled: boolean;
    private _inputHandler;
    render(): TemplateResult;
}

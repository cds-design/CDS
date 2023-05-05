import type { CSSResult, TemplateResult } from 'lit';
import { WC } from "../../WC";
export default class Progress extends WC {
    static styles: CSSResult[];
    /**
     * The value of the progress bar
     */
    value: number;
    /**
     * The maximum value of the progress bar
     */
    max: number;
    render(): TemplateResult;
}

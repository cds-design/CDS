import type { CSSResult, TemplateResult } from 'lit';
import { WC } from "../../WC";
export default class Avatar extends WC {
    static styles: CSSResult[];
    /**
     * Enables indicator in the icon
     */
    active: boolean;
    /**
     * Background of the indicator
     * supports any valid css background value
     */
    indicatorBg: string;
    /**
     * URL of the Avatar image
     *
     * @required
     */
    src: string;
    render(): TemplateResult;
}

import type { TemplateResult, CSSResult } from 'lit';
import { WC } from "../../WC";
declare const Icons: {
    readonly cross: TemplateResult;
    readonly error: TemplateResult;
    readonly info: TemplateResult;
    readonly warn: TemplateResult;
};
/**
 * A component for displaying alerts
 */
export default class Alert extends WC {
    static styles: CSSResult[];
    /**
     * The type of alert
     * changes the color and icon of the alert
     */
    type: Exclude<keyof typeof Icons, "cross">;
    /**
     * Makes the alert closable
     */
    closable: boolean;
    private _closed;
    /**
     * Closes the alert
     */
    close(): void;
    render(): TemplateResult | null;
}
export {};

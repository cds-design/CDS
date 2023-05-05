import type { CSSResult, TemplateResult } from 'lit';
import { WC } from "../../WC";
export default class Check extends WC {
    static styles: CSSResult[];
    checked: boolean;
    disabled: boolean;
    check(): void;
    uncheck(): void;
    toggle(): void;
    render(): TemplateResult;
}

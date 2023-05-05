import type { LitElement } from "lit";
                
import type HTMLCtAlert from "./components/alert";
import type HTMLCtAvatar from "./components/avatar";
import type HTMLCtBadge from "./components/badge";
import type HTMLCtButton from "./components/button";
import type HTMLCtCheck from "./components/check";
import type HTMLCtInput from "./components/input";
import type HTMLCtProgress from "./components/progress";
import type HTMLCtSlider from "./components/slider";
import type HTMLCtToggle from "./components/toggle";

type ComponentName = "alert" | "avatar" | "badge" | "button" | "check" | "input" | "progress" | "slider" | "toggle";
/**
 * Load web components as custom elements.
 * Only loads components that have not been loaded before.
 */
declare function load(...components: ComponentName[]): void;
export { load as default, load };


type CDS2JSX<T> = React.DetailedHTMLProps<ExtractProps<T> | React.HTMLAttributes<T>, T>

type ExtractProps<T> = Pick<T, Exclude<keyof T, keyof LitElement>>

declare global {
    interface HTMLElementTagNameMap {
        "ct-alert": HTMLCtAlert
        "ct-avatar": HTMLCtAvatar
        "ct-badge": HTMLCtBadge
        "ct-button": HTMLCtButton
        "ct-check": HTMLCtCheck
        "ct-input": HTMLCtInput
        "ct-progress": HTMLCtProgress
        "ct-slider": HTMLCtSlider
        "ct-toggle": HTMLCtToggle
    }
    namespace JSX {
        interface IntrinsicElements {
            "ct-alert": CDS2JSX<HTMLCtAlert>
            "ct-avatar": CDS2JSX<HTMLCtAvatar>
            "ct-badge": CDS2JSX<HTMLCtBadge>
            "ct-button": CDS2JSX<HTMLCtButton>
            "ct-check": CDS2JSX<HTMLCtCheck>
            "ct-input": CDS2JSX<HTMLCtInput>
            "ct-progress": CDS2JSX<HTMLCtProgress>
            "ct-slider": CDS2JSX<HTMLCtSlider>
            "ct-toggle": CDS2JSX<HTMLCtToggle>
        }
    }
}
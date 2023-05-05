import { LitElement, PropertyValueMap } from "lit";
import { property } from "lit/decorators/property.js";


export class WC extends LitElement {

    // exposes a className property which will be reflected to the element's classList internally
    @property({ type: String, reflect: true })
    className = "";

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        if (_changedProperties.has("className")) {
            const className = _changedProperties.get("className");
            if (className) {
                this.classList.add(className as string);
            }
        }
    }

}

import type { DOMAttributes } from "react";
import type Alert from "@components/alert.svelte";
import type Button from "@components/button.svelte";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["ct-alert"]: CustomElement<Alert>;
      ["ct-button"]: CustomElement<Button>;
    }
  }
}

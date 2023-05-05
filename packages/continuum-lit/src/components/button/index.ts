import { wc } from "../../WebC";

class Button extends wc(HTMLElement, {
  props: {
    observedAttributes: [
      {
        name: "click",
      },
    ],
  },
}) {
  attrs = {
    click: 0,
  };

  css() {
    return `button {
                    background: red;
                    color: white;
                }`;
  }

  html() {
    return `
        <button>Click Me ${this.attrs.click}</button>
        `;
  }

  onBeforeMount() {
    this.when("click")
      .on("button")
      .do(() => {
        console.log("Clicked");
        this.attrs.click++;
        this.setAttribute("click", this.attrs.click.toString());
      });
  }

  onMount() {
    this.setAttribute("click", "0");
  }
}

export default Button;

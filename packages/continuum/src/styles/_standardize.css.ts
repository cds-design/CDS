import { css } from "lit";

export default css`
  :where(input, progress) {
    outline: none;
    border: none;
    appearance: none;
    margin: 0;
    font-size: var(--font-size);
  }

  :host {
    display: inline-block;
    color: var(--color);
    font-size: var(--font-size);
    font-family: var(--font-family);
    margin: var(--margin);
    overflow: hidden;
    border-radius: var(--border-radius);
    position: relative;
    box-sizing: border-box;
  }

  :where(.texture) {
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  :where(.texture)::before {
    content: "";
    transform: rotateY(180deg);
    position: absolute;
    display: block;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    /* border-radius: var(--border-radius); */
    mask: var(--grain-img),
      radial-gradient(circle at 0 0, transparent 25%, #000 80%) 0 0/100% 100%;
    background: no-repeat 0 0/100% 100%
      radial-gradient(
        circle at 0 0,
        transparent 25%,
        rgba(var(--accent-rgb), var(--medium-opaque)) 50%,
        rgba(var(--accent-rgb), var(--high-opaque)) 100%
      );
  }

  :host > * {
    color: inherit;
    font-size: inherit;
    user-select: none;
    -webkit-user-drag: none;
  }

  :is(.disabled, [disabled], [aria-disabled]) {
    --disabled-opacity: 0.75;
    opacity: var(--disabled-opacity);
    /* pointer-events: none; */
    cursor: not-allowed;
    position: relative;
  }

  :is(input, textarea, select, button) {
    font-family: inherit;
  }
`;

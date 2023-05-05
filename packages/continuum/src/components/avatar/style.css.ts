import { css } from "lit";

export default css`
  :host {
    position: relative;
    border-radius: var(--circle-radius);
    height: 4em;
    aspect-ratio: var(--square-aspect);
    overflow: visible;
  }

  img {
    width: 100%;
    aspect-ratio: var(--square-aspect);
    object-fit: cover;
    border-radius: var(--circle-radius);
    image-rendering: pixelated;
    --padding: 0;
  }

  .active {
    clip-path: url("#circle");
  }

  .indicator {
    position: absolute;
    inset: 0;
    pointer-events: none;
    --sqrt2: 1.414;
    transform: translate(calc(100% / var(--sqrt2)), calc(100% / var(--sqrt2)));
  }

  .indicator::after {
    content: "";
    display: inline-block;
    position: absolute;
    background: var(--bg, limegreen);
    width: 15%;
    aspect-ratio: var(--square-aspect);
    border-radius: var(--circle-radius);
    transform: translate(calc(50% - 15%), calc(50% - 15%));
  }
`;

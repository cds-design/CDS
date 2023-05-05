import { css } from "lit";

export default css`
  :host {
    font-size: calc(var(--font-size) * (3 / 4));
  }

  div {
    font-size: calc(var(--font-size) * 0.75);
    padding-block: calc(var(--padding) / 2);
    padding-inline: calc(var(--padding));
    border: var(--border);
    backdrop-filter: var(--blur);
    display: flex;
    place-items: center;
    gap: calc(var(--gap) * 0.75);
    border-radius: var(--border-radius);
  }

  span {
    white-space: nowrap;
  }

  .close-icon {
    display: grid;
    place-items: center;
    width: 0.5em;
    cursor: pointer;
  }
`;

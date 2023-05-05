import { css } from "lit";

export default css`
  :host {
    margin-block-start: 0.75em;
  }

  div {
    position: relative;
    margin-top: 1.2ch;
  }

  div::before {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: var(--blur);
    border-radius: var(--border-radius);
  }

  input {
    padding: var(--landscape-padding);
    font-family: inherit;
    position: relative;
    background-color: transparent;
    color: inherit;
    min-width: var(--min-chars);
    border-radius: var(--border-radius);
    border: var(--border);
    transition: border var(--duration) var(--easing-fn);
  }

  input:focus {
    border-color: rgba(var(--accent-rgb), var(--medium-opaque));
  }

  ::placeholder {
    opacity: 0;
  }

  label {
    text-transform: capitalize;
    color: rgb(159, 159, 159);
    position: absolute;
    top: 0;
    display: flex;
    height: 100%;
    align-items: center;
    margin-inline-start: 1em;
    z-index: 1;
    pointer-events: none;
    white-space: nowrap;
    transition: all var(--duration) var(--easing-fn);
    --landscape-padding: calc(var(--padding) / 2) calc(var(--padding));
  }

  div:focus-within label,
  div:has(input:not(:placeholder-shown)) label {
    transform: translateY(-50%);
    padding: var(--landscape-padding);
    font-size: 0.75em;
    height: unset;
    color: hsl(0, 0%, 85%);
    backdrop-filter: var(--blur);
    border-radius: var(--border-radius);
    --opacity: var(--opaque);
  }

  label::before {
    opacity: var(--opacity, var(--transparent));
  }
`;

import { css } from "lit";

export default css`
  label {
    display: flex;
    align-items: center;
    gap: var(--gap);
    cursor: pointer;
  }

  input {
    height: 1em;
    backdrop-filter: var(--blur);
    border: var(--border);
    border-radius: var(--circle-radius);
    aspect-ratio: var(--rect-aspect);
    cursor: pointer;
  }

  .texture::before {
    transform: rotate(0deg);
    opacity: 0;
    transition: all var(--duration) var(--easing-fn);
  }

  .input:checked::before {
    opacity: var(--opaque);
  }

  input::after {
    content: "";
    display: block;
    aspect-ratio: var(--square-aspect);
    height: calc(100% - 0.2em);
    margin: 0.1em;
    background-color: rgba(var(--accent-rgb), var(--medium-opaque));
    border-radius: var(--circle-radius);
    transition: margin var(--duration) var(--easing-fn);
  }

  input:checked {
    border: var(--border);
    border-color: var(--border-color-active);
  }

  input:checked::before {
    opacity: var(--opaque);
  }

  input:checked::after {
    background-color: var(--border-color-active);
    margin-inline-start: 1.1em;
    animation: stretch var(--duration) var(--easing-fn);
  }

  span {
    color: inherit;
  }

  @keyframes stretch {
    from {
      aspect-ratio: 1;
    }
    25% {
      aspect-ratio: 3/2;
    }
    to {
      aspect-ratio: 1;
    }
  }
`;

import { css } from "lit";

export default css`
  label {
    display: flex;
    align-items: center;
    gap: var(--gap);
    position: relative;
  }

  div {
    position: relative;
    cursor: pointer;
    backdrop-filter: var(--blur);
    aspect-ratio: 1;
    height: 1em;
    border-radius: calc(var(--border-radius) / 2);
  }

  .texture {
    overflow: visible;
  }

  .texture::before {
    border-radius: inherit;
  }

  input {
    position: sticky;
    inset: 0;
    cursor: pointer;
  }

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  #check {
    overflow: visible;
  }

  path,
  polyline {
    fill: none;
    stroke: var(--accent);
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  path {
    stroke-dasharray: 913.25;
    stroke: var(--border-color);
    /* stroke-dashoffset: 913.25; */
    stroke-width: 40px;
  }

  input:checked ~ div svg path {
    animation: round calc(2 * var(--duration)) var(--easing-fn) forwards;
  }

  div::before {
    opacity: 0;
    will-change: opacity;
  }

  input:checked ~ div::before {
    animation: bg var(--duration) var(--easing-fn) forwards;
  }

  polyline {
    stroke-dasharray: 383;
    stroke-dashoffset: 383;
    stroke-width: 40px;
    filter: drop-shadow(2px 4px 6px black);
  }

  input:checked ~ div svg polyline {
    animation: check var(--duration) var(--easing-fn) forwards var(--duration);
  }

  @keyframes check {
    0% {
      stroke-dashoffset: 383;
    }
    100% {
      stroke-dashoffset: 816; /* 383*2 + 50 */
    }
  }

  @keyframes round {
    0% {
      stroke-dashoffset: 913.25;
    }
    50% {
      stroke: var(--accent);
    }
    100% {
      stroke: transparent;
      stroke-dashoffset: 0;
    }
  }

  @keyframes bg {
    to {
      opacity: 1;
    }
  }
`;

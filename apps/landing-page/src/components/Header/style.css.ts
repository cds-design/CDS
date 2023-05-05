import { style, keyframes } from "@vanilla-extract/css";

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const header = style({
  alignContent: "center",
  animation: `${fadeIn} 0.4s ease-in-out`,
});

const h1 = style({
  fontSize: "5em",
  lineHeight: 1.1,
  fontFamily: `"Dela Gothic One", sans-serif`,

  position: "fixed",
  top: "50%",
  left: "50%",
  width: "max-content",
  transform: "translate(-50%,-50%)",
  margin: "0",
});

const ctButton = style({
  fontSize: "1.5em !important",
  vars: {
    "--ct-bg-rgb": "var(--custom-accent-rgb)",
  },
});

const span = style({
  display: "inline-block",
});

const card = style({
  position: "fixed",
  top: "50%",
  right: "50%",
  width: "max-content",
  transform: "translate(50%,-50%)",
  marginTop: "100px",
  zIndex: 1000,
});

export { header, h1, ctButton, span, card };

import { style } from "@vanilla-extract/css";

const section = style({
  display: "flex",
  zIndex: -10,
  marginInline: "2em",
});

const h2 = style({
  fontSize: "4.5em",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  lineHeight: 1.1,
  fontFamily: `"Dela Gothic One", sans-serif`,
});

const span = style({
  color: "rgba(255, 255, 255, 0.75)",
});

const gradient = style({
  fontSize: "2em",
  lineHeight: 1.4,
  WebkitBackgroundClip: "text !important",
  backgroundClip: "text !important",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  background:
    "linear-gradient(90deg, rgba(42, 78, 255, 0.789) 0%, rgb(95, 228, 255) 60%)",
});

export { section, h2, span, gradient };

import { keyframes, style } from "@vanilla-extract/css";

const { random } = Math;

const generateCord = (range = 10) =>
  (random() * range * (random() > 0.5 ? 1 : -1)).toFixed(2);

const float = keyframes({
  "25%": {
    transform: `translate3d(${generateCord()}px, ${generateCord()}px, ${generateCord()}px) rotate3d(${generateCord(
      1
    )}, ${generateCord(1)}, ${generateCord(1)}, 2.5deg)`,
  },
  "50%": {
    transform: `translate3d(${generateCord()}px, ${generateCord()}px, ${generateCord()}px) rotate3d(${generateCord(
      1
    )}, ${generateCord(1)}, ${generateCord(1)}, 2.5deg)`,
  },
  "75%": {
    transform: `translate3d(${generateCord()}px, ${generateCord()}px, ${generateCord()}px) rotate3d(${generateCord(
      1
    )}, ${generateCord(1)}, ${generateCord(1)}, 2.5deg)`,
  },
  "100%": {
    transform: `translate3d(${generateCord()}px, ${generateCord()}px, ${generateCord()}px) rotate3d(${generateCord(
      1
    )}, ${generateCord(1)}, ${generateCord(1)}, 2.5deg)`,
  },
});

const zoomIn = keyframes({
  from: {
    scale: 1.05,
  },
});

const zoomOut = keyframes({
  to: {
    scale: 0.95,
  },
});

const section = style({
  display: "grid",
  placeItems: "center",
  position: "relative",
  marginBlock: "25vh",

});

const div = style({
  display: "grid",
  placeItems: "center",
  justifyContent: "center",
  width: "90vmin",
  height: "90vmin",
  minWidth: "fit-content",
  aspectRatio: "1",
  fontSize: "5em",
  borderRadius: "50vmax",
  position: "relative",
  cursor: "ew-resize",
});

const component = style({
  zIndex: 100,
  transformOrigin: "center",
  animation: `${float} 10s linear infinite alternate 0.4s,
                ${zoomIn} 0.4s ease 1 alternate`,
  cursor: "default",
  vars: {
    "--min-chars": "15ch",
  },
});

const svg = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "90vmin",
  zIndex: 10,
  pointerEvents: "none",
  fontSize: "0.2em",
});

const path = style({
  fill: "none",
});

const text = style({
  fill: "currentColor",
  fontFamily: "inherit",
  pointerEvents: "auto",
  cursor: "pointer",
});

const active_text = style({
  transition: "color,textShadow 0.4s ease",
  textShadow: "0 0 0.5em cyan",
  color: "cyan",
});

export { section, div, component, svg, path, text, active_text };

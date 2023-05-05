import { style } from "@vanilla-extract/css";

const footer = style({
  // cursor: "none",
  position: "relative",
  overflow: "hidden",
  gridTemplateRows: " 1fr auto",
  paddingBlock: "2em",
});

const cursor = style({
  position: "absolute",
  zIndex: 10,
  pointerEvents: "none",
  width: "50vmin",
  aspectRatio: "1",
  backgroundImage:
    "radial-gradient(rgba(0, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 75%)",
  background: "rgba(255, 226, 0, 0.1)",
  mixBlendMode: "color-burn",
  borderRadius: "50vmax",
  transform: "translate(-50%, -50%)",
  backdropFilter: "blur(5px) brightness(3)",
  transition: "top, left 0.4s ease",
  selectors: {
    [`${footer}:not(:hover) &`]: {
      top: "-200% !important",
      left: "-200% !important",
    },
    [`${footer}:hover &`]: {
      transition: "none",
    },
  },
});

const masonry = style({
  display: "grid",
  zIndex: 100,
  gap: "2em",
  fontFamily: `"Dela Gothic One", sans-serif`,
  gridTemplateAreas: `
                    "docs road  road ."
                    "docs tweet .    blog"
                    "docs git   git  blog"
                    "docs comp  comp comp"
                    `,
  transform: "scale(1.2)",
});

const link = style({
  lineHeight: 1,
  color: "#fff",
  opacity: 0.75,
  textDecoration: "none",
  transition: "color,opacity 0.4s ease",
  ":hover": {
    color: "var(--drp-color, #fff)",
    opacity: 1,
  },
});

const company = style({
  // fontFamily: `"Dela Gothic One", sans-serif`,
});

export { footer, cursor, masonry, link, company };

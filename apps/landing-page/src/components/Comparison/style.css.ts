import { type ComplexStyleRule, style } from "@vanilla-extract/css";

const section = style({
  position: "relative",
  marginInline: 100,
});

const img = style({
  width: "100%",
  height: "100%",
  maxHeight: "75vh",
  paddingBlock: 100,
  objectFit: "contain",
});

const before_img = style({
  position: "absolute",
  inset: 0,
});

const indications: ComplexStyleRule = {
  position: "absolute",
  writingMode: "vertical-rl",
  height: "100%",
  maxHeight: "75vh",
  top: 0,
  fontFamily: `"Dela Gothic One", sans-serif`,
  fontSize: "5em",
};

const before = style({
  ...indications,
  transform: "rotate(0.5turn) translateY(-50%) translateX(100%)",
  left: 0,
});

const after = style({
  ...indications,
  right: 0,
  transform: "translateY(50%) translateX(-100%)",
  opacity: 0,
});

export { section, img, before_img, before, after };

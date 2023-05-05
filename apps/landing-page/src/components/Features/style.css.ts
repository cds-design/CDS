import { style } from "@vanilla-extract/css";

const section = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "space-evenly",
});

const feature = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: `"Dela Gothic One", sans-serif`,
  borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
  fontSize: "3em",
  borderRadius: "1em 0 0 1em",
  transition: "border,backdrop-filter 0.4s ease",
  ":hover": {
    // backgroundImage: "linear-gradient(45deg, rgba(95, 228, 255, 0) 70%, rgb(42, 78, 255) 90%)",
    backdropFilter: "blur(5px) brightness(3)",
  },
});

const title = style({
  transition: "all 0.4s ease",
  selectors: {
    [`${feature}:hover > &`]: {
      fontSize: "1em",
      marginBlockEnd: "0.5em",
      WebkitBackgroundClip: "text !important",
      backgroundClip: "text !important",
      WebkitTextFillColor: "transparent",
      color: "transparent",
      background:
        "linear-gradient(90deg, rgba(42, 78, 255, 0.789) 0%, rgb(95, 228, 255) 60%)",
    },
  },
});

const description = style({
  fontSize: 0,
  opacity: 0,
  fontFamily: `"Space Mono", monospace`,
  maxWidth: "75ch",
  margin: "0 auto",
  transition: "all 0.4s ease",
  selectors: {
    [`${feature}:hover > &`]: {
      fontSize: "0.5em",
      opacity: 1,
      marginBlockEnd: "3em",
    },
  },
});

export { section, feature, title, description };

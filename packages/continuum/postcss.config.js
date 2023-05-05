import autoprefixer from "autoprefixer";
import csso from "postcss-csso";

console.log("postcss.config.js");

/** @type {import('postcss-load-config').Config} */
export default {
  syntax: "postcss-lit",
  plugins: [autoprefixer(), csso()],
};

import minifyLiterals from "rollup-plugin-minify-html-literals-v3";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import postCSS from "./scripts/postCSS";
import typeModifier from "./scripts/typeModifier";

export default defineConfig({
  build: {
    minify: "terser",
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "cjs"],
      fileName: "continuum",
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  plugins: [
    postCSS(),
    minifyLiterals(),
    dts({
      staticImport: true,
      exclude: "src/**/*.css.ts",
      outputDir: "types",
      afterBuild: typeModifier,
    }),
  ],
});

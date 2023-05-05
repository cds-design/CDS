import { defineConfig } from "vite";
import { version } from "./package.json";

export default defineConfig({
  build: {
    minify: "terser",
    lib: {
      entry: "./src/main.ts",
      name: "Continuum",
      formats: ["es", "cjs"],
      fileName: "continuum",
    },
    rollupOptions: {
      external: /^lit/,
      output: {
        banner: `/*!
 * Continuum v${version}
 * (c) ${new Date().getFullYear()} Verve. All rights reserved.
 * @license MIT
 * We are hiring! https://github.com/ve-r-ve
 */`,
      },
    },
  },
});

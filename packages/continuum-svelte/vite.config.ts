import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: "terser",
    lib: {
      entry: ["src/main.ts"],
      formats: ["es", "cjs"],
    },
  },
  plugins: [ViteAliases(), svelte()],
});

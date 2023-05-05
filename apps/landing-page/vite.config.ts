import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import webfontDownload from "vite-plugin-webfont-dl";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.glb"],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ]
    }
  },
  plugins: [
    vanillaExtractPlugin(),
    react(),
    webfontDownload()],
});

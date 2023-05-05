import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

export default {
  compilerOptions: {
    customElement: true,
  },
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    {
      markup: ({ content }) => {
        // content = content.replace(/^\s*<script\s*/, '<script lang="ts" ') // add lang="ts" to script tags
        return {
          code: `<svelte:options tag={null} />\n${content}`, // add svelte:options tag
        };
      },
    },
    sveltePreprocess({
      postcss: true,
    }),
  ],
};

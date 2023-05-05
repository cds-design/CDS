import type { Plugin } from "vite";

import postCSS from "postcss";
// @ts-ignore
import loadConfig from "postcss-load-config";

export default function postCSSPlugin(): Plugin {
  return {
    enforce: "post",
    name: "postcss",
    async transform(code) {
      if (/\ css`([\s\S]*?\$\{[\s\S]*?)`/g.test(code)) return code; // Don't process if there are template strings

      if (/\ css`([\s\S]*?)`/g.test(code)) {
        const { plugins, options } = await loadConfig();
        const { css } = await postCSS(plugins).process(code, options);
        return code.replace(/\ css`([\s\S]*?)`/g, ` css\`${css}\``);
      }

      return code;

    },
  };
}

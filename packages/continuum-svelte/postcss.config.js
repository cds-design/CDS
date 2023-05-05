import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import compressVars from "postcss-variable-compress";
import csso from "postcss-csso";

export default {
  plugins: [
    postcssImport({
      path: ["src/styles"],
    }),
    autoprefixer(),
    csso(),
    compressVars([
      (name) => {
        if (name.startsWith("--ct-") || name.endsWith("--skip")) {
          return true;
        }
      },
    ]),
  ],
};

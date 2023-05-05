import { readdir, readFile, writeFile } from "node:fs/promises";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default async function typeModifier() {
  const folders = (
    await readdir("types/components", { withFileTypes: true })
  ).map((dirent) => dirent.name);

  let indexTS = await readFile("types/index.d.ts", "utf-8");
  indexTS = indexTS.replace(
    "type ComponentName = string;",
    `type ComponentName = ${folders
      .map((folder) => `"${folder}"`)
      .join(" | ")};`
  );

  const componentTypesImports = folders
    .map(
      (folder) =>
        `import type HTMLCt${capitalizeFirstLetter(
          folder
        )} from "./components/${folder}";`
    )
    .join("\n");

  const HTMLnamespace = folders
    .map((folder) => `"ct-${folder}": HTMLCt${capitalizeFirstLetter(folder)}`)
    .join("\n        ");

  const JSXnamespace = folders
    .map(
      (folder) =>
        `"ct-${folder}": CDS2JSX<HTMLCt${capitalizeFirstLetter(folder)}>`
    )
    .join("\n            ");

  indexTS = `import type { LitElement } from "lit";
                
${componentTypesImports}

${indexTS}

type CDS2JSX<T> = React.DetailedHTMLProps<ExtractProps<T> | React.HTMLAttributes<T>, T>

type ExtractProps<T> = Pick<T, Exclude<keyof T, keyof LitElement>>

declare global {
    interface HTMLElementTagNameMap {
        ${HTMLnamespace}
    }
    namespace JSX {
        interface IntrinsicElements {
            ${JSXnamespace}
        }
    }
}`;

  await writeFile("types/index.d.ts", indexTS);
}

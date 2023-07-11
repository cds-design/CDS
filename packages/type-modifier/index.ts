import { readdir, readFile, writeFile } from "node:fs/promises";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toRelativePath(path: string, baseFile: string) {
  const basePath = baseFile.split("/").slice(0, -1).join("/");
  return path.replace(basePath, ".");
}

type Config = {
  componentsDir: string;
  entry: string;
  tagNamePrefix: string;
};

async function typeModifier(config: Config) {
  const { componentsDir, entry, tagNamePrefix } = config;

  const folders = (await readdir(componentsDir, { withFileTypes: true })).map(
    (dirent) => dirent.name,
  );

  let indexTS = await readFile(entry, "utf-8");
  indexTS = indexTS.replace(
    "type ComponentName = string;",
    `export type ComponentName = ${folders
      .map((folder) => `"${folder}"`)
      .join(" | ")};`,
  );

  const componentTypesImports = folders
    .map(
      (folder) =>
        `import type HTML${capitalizeFirstLetter(
          tagNamePrefix,
        )}${capitalizeFirstLetter(folder)} from "${toRelativePath(
          `${componentsDir}/${folder}`,
          entry,
        )}";`,
    )
    .join("\n");

  const HTMLnamespace = folders
    .map(
      (folder) =>
        `"${tagNamePrefix}-${folder}": HTML${capitalizeFirstLetter(
          tagNamePrefix,
        )}${capitalizeFirstLetter(folder)}`,
    )
    .join("\n        ");

  const JSXnamespace = folders
    .map(
      (folder) =>
        `"${tagNamePrefix}-${folder}": CDS2JSX<HTML${capitalizeFirstLetter(
          tagNamePrefix,
        )}${capitalizeFirstLetter(folder)}>`,
    )
    .join("\n            ");

  indexTS = `
${componentTypesImports}

${indexTS}

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

  await writeFile(entry, indexTS);

  console.log("✅", entry, "modified");
}

export default function typeModifierBuilder(config: Config) {
  return () => {
    return typeModifier(config);
  };
}

import type { PathLike } from "node:fs";
import ComponentDocs from "./lib/comp.js";
import CSSVars from "./lib/vars.js";

import { argv } from "node:process";

const generators = {
  components: ComponentDocs,
  variables: CSSVars,
};

const generator = generators[argv[2]];

if (!generator) {
  console.error("Invalid generator");
  console.error("Valid generators: " + Object.keys(generators).join(", "));
  process.exit(1);
}

const out: PathLike = argv[3];

if (!out) {
  console.error("No output file/dir specified");
  process.exit(1);
}

generator(out);

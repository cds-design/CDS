type MarkDownLike = string;

class MD {
  markdown: string;

  constructor(base: MarkDownLike = "") {
    this.markdown = base;
  }

  addNewLine() {
    this.markdown += "\n";
    return this;
  }

  private _add(content: string) {
    this.addNewLine();
    this.markdown += content;
  }

  private _wrap(content: string, wrapper: string) {
    return wrapper + content + wrapper;
  }

  private _wrapTag(content: string, tag: string) {
    return `<${tag}>${content}</${tag}>`;
  }

  addWithoutNewLine(content: string) {
    this.markdown += this._wrap(content, " ");
    return this;
  }

  addText(content: string) {
    this._add(content);
    return this;
  }

  addHeading(content: string, level: number) {
    this._add("#".repeat(level) + " " + content);
    this.addNewLine();
    return this;
  }

  addH1(content: string) {
    this.addHeading(content, 1);
    return this;
  }

  addH2(content: string) {
    this.addHeading(content, 2);
    return this;
  }

  addH3(content: string) {
    this.addHeading(content, 3);
    return this;
  }

  addH4(content: string) {
    this.addHeading(content, 4);
    return this;
  }

  addBold(content: string) {
    if (content.includes("_")) {
      this._add(this._wrap(content, "**"));
    } else if (content.includes("*")) {
      this._add(this._wrap(content, "__"));
    } else {
      this._add(this._wrapTag(content, "bold"));
    }
    return this;
  }

  addItalic(content: string) {
    if (content.includes("_")) {
      this._add(this._wrap(content, "*"));
    } else if (content.includes("*")) {
      this._add(this._wrap(content, "_"));
    } else {
      this._add(this._wrapTag(content, "italics"));
    }
    return this;
  }

  addListItem(content: string) {
    if (content.includes("-")) {
      this._add("  * " + content);
    } else {
      this._add("  - " + content);
    }
    return this;
  }

  addList(content: string[]) {
    for (let i = 0; i < content.length; i++) {
      this.addListItem(content[i]);
    }
    return this;
  }

  _addBackSlash(content: string) {
    return content.replace(/[\\|]/g, "\\$&").replace(/\u0000/g, "\\0");
  }

  addCode(content: string) {
    this._add(this._addBackSlash(this._wrap(this._addBackSlash(content), "`")));
    return this;
  }

  addCodeBlock(content: string, language: string = "") {
    this._add(
      this._addBackSlash(
        this._wrap(language + "\n" + this._addBackSlash(content) + "\n", "```"),
      ),
    );
    return this;
  }

  addBlockQuote(content: string) {
    this._add("> " + content);
    return this;
  }

  addLink(content: string, link: string) {
    this.addWithoutNewLine("[" + content + "](" + link + ")");
    return this;
  }

  addImage(content: string, link: string) {
    this.addWithoutNewLine("![" + content + "](" + link + ")");
    return this;
  }

  addTable(content: string[][] | MDTable) {
    if (content instanceof MDTable) {
      this._add(content.get());
      return this;
    } else if (Array.isArray(content[0])) {
      const table = new MDTable(...content[0]);
      content.shift();
      for (let i = 0; i < content.length; i++) {
        table.addRow(...content[i]);
      }
      this._add(table.get());
    }
    return this;
  }

  addHorizontalRule() {
    this._add("---");
    return this;
  }

  addComment(content: string) {
    this._add("<!-- " + content + " -->");
    return this;
  }

  addHTML(content: string) {
    this._add(content);
    return this;
  }

  get() {
    return this.markdown;
  }
}

class MDX extends MD {
  constructor(base: MarkDownLike = "") {
    super(base);
  }

  addImport(name: string, path: string) {
    this.markdown += `import ${name} from '${path}'\n`;
    return this;
  }

  addJSX(content: string) {
    this.markdown += `{${content}}\n`;
    return this;
  }
}

class MDTable extends MD {
  private _hasRows: boolean = false;

  constructor(...headers: string[]) {
    super("");
    this.markdown += headers.join(" | ");
    this.addNewLine();
    this.markdown += headers.map(() => "---").join(" | ");
    this.addNewLine();
  }

  addHeading(content: string, level: number) {
    this.markdown = "#".repeat(level) + " " + content + "\n" + this.markdown;
    return this;
  }

  sanitize(content: string) {
    return this._addBackSlash(content).replaceAll("\n", " ");
  }

  addRow(...row: string[]) {
    if (!this._hasRows) {
      this._hasRows = true;
    }
    this.markdown += row.map((x) => this.sanitize(x)).join(" | ");
    this.addNewLine();
    return this;
  }

  get() {
    if (!this._hasRows) {
      this.markdown = "";
    }
    return this.markdown;
  }
}

const utils = {
  wrapBackticks(content: string, type = "") {
    type = type === "" ? "" : `{:${type}}`;

    return `\`${content}${type}\``;
  },
  customStyle(content: string, styles = {}, id = "") {
    return `<span id="${id}" style={${JSON.stringify(
      styles,
    )}}>${content}</span>`;
  },
  noCSSWrap(content: string, styles = {}, id = "") {
    return utils.customStyle(content, { whiteSpace: "nowrap", ...styles }, id);
  },
  link(content: string, link: string) {
    return `[${content}](${link})`;
  },
};

export { MD, MD as default, MDTable, MDX, utils };

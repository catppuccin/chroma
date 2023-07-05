// seems to be a problem with JSS' API
// track -> https://github.com/cssinjs/jss/issues/1569
const jss = require("jss").default;
const preset = require("jss-preset-default").default;
const { variants } = require("@catppuccin/palette");

jss.setup(preset());

// chroma/pygments tokens reference:
// https://pygments.org/docs/tokens/

// vs code tokens reference:
// https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide

const jssStyles = {};

for (let key in variants) {
  let variant = variants[key];
  let variantStyles = {
    chroma: {
      // Default Foreground
      color: variant.text.hex,
      // Default Background
      backgroundColor: variant.base.hex,
      // CodeLine
      "& .cl": {
        color: variant.text.hex,
      },
      // Error
      "& .err": {
        color: variant.red.hex,
      },
      // Other
      // special token for data not matched by a parser (e.g. HTML markup in PHP code)
      "& .x": {
        color: variant.text.hex,
      },
      // // Punctuation
      // // e.g. `[`, `(`, `...`
      // // styles shouldn't be required
      // // it's empty in chroma default styles as well
      // "& .p": {
      //   color: variant.text.hex,
      // },

      // =========================================
      // █░░ █ █▄░█ █▀▀   ▀█▀ ▄▀█ █▄▄ █░░ █▀▀
      // █▄▄ █ █░▀█ ██▄   ░█░ █▀█ █▄█ █▄▄ ██▄
      // =========================================
      // LineTableTD
      "& .lntd": {
        verticalAlign: "top",
        padding: 0,
        margin: 0,
        border: 0,
      },
      // LineTable
      "& .lntable": {
        borderSpacing: 0,
        padding: 0,
        margin: 0,
        border: 0,
        width: "auto",
        overflow: "auto",
        display: "block",
      },
      // LineHighlight
      "& .hl": {
        display: "block",
        width: "100%",
        backgroundColor: variant.surface1.hex,
      },
      // LineNumbersTable
      "& .lnt": {
        marginRight: "0.4em",
        padding: "0 0.4em 0 0.4em",
        fontSize: "0.875rem",
        color: variant.overlay1.hex,
      },
      // LineNumbers
      "& .ln": {
        marginRight: "0.4em",
        padding: "0 0.4em 0 0.4em",
        color: variant.overlay1.hex,
      },
      // LineLink
      // "& .lnlinks": {
      //   outline: none,
      //   textDecoration: none,
      //   color: inherit
      // }

      // ====================================
      // █▄▀ █▀▀ █▄█ █░█░█ █▀█ █▀█ █▀▄ █▀
      // █░█ ██▄ ░█░ ▀▄▀▄▀ █▄█ █▀▄ █▄▀ ▄█
      // ====================================
      // Keyword
      "& .k": {
        color: variant.mauve.hex,
      },
      // KeywordReserved
      "& .kr": {
        color: variant.mauve.hex,
      },
      // KeywordPseudo
      // words like `None` in older Python
      "& .kp": {
        color: variant.mauve.hex,
      },
      // KeywordConstant
      // words like `None` in newer Python
      "& .kc": {
        color: variant.peach.hex,
      },
      // KeyWordDeclaration
      // words like `var` in Go, JS
      "& .kd": {
        color: variant.red.hex,
      },
      // KeywordNamespace
      // words like `import` in Python, Go
      "& .kn": {
        color: variant.teal.hex,
      },
      // KeywordType
      // for built-in types: int,char
      "& .kt": {
        color: variant.red.hex,
      },

      // =======================
      // █▄░█ ▄▀█ █▀▄▀█ █▀▀ █▀
      // █░▀█ █▀█ █░▀░█ ██▄ ▄█
      // =======================
      // Name
      "& .n": {
        color: variant.text.hex,
      },
      // NameClass
      // css class selctor
      "& .nc": {
        color: variant.yellow.hex,
      },
      // NameConstant
      // constant names; determined by the declaration or uppercase convention
      "& .no": {
        color: variant.yellow.hex,
      },
      // NameDecorator
      // syntax element in Python/C#
      "& .nd": {
        color: variant.blue.hex,
        fontWeight: "bold",
      },
      // NameEntity
      // e.g. &nbsp; in HTML
      "& .ni": {
        color: variant.teal.hex,
      },
      // NameException
      // e.g. RuntimeError in Python
      "& .ne": {
        color: variant.peach.hex,
      },
      // NameFunction
      // function names
      "& .nf": {
        color: variant.blue.hex,
      },
      // NameFunctionMagic
      // e.g. `__init__` in Python
      "& .fm": {
        color: variant.blue.hex,
      },
      // NameLabel
      // label names in langs. that support `goto`
      "& .nl": {
        color: variant.sky.hex,
      },
      // NameNamespace
      // e.g. import paths in Python/Go
      "& .nn": {
        color: variant.peach.hex,
      },
      // NameProperty
      // occasionally used for class attrs
      "& .py": {
        color: variant.peach.hex,
      },
      // NameTag
      // tag names in markup langs.
      "& .nt": {
        color: variant.mauve.hex,
      },

      // ===============================
      // NameVariable
      // variable names in langs like PHP that have prefixes in the name
      // color descends to all the subtokens
      "& .nv": {
        color: variant.rosewater.hex,
      },
      // NameVariableClass
      // class variables
      "& .vc": {
        color: variant.rosewater.hex,
      },
      // NameVariableGlobal
      // global vars like in Ruby
      "& .vg": {
        color: variant.rosewater.hex,
      },
      // NameVariableInstance
      // instance variables
      "& .vi": {
        color: variant.rosewater.hex,
      },
      // NameVariableMagic
      // e.g. `__doc__` in Python
      "& .vm": {
        color: variant.rosewater.hex,
      },
      // ===============================

      // NameAttribute
      // e.g. attrs of HTML tags
      "& .na": {
        color: variant.blue.hex,
      },
      // NameBuiltin
      // words available in the global namespace
      "& .nb": {
        color: variant.sky.hex,
      },
      // NameBuiltinPseudo
      // words like `self` in Ruby, `this` in Java
      "& .bp": {
        color: variant.sky.hex,
      },
      // NameOther
      // normally unused but gets used with langs like JS and Go for all the names (a lexer issue?)
      "& .nx": {
        color: variant.text.hex,
      },

      // ================================
      // █░░ █ ▀█▀ █▀▀ █▀█ ▄▀█ █░░ █▀
      // █▄▄ █ ░█░ ██▄ █▀▄ █▀█ █▄▄ ▄█
      // ================================
      // Literal
      // match any literal
      "& .l": {
        color: variant.text.hex,
      },
      // LiteralDate
      // e.g. 42d in Boo
      "& .ld": {
        color: variant.text.hex,
      },

      // ===========================
      // █▀ ▀█▀ █▀█ █ █▄░█ █▀▀ █▀
      // ▄█ ░█░ █▀▄ █ █░▀█ █▄█ ▄█
      // ===========================
      // LiteralString
      // color descends to subtokens till string affix
      "& .s": {
        color: variant.green.hex,
      },
      // LiteralStringChar
      // single character literal
      "& .sc": {
        color: variant.green.hex,
      },
      // LiteralStringSingle
      // single quoted strings
      "& .s1": {
        color: variant.green.hex,
      },
      // LiteralStringDouble
      // double-quoted string
      "& .s2": {
        color: variant.green.hex,
      },
      // LiteralStringBacktick
      // strings enclosed in backticks
      "& .sb": {
        color: variant.green.hex,
      },
      // LiteralStringOther
      // e.g. `%q{foo}` string constructs in Ruby
      "& .sx": {
        color: variant.green.hex,
      },
      // LiteralStringSymbol
      // e.g. `:foo` in LISP
      "& .ss": {
        color: variant.green.hex,
      },
      // LiteralStringInterpol
      // e.g. #{foo} in Ruby
      "& .si": {
        color: variant.green.hex,
      },
      // LiteralStringAffix
      // e.g. `r` in `r"cool"`
      "& .sa": {
        color: variant.red.hex,
      },
      // LiteralStringDelimiter
      // e.g. the word END in Perl
      "& .dl": {
        color: variant.blue.hex,
      },
      // LiteralStringEscape
      // escape sequence in literal string
      "& .se": {
        color: variant.blue.hex,
      },
      // LiteralStringRegex
      // e.g. `/foo/` in JavaScript
      "& .sr": {
        color: variant.teal.hex,
      },
      // LiteralStringDoc
      // e.g. doc strings in Python
      // inherits from `.c` (comment)
      "& .sd": {
        color: variant.overlay0.hex,
      },
      // LiteralStringHeredoc
      // heredoc strings in Ruby/Perl
      // inherits from `.c` (comment)
      "& .sh": {
        color: variant.overlay0.hex,
      },

      // ================================
      // █▄░█ █░█ █▀▄▀█ █▄▄ █▀▀ █▀█ █▀
      // █░▀█ █▄█ █░▀░█ █▄█ ██▄ █▀▄ ▄█
      // ================================
      // LiteralNumber
      // match any number literal
      // color descends to all subtokens
      "& .m": {
        color: variant.peach.hex,
      },
      // LiteralNumberBin
      // match binary literals e.g. `0b101010`
      "& .mb": {
        color: variant.peach.hex,
      },
      // LiteralNumberHex
      // match hex literals e.g. e.g. `0xdeadbeef`
      "& .mh": {
        color: variant.peach.hex,
      },
      // LiteralNumberInteger
      // match integer literals
      "& .mi": {
        color: variant.peach.hex,
      },
      // LiteralNumberFloat
      // match float literals
      "& .mf": {
        color: variant.peach.hex,
      },
      // LiteralNumberIntegerLong
      // e.g. 42L in Python
      "& .il": {
        color: variant.peach.hex,
      },
      // LiteralNumberOct
      // match octal literals
      "& .mo": {
        color: variant.peach.hex,
      },

      // =======================================
      // █▀█ █▀█ █▀▀ █▀█ ▄▀█ ▀█▀ █▀█ █▀█ █▀
      // █▄█ █▀▀ ██▄ █▀▄ █▀█ ░█░ █▄█ █▀▄ ▄█
      // =======================================
      // Operator
      // e.g. +, -
      "& .o": {
        color: variant.sky.hex,
        fontWeight: "bold",
      },
      // OperatorWord
      // e.g. `not` in Python
      // inherits `.o`
      "& .ow": {
        color: variant.sky.hex,
        fontWeight: "bold",
      },

      // =======================================
      // █▀▀ █▀█ █▀▄▀█ █▀▄▀█ █▀▀ █▄░█ ▀█▀ █▀
      // █▄▄ █▄█ █░▀░█ █░▀░█ ██▄ █░▀█ ░█░ ▄█
      // =======================================
      // Comment
      // color descends to all subtokens
      "& .c": {
        color: variant.overlay0.hex,
        fontStyle: "italic",
      },
      // CommentSingle
      "& .c1": {
        color: variant.overlay0.hex,
        fontStyle: "italic",
      },
      // CommentMultiline
      "& .cm": {
        color: variant.overlay0.hex,
        fontStyle: "italic",
      },
      // Comment Special
      // e.g. author and license information
      "& .cs": {
        color: variant.overlay0.hex,
        fontStyle: "italic",
      },
      // CommentHashbang
      // match hashbang lines
      "& .ch": {
        color: variant.surface2.hex,
        fontStyle: "italic",
      },
      // CommentPreproc
      // matched shebang in bash
      "& .cp": {
        color: variant.overlay0.hex,
        fontStyle: "italic",
      },
      // CommentPreprocFile
      // match filenames in preprocessor comments, such as include files in C/C++
      "& .cpf": {
        color: variant.overlay0.hex,
        fontWeight: "bold",
      },

      // =================================
      // █▀▀ █▀▀ █▄░█ █▀▀ █▀█ █ █▀▀ █▀
      // █▄█ ██▄ █░▀█ ██▄ █▀▄ █ █▄▄ ▄█
      // =================================
      // Generic
      // not used generally
      "& .g": {
        color: variant.text.hex,
      },
      // GenericInserted
      "& .gi": {
        color: variant.green.hex,
        backgroundColor: variant.surface0.hex,
      },
      // GenericDeleted
      "& .gd": {
        color: variant.red.hex,
        backgroundColor: variant.surface0.hex,
      },
      // GenericEmph
      "& .ge": {
        color: variant.text.hex,
        fontStyle: "italic",
      },
      // GenericStrong
      "& .gs": {
        color: variant.text.hex,
        fontWeight: "bold",
      },
      // GenericUnderline
      "& .gl": {
        color: variant.text.hex,
        textDecoration: "underline",
      },
      // GenericHeading
      "& .gh": {
        color: variant.peach.hex,
        fontWeight: "bold",
      },
      // GenericSubheading
      "& .gu": {
        color: variant.peach.hex,
        fontWeight: "bold",
      },
      // GenericOutput
      "& .go": {
        color: variant.text.hex,
      },
      // GenericPrompt
      "& .gp": {
        color: variant.text.hex,
      },
      // GenericError
      "& .gr": {
        color: variant.red.hex,
      },
      // GenericTraceback
      "& .gt": {
        color: variant.red.hex,
      },

      // // TextWhiteSpace
      // "& .w": {
      //   color: variant.text.hex,
      // },
    },
  };
  jssStyles[key] = variantStyles;
}

const renderCssStyles = (variant) => {
  const stylesheet = jss.createStyleSheet(jssStyles[variant], {
    generateId: (rule) => `${rule.key}`,
  });
  return stylesheet.toString();
};

module.exports = renderCssStyles;

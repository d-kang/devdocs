{
  "editor.tokenColorCustomizations": {
    // "comments": "#AAA"
    "keywords": {
      // "fontStyle": "italic",
      "foreground": "#b3ccff"
    },
    "numbers": "#ff8a75",
      "types": "#b3ccff",
        "textMateRules": [
          /* test start */
          {
            "foreground": "#F8F8F2"
          },
          {
            "scope": "var",
            "foreground": "#F8F8F2"
          },
          {
            "scope": "var.identifier",
            "foreground": "#00FF00",
            "fontStyle": "bold"
          },
          {
            "scope": "meta var.identifier",
            "foreground": "#0000FF"
          },
          {
            "scope": "constant",
            "foreground": "#100000",
            "fontStyle": "italic"
          },
          {
            "scope": "constant.numeric",
            "foreground": "#200000"
          },
          {
            "scope": "constant.numeric.hex",
            "fontStyle": "bold"
          },
          {
            "scope": "constant.numeric.oct",
            "fontStyle": "underline"
          },
          {
            "scope": "constant.numeric.dec",
            "foreground": "#300000"
          },
          /* test end */
          // {
          //   "scope": "comment",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "constant",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "emphasis",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "entity",
          //   "settings": {
          //     "foreground": "#b3d255",
          //     "fontStyle": "italic"
          //   }
          // },
          // {
          //   "scope": "entity.name",
          //   "settings": {
          //     "foreground": "#e85e81",
          //     "fontStyle": ""
          //   }
          // },
          {
            "scope": "entity.name.tag",
            "settings": {
              "foreground": "#e85e81",
              "fontStyle": ""
            }
          },
          {
            "scope": "entity.name.selector",
            "settings": {
              "foreground": "#e85e81",
              "fontStyle": ""
            }
          },
          {
            "scope": "entity.other.attribute-name",
            "settings": {
              "foreground": "#b3d255",
              "fontStyle": "italic"
            }
          },
          // {
          //   "scope": "invalid",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "keyword",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "markup",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "meta",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "punctuation.definition.string.begin",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "storage",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "string",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "strong",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "support",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "comment",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          // {
          //   "scope": "variable",
          //   "settings": {
          //     "foreground": "#FF0000",
          //     "fontStyle": "bold"
          //   }
          // },
          /*    test     */
          {
            "scope": "entity.name.class",
            "settings": {
              "foreground": "#ff8a75"
            }
          },
          {
            "scope": "entity",
            "settings": {
              "foreground": "#FF0000"
            }
          },
          {
            "scope": "entity.name",
            "settings": {
              "foreground": "#FF0000"
            }
          },
          {
            "scope": "emphasis",
            "settings": {
              "foreground": "#FF0000"
            }
          },
          {
            "scope": "entity.name.method",
            "settings": {
              "foreground": "#FF0000"
            }
          },
          {
            "scope": "entity.name.section",
            "settings": {
              "foreground": "#FF0000"
            }
          },
          {
            "scope": "entity.name.selector",
            "settings": {
              "foreground": "#FF0000"
            }
          },
          // {
          //   "scope": "entity.other.attribute-name", // attribute name <-
          //   "settings": {
          //     "foreground": "#FF0000"
          //   }
          // },
          {
            "scope": "constant.character.escape",
            "settings": {
              "foreground": "#FF0000"
            }
          },
          // {
          //   "scope": "keyword.control",
          //   "settings": {
          //     "foreground": "#e9ebeb" // import from return
          //   }
          // },
          {
            "scope": "keyword.operator",
            "settings": {
              "foreground": "#e9ebeb" //  =
            }
          },
          {
            "scope": "keyword.operator.arithmetic",
            "settings": {
              "foreground": "#e9ebeb" //  =
            }
          },
          {
            "scope": "keyword.operator.assignment",
            "settings": {
              "foreground": "#e9ebeb" //  =
            }
          },
          // meta
          {
            "scope": "meta.function-call",
            "settings": {
              "foreground": "#e9ebeb"
            }
          },
          {
            "scope": "meta.block",
            "settings": {
              "foreground": "#FF0000"
            }
          },
          {
            "scope": "meta.tag",
            "settings": {
              "foreground": "#e9ebeb" // text nodes
            }
          },
          {
            "scope": "meta",
            "settings": {
              // "foreground": "#e9ebeb" //
            }
          },
          {
            "scope": "entity.name.method",
            "settings": {
              "foreground": "#FF0000" //
            }
          },
          {
            "scope": "support.type.property-name",
            "settings": {
              // "foreground": "#85fff5" //
            }
          },
          {
            "scope": "punctuation.separator",
            "settings": {
              "foreground": "#e9ebeb"
            }
          },
          {
            "scope": "punctuation.terminator",
            "settings": {
              "foreground": "#e9ebeb"
            }
          },
          {
            "scope": "punctuation.separator.continuation",
            "settings": {
              "foreground": "#FF0000"
            }
          },
          // added
          // dark blueish 91B3E0
          // teal 3e999f
          // baby blue BBDAFF
          // light pinkish EBBBFF
          {
            "name": "Keyword, Storage",
            "scope": "keyword, storage, storage.type, entity.name.tag.css",
            "settings": {
              // "fontStyle": "",
              "foreground": "#91B3E0"
            }
          },
          {
            "name": "Meta.tag.A",
            "scope": [
              "declaration.tag",
              "declaration.tag entity",
              "meta.tag",
              "meta.tag entity"
            ],
            "settings": {
              "fontStyle": "",
              "foreground": "#e9ebeb"
            }
          },
          {
            "name": "Comment",
            "scope": "comment",
            "settings": {
              "fontStyle": "italic",
              "foreground": "#e7c0c0ff"
            }
          },
          {
            // "strings": "#ffe085",
            "name": "String",
            "scope": "string",
            "settings": {
              "fontStyle": "",
              "foreground": "#ffe085"
            }
          },
          {
            "name": "Variable",
            "scope": "variable",
            "settings": {
              "fontStyle": "italic",
              "foreground": "#b3ccff"
            }
          },
          {
            "name": "Storage",
            "scope": "storage",
            "settings": {
              "fontStyle": "underline",
              "foreground": "#ff6262ff"
            }
          },
          {
            "name": "Function, Special Method, Block Level, GitGutter changed",
            "scope": "entity.name.function, meta.function-call, support.function, keyword.other.special-method, meta.block-level, markup.changed.git_gutter",
            "settings": {
              "fontStyle": "",
              "foreground": "#85fff5"
            }
          },
          /*test1a===================================================*/
          /*test1b*/
        ],
  }
}
module.exports = {
  // foo => bar instead of (foo) => bar
  arrowParens: "avoid",

  printWidth: 120,

  // https://prettier.io/docs/en/options.html#trailing-commas claims that this is a default, but it doesn't actually appear to be
  trailingComma: "es5",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "^@react/(.*)$",
    "^@tss-react/(.*)$",
    "^@reduxjs/(.*)$",
    "^@mui/material$",
    "^@mui/material/(.*)$",
    "^@hookform/(.*)$",
    "^@vitejs/(.*)$",
    "^@storybook/(.*)$",
    "^storybook/(.*)$",
    "^date-fns",
    "^ua-parser-js",
    "",
    "^[./]",
    "^components/(.*)$",
    "^utils/(.*)$",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "js"],
  importOrderTypeScriptVersion: "5.0.0",
};

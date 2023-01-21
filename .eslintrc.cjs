module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    /* typescript */
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          "../*",
          "~/*",
          "~~/*",
          "./assets/*",
          "./components/*",
          "./pages/*",
          "./plugins/*",
          "./router/*",
          "./hooks/*",
          "./server/*",
          "./store/*",
          "./types/*",
          "./utils/*",
          "./libs/*",
          "./*.vue",
        ],
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "{react,react-dom}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@src/**",
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
  },
};

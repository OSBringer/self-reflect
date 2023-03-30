module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
  },
};

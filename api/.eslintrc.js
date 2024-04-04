module.exports = {
  root: true,
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  ignorePatterns: ["*test*.js", "*test*.ts"],
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
};
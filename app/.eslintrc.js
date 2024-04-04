module.exports = {
  "root": true,
  "parserOptions": {
    "project": "tsconfig.json"
  },
  "ignorePatterns": [
    "git-precommit-checks.config.js",
    "*test*.js",
    "*test*.jsx",
    "*test*.ts",
    "*test*.tsx"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "globals": {
    "JSX": true,
    "localStorage": true
  },
  "env": {
    "browser": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}

module.exports = {
  extends: [
    "eslint:recommended"
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020
  },
  rules: {
    semi: ["error", "never"],
    "comma-dangle": ["error", "never"],
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
  }
}
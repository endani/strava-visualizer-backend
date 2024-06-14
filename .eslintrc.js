module.exports = {
  extends: ['@typeform/eslint-config'],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-undef': 'warn',
    'no-console': 'off',
  },
  ignorePatterns: ["**/bin/**"],
}

module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off',
    'tailwindcss/no-custom-classname': 'error', // set more strict to highlight in editor
    'tailwindcss/classnames-order': 'off', // conflicts with official prettier-plugin-tailwindcss and tailwind v3
  },
  settings: {
    tailwindcss: {
      config: 'tailwind.config.cjs',
      whitelist: [],
    },
  },
};

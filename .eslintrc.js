module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
  ],
  ignorePatterns: ['cypress/*'],
  rules: {
    'no-trailing-spaces': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ["error", { "code": 120, "tabWidth": 4 }]
  },
};

module.exports = {
  extends: [
    'airbnb-base',
    'react-app',
    'react-app/jest',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  globals: {
    page: true,
    browser: true,
    context: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'max-len': ['warn', { code: 120, ignoreTemplateLiterals: true, ignoreStrings: true }], // Match with prettier
  },
};

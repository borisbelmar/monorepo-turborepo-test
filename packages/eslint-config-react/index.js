module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint-config-base'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/button-has-type': 'off',
    'react/jsx-one-expression-per-line': 'off'
  }
}
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  env: {
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended']
}

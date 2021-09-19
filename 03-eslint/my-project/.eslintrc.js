module.exports = {
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: [
    'webexpo'
  ],
  rules: {
    'webexpo/logger': 'error'
  }
}

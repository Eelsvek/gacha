module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {},
  "overrides": [
    {
      "files": [
        "**/*.test.{j,t}s?(x)",
      ],
      "env": {
        "jest": true
      }
    }
  ]
}
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: '2018',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    quotes: ["error", "double"],
    "@typescript-eslint/quotes":["error", "double"],
    "no-unused-vars":"off",
    "spaced-comment":"off",
    "@typescript-eslint/no-unused-vars":"warn",
    "jsx-ally/control-has-associated-label":"off",
    "react/no-array-index-key":"off",
    "comma-dangle":"off",
    "arrow-body-style":"off",
    "react/no-unescaped-entities":"off",
    "react/prop-types":"off",
    "object-curly-newline":"off",
    "react/jsx-one-expression-per-line":"off",
    "implicit-arrow-linebreak":"off",
    "no-shadow":"off",
    "operator-linebreak":"off",
    "react/react-in-jsx-scope":"off",
    "react/jsx-props-no-spreading":"off",
    "global-require":"off",
    "react/jsx-filename-extension":[
      1,
      {textension:[".js", ".jsx", ".tsx"]}, 
    ],
    "import/extensions":[
      "error",
      "ignorePackages",
      {
        js:"never",
        jsx:"never",
        ts:"never",
        tsx:"never"
      },
    ],
  },
  settings: {
    "import/resolver":{
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
};

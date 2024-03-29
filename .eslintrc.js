module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended'
  ],
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 'off',
    'import/extensions': [1, 'never'],
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': 0,
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'react/prop-types': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-closing-tag-location': 0,
    'object-curly-newline': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-max-props-per-line': 0,
    'react/jsx-first-prop-new-line': 0,
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-use-before-define': 0,
    'dot-notation': ['error', { allowPattern: '^[A-Z]+(_[A-Z]+)+$' }],
    'react/display-name': [0],
    'react/no-array-index-key': 0,
    'react/require-default-props': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@next/next/no-img-element': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js']
    }
  }
}

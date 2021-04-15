module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    '@typescript-eslint/indent': [2, 2],
    'import/extensions': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/jsx-props-no-spreading': 0,
    'no-undef': 0,
    'react/prop-types': 0,
    "arrow-body-style": 0,
    "max-len": 0,
    "@typescript-eslint/no-var-requires": 0,
    "import/no-extraneous-dependencies": 0,
  },
};

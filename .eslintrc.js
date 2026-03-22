module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': ['error', { variables: false }],
    'arrow-body-style': ['off'],
    'consistent-return': ['off'],
    'react/destructuring-assignment': ['off'],
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
    'react/no-array-index-key': ['off'],
    'import/prefer-default-export': ['off'],
    'global-require': ['off'],
    'react/prop-types': 1,
  },
};

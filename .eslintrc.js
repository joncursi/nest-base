/**
 * @prettier
 */

module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ['@joncursi/eslint-config'],
  root: true,
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

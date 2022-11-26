module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  rules: {
    'no-console': 2,
    'no-debugger': 2,
    'no-var': 2,
    'no-eval': 2,
    camelcase: 1,
    '@typescript-eslint/no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 1,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};

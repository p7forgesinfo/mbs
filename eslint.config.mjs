// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import stylistic from '@stylistic/eslint-plugin';

export default withNuxt({
  plugins: {
    '@stylistic': stylistic
  },
  rules: {
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@stylistic/quote-props': 'off',
    '@stylistic/brace-style': 'off',
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/member-delimiter-style': [
      'error', {
        'multiline': {
          'delimiter': 'comma',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'comma',
          'requireLast': false,
        },
        'multilineDetection': 'brackets',
      },
    ],
  }
});

import type { Linter } from 'eslint';

import core from '@lint/core';

/**
 * The React Joggr eslint config.
 */
const config = {
  ...core,
  env: {
    ...core.env,
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      rules: {
        'filenames-simple/naming-convention': ['error', { rule: 'PascalCase' }],
      },
    },
  ],
  extends: [
    ...core.extends,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: [...core.plugins, 'storybook', 'react-hooks', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...core.rules,
    'react/prop-types': 'off',
  },
} as const satisfies Linter.Config;

export default config;

import core from '@lint/configs/core';
import type { Linter } from 'eslint';

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
      files: ['*.tsx', '*.test.tsx', '*.stories.tsx'],
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
    'react/no-unescaped-entities': 'off',
  },
} as const satisfies Linter.Config;

export default config;

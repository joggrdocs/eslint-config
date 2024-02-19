import type { Linter } from 'eslint';

/**
 * The core Joggr eslint config that all other configs extend.
 */
const config = {
  root: true,
  env: {
    jest: true,
  },
  ignorePatterns: [
    'dist',
    'build',
    '.eslintrc.cjs',
    '**/__tests__/**',
    '**/__mocks__/**',
    '**/__fixtures__/**',
    '**/__snapshots__/**',
    '**/node_modules/**',
    '**/dist/**',
    '**/coverage/**',
    '.yarn/**',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'filenames-simple', 'jest'],
  parser: '@typescript-eslint/parser',
  rules: {
    /**
     * Import Order
     *
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'external',
          'builtin',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        distinctGroup: false,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    /**
     * File Naming Conventions
     *
     * @link https://github.com/epaew/eslint-plugin-filenames-simple/blob/master/docs/rules/naming-convention.md
     */
    'filenames-simple/naming-convention': [
      'error',
      {
        rule: 'kebab-case',
      },
    ],

    /*
    |------------------
    | Short Term Overrides
    |------------------
    */

    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/triple-slash-reference': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/method-signature-style': 'warn',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/no-invalid-void-type': 'warn',
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',

    /*
    |------------------
    | Semistandard 
    |------------------
    */

    /**
     * Support TypeScript + Semistandard (not native)
     *
     * @link https://github.com/standard/ts-standard/issues/115
     */
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/no-extra-semi': 'error',
  },
} as const satisfies Linter.Config;

export default config;

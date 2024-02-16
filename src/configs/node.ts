import type { Linter } from 'eslint';

import core from '@lint/configs/core';

/**
 * The node.js Joggr eslint config.
 */
const config = {
  ...core,
  extends: [...core.extends],
  plugins: [...core.plugins],
  rules: {
    ...core.rules,
  },
} satisfies Linter.Config;

export default config;

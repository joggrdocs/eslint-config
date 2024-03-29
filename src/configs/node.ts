import core from '@lint/configs/core';
import type { Linter } from 'eslint';

/**
 * The node.js Joggr eslint config.
 */
const config = {
  ...core,
  env: {
    ...core.env,
    node: true,
  },
  extends: [...core.extends],
  plugins: [...core.plugins],
  rules: {
    ...core.rules,
  },
} as const satisfies Linter.Config;

export default config;

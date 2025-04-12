import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

/**
 * @type {import('eslint').Linter.Config}
 */
export default {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    ...nextCoreWebVitals, // Next.js推奨
    'plugin:@typescript-eslint/recommended',
    ...eslintPluginPrettierRecommended, // Prettierと連携
  ],
  rules: {
    'prettier/prettier': 'error',
    '@next/next/no-html-link-for-pages': 'off',
  },
}

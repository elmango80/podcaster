export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'testing-library',
    'plugin:jest-dom/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/tests/**/*.test.ts'],
      rules: {
        'testing-library/await-async-query': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        'testing-library/prefer-screen-queries': 0,
        'testing-library/await-async-queries': 'error',
        'testing-library/no-await-sync-queries': 'error',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'simple-import-sort', 'import', 'unused-imports'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],

    'prettier/prettier': ['error', { printWidth: 80 }],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}

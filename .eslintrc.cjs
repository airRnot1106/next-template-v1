module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'tailwindcss', 'vitest'],
  rules: {
    /* typescript */
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          '../*',
          '~/*',
          '~~/*',
          './assets/*',
          './components/*',
          './pages/*',
          './plugins/*',
          './router/*',
          './hooks/*',
          './server/*',
          './store/*',
          './types/*',
          './utils/*',
          './libs/*',
          './*.vue',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'pathGroups': [
          {
            pattern: '{react,react-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'alphabetize': {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    /* tailwindcss */
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        config: 'tailwind.config.cjs',
      },
    ],
    'tailwindcss/classnames-order': 'off',
    /* vitest */
    'vitest/consistent-test-it': [
      'error',
      {
        fn: 'test',
      },
    ],
    'vitest/expect-expect': 'warn',
    'vitest/lower-case-title': 'off',
    'vitest/max-nested-describe': [
      'error',
      {
        max: 2,
      },
    ],
    'vitest/no-conditional-tests': 'error',
    'vitest/no-focused-tests': 'warn',
    'vitest/no-identical-title': 'error',
    'vitest/no-skipped-tests': 'warn',
  },
};

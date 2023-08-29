module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 'error',
    'react-native/no-single-element-style-arrays': 'warn',
    'no-shadow': 'off',
    semi: 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          ['internal', 'parent', 'sibling'],
          'object',
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '{components,containers,navigation,screens,services}/**',
            group: 'internal',
          },
          {
            pattern: '{assets,themes,utils}/**',
            group: 'object',
          },
          {
            pattern: 'models/**',
            group: 'type',
          },
        ],
        pathGroupsExcludedImportTypes: ['external, builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
    },
  },
}

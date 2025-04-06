import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['dist'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: typescriptParser
    },
    plugins: {
      'react-hooks': reactHooks,
      '@typescript-eslint': typescript,
      react: react,
      prettier: prettier
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-undef': 'error',
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'none',
          semi: false,
          singleQuote: true
        }
      ]
    }
  }
]

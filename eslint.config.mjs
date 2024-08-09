// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";

import js from "@eslint/js";
import react from "eslint-plugin-react";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import eslintPluginPrettier from 'eslint-plugin-prettier';
import reactAppConfig from 'eslint-config-react-app'; // Importando a configuração

export default [
  js.configs.recommended,
  reactAppConfig, // Incluindo a configuração do react-app
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react,
      "@typescript-eslint": ts,
      "react-hooks": reactHooks,
      prettier: eslintPluginPrettier
    },
    rules: {
      ...react.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];




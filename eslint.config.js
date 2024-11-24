import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsParser from "@typescript-eslint/parser";
import ts from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["dist"], // Игнорируем директорию "dist"
  },
  {
    files: ["**/*.{ts,tsx,js,jsx}"], // Охват файлов
    languageOptions: {
      ecmaVersion: 2020, // Уровень синтаксиса ECMAScript
      sourceType: "module", // Для работы с ES-модулями
      globals: globals.browser, // Глобальные переменные браузера
      parser: tsParser, // Используем TypeScript-парсер
    },
    plugins: {
      "@typescript-eslint": ts, // Подключаем TypeScript ESLint
      "react-hooks": reactHooks, // Подключаем React-хуки
      "react-refresh": reactRefresh, // Подключаем React Refresh
      prettier,
    },
    rules: {
      ...ts.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

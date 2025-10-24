import { defineConfig } from "eslint/config";
import eslintPrettier from "eslint-plugin-prettier/recommended";
import eslint from "@eslint/js";
import globals from "globals";

export default defineConfig(
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  {
    ...eslint.configs.recommended,
    files: ["**/*.{js, jsx}"],
    ignores: ["node_modules/**/*", "dist/**/*"],
  },
  {
    ...eslintPrettier,
    files: ["**/*.{js, jsx}"],
    ignores: ["node_modules/**/*", "dist/**/*"],
  },
);

import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.Config[]} */
export default [
  // Ignore build artifacts
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**"],
  },
  // Astro files
  ...eslintPluginAstro.configs.recommended,
  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.astro"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".astro"],
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.strict.rules,
      "no-console": "error",
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
];

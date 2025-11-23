import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "docs/.next/**",
      "out/**",
      "build/**",
      "dist/**",
      "next-env.d.ts"
    ]
  },
  {
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "simple-import-sort": simpleImportSort
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      curly: ["error", "all"]
    }
  },
  ...nextVitals.map((config) => ({
    ...config,
    files: ["docs/**/*.{js,ts,tsx}"]
  })),
  ...nextTs.map((config) => ({
    ...config,
    files: ["docs/**/*.{js,ts,tsx}"]
  })),
  {
    files: ["docs/**/*.{js,ts,tsx}"],
    ...prettier
  }
];

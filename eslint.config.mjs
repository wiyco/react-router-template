// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tanstackQuery from "@tanstack/eslint-plugin-query";
import vitest from "@vitest/eslint-plugin";
import prettier from "eslint-config-prettier";
import { flatConfigs as importflatConfigs } from "eslint-plugin-import";
import jestDom from "eslint-plugin-jest-dom";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import storybook from "eslint-plugin-storybook";
import testingLibrary from "eslint-plugin-testing-library";
import unusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import ts from "typescript-eslint";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const _compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = ts.config(
  {
    files: ["**/*.{js,jsx,ts,tsx}", "**/*.{cjs,mjs,cts,mts}"],
  },
  {
    ignores: [".react-router/", "build/"], // + Default ignores ["**/node_modules/", ".git/"]
  },
  // eslint:recommended
  js.configs.recommended,
  // plugin:@typescript-eslint/recommended
  ...ts.configs.recommended,
  // plugin:react/recommended
  react.configs.flat?.recommended ?? {},
  // plugin:react/jsx-runtime
  react.configs.flat?.["jsx-runtime"] ?? {},
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // plugin:react-hooks/recommended
  reactHooks.configs["recommended-latest"],
  // plugin:jsx-a11y/recommended
  jsxA11y.flatConfigs.recommended,
  // plugin:@tanstack/query/recommended
  tanstackQuery.configs["flat/recommended"],
  // plugin:@vitest/recommended
  vitest.configs.recommended,
  // plugin:jest-dom/recommended
  jestDom.configs["flat/recommended"],
  // plugin:testing-library/react
  testingLibrary.configs["flat/react"],
  // plugin:storybook/recommended
  ...storybook.configs["flat/recommended"],
  // plugins: ["import"] - Custom configuration
  {
    plugins: {
      import:
        importflatConfigs.recommended.plugins
          .import /** @see createFlatConfig */,
    },
  },
  // plugins: ["simple-import-sort"] - Recommended configuration
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "import/first": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
    },
    settings: {
      "import/internal-regex": "^~/",
    },
  },
  // plugins: ["unused-imports"] - Recommended configuration
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  // prettier - Disable eslint rules that conflict with prettier.
  prettier,
  // Custom rules
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowWithName: "Props$", // Allow empty object types with a name ending with "Props".
        },
      ],
    },
  }
);

export default config;

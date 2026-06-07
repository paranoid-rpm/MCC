import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      ".next/**",
      ".venv/**",
      "node_modules/**",
      "_asset_repos/**",
      "_references/**",
      "MaineCoonCity-V2-code/**",
      "asset-inbox/**",
      "qa/**",
      "next-env.d.ts"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        React: "readonly",
        window: "readonly",
        navigator: "readonly",
        GeolocationPosition: "readonly",
        console: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ]
    }
  }
];

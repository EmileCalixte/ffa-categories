import eslintConfigPrettier from "eslint-config-prettier";
import love from "eslint-config-love";

export default [
  {
    ignores: ["dist", "eslint.config.js", "tsup.config.ts", "vitest.config.ts"],
  },
  {
    ...love,
    files: ["**/*.js", "**/*.ts"],
  },
  eslintConfigPrettier,
  {
    rules: {
      "@typescript-eslint/no-unsafe-type-assertion": "off", // We avoid using `as` as much as possible, but sometimes we have no choice
    },
  },
];

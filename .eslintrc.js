module.exports = {
  extends: ["@cruk", "next/core-web-vitals"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    // It's ok to have dev dependencies imported for test files
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: [
          "**/*.cypress.tsx",
          "**/*.stories.tsx",
          "**/*.test.tsx",
        ],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["arrow-function"],
      },
    ],
    "jest/expect-expect": [0],
    "jest/valid-expect": [0],
    "import/no-named-as-default": [0],
    "react/require-default-props": [0],
    "react/jsx-no-useless-fragment": [0],
  },
  ignorePatterns: ["cypress", "*.config.js", "webpack.*.js", "node_modules"],
};

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier", "prettier/@typescript-eslint"],
  rules: {
      // "prettier/prettier": ["error"],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-interface": "off"
  },
  overrides: [
      {
          files: ["*.ts"],
          parserOptions: {
              project: "tsconfig.json",
              tsconfigRootDir: __dirname
          }
      }
  ]
};
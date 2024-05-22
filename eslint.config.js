module.exports = {
  files: ["*.ts", "*.tsx"],
  parser: {
    name: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "next/core-web-vitals": "error",
    "eslint:recommended": "error",
    "plugin:@typescript-eslint/recommended": "error",
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

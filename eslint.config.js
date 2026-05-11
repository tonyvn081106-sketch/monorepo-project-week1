import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    // Chỉ định chính xác đường dẫn đến src và test bên trong server
    files: ["server/src/**/*.ts", "server/test/**/*.ts"], 
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "off", 
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"]
},
  },
  {
    // Bỏ qua các thư mục không cần kiểm tra
    ignores: ["node_modules/**", "dist/**", "coverage/**"],
  },
];
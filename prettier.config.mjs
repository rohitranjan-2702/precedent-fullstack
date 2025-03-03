// prettier.config.js
const config = {
  bracketSpacing: true,
  semi: true,
  trailingComma: "all",
  printWidth: 80,
  tabWidth: 2,
  plugins: [require("prettier-plugin-tailwindcss")],
};

export default config;

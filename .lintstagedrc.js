module.exports = {
  "*.{js,jsx,ts,tsx}": "eslint .gitignore --cache --fix",
  // return a function so that the staged files aren't appended to the command
  // otherwise tsc will ignore the .tsconfig file. From the docs: "When input
  // files are specified on the command line, tsconfig.json files are ignored."
  // https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
  "*.{ts,tsx}": () => "npm run check:types",
  "*.{jsx,ts,tsx,css,scss}": "prettier  .gitignore --write",
};

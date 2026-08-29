const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./catewebs/tsconfig.json");

module.exports = {
  rootDir: ".",
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/__tests__/**/*.test.js",
    "<rootDir>/catewebs/src/**/*.test.ts",
    "<rootDir>/catewebs/src/**/*.test.tsx"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: {
          ...compilerOptions,
          module: "CommonJS",
          moduleResolution: "node16",
          rootDir: ".",
          ignoreDeprecations: "5.0"
        }
      }
    ]
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: "<rootDir>/catewebs/"
  })
};

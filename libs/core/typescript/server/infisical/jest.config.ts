/* eslint-disable */
export default {
  displayName: "core-server-infisical",
  preset: "../../../../../testing/jest.preset.js",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }]
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory:
    "../../../../../coverage/libs/core/typescript/server/infisical"
};
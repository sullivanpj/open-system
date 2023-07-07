/* eslint-disable */
export default {
  displayName: "engagement-client-reaction",
  preset: "../../../testing/jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": [
      "@swc/jest",
      { jsc: { transform: { react: { runtime: "automatic" } } } },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory:
    "../../../coverage/libs/engagement/typescript/client/reaction",
};

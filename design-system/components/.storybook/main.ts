import type { Options, StorybookConfig } from "@storybook/core-common";
import type { Configuration } from "webpack";
import { config as rootMain } from "../../../.storybook/main";

/**
 * @see https://github.com/storybookjs/storybook/blob/main/docs/configure/overview.md#using-storybook-api
 * @see https://github.com/storybookjs/storybook/blob/main/lib/client-logger/src/index.ts
 */
export default {
  ...rootMain,

  core: { ...rootMain.core, builder: "webpack5" },

  stories: [
    ...rootMain.stories,
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [...(rootMain.addons || []), "@nrwl/react/plugins/storybook"],
  logLevel: "warn",
  webpackFinal: async (config: Configuration, options: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, options);
    }

    // add your own webpack tweaks if needed

    return config;
  },
} as StorybookConfig;

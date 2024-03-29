import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#6366F1",
  colorSecondary: "#10B981",

  // UI
  appBg: "#18181B",
  appContentBg: "#18181B",
  appBorderColor: "#523188",
  appBorderRadius: 2,

  // Text colors
  textColor: "#6366F1",
  textInverseColor: "#10B981",

  // Toolbar default and active colors
  barTextColor: "#6366F1",
  barSelectedColor: "#10B981",
  barBg: "#523188",

  // Form colors
  inputBg: "#2D3348",
  inputBorder: "#8B949E",
  inputTextColor: "#8B949E",
  inputBorderRadius: 2,

  brandTitle: "Open System",
  brandUrl: "https://github.com/sullivanpj/open-system",
  brandImage: require("../../assets/logo-inverse.svg"),
});

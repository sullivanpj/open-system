import type { ComponentStory } from "@storybook/react";
import { FieldReference } from "../types";
import { Select } from "./Select";

export default {
  title: "Forms/Select",
  component: Select,
  parameters: {
    label: [
      { name: "Label", value: "Label" },
      { name: "Sample Label", value: "Sample Label" },
    ],
    placeholder: [
      { name: "Placeholder", value: "Placeholder" },
      { name: "Sample Placeholder", value: "Sample Placeholder" },
    ],
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = args => (
  <Select {...args}></Select>
);

/**
 * Primary
 */
export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Sample Label",
  name: "sample",
  options: [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" },
  ],
};

/**
 * Required
 */
export const Required = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Required.args = {
  label: "Sample Label",
  name: "sample",
  required: true,
  options: [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" },
  ],
};

/**
 * Disabled
 */
export const Disabled = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  label: "Sample Label",
  name: "sample",
  disabled: true,
  options: [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" },
  ],
};

/**
 * Information
 */
export const Information = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Information.args = {
  label: "Sample Label",
  name: "sample",
  info: "This is an information message",
  options: [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" },
  ],
};

/**
 * Warning
 */
let warningRef;
const WarningTemplate: ComponentStory<typeof Select> = args => (
  <Select
    ref={(el: FieldReference<string>) => (warningRef = el)}
    {...args}></Select>
);

export const Warning = WarningTemplate.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
  label: "Sample Label",
  name: "sample",
  options: [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" },
  ],
};
console.log(warningRef);
//warningRef.setWarning("This is a warning message");

/**
 * Error
 */
let errorRef;
const ErrorTemplate: ComponentStory<typeof Select> = args => (
  <Select
    ref={(el: FieldReference<string>) => (errorRef = el)}
    {...args}></Select>
);

export const Error = ErrorTemplate.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  label: "Sample Label",
  name: "sample",
  options: [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" },
  ],
};
console.log(errorRef);
//errorRef.setError("This is an error message");

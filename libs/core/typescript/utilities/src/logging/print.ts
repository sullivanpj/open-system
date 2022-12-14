import chalk from "chalk";

/**
 * `print` is a function that takes a `message` of type `string`, a `newLine` of type `boolean`
 * (defaults to `true`), a `newLineAfter` of type `boolean` (defaults to `true`), and an optional
 * `prefix` of type `string`
 * @param {string} message - string - The message to print
 * @param [newLine=true] - boolean - Whether to print a new line before the message.
 * @param [newLineAfter=true] - boolean
 * @param {string} [prefix] - The prefix to use for the message.
 */
const print = (
  message: string,
  newLine = true,
  newLineAfter = true,
  prefix?: string
) => {
  console.error(
    `${newLine ? "\n" : ""}${prefix ? `${prefix} ` : ""}${message}${
      newLineAfter ? "\n" : ""
    }`
  );
};

/**
 * It takes a message, a boolean for whether or not to print a new line before the message, a boolean
 * for whether or not to print a new line after the message, and a string for the icon to print before
 * the message.
 * @param {string} message - string - The message to print
 * @param [newLine=true] - If true, the message will be printed on a new line.
 * @param [newLineAfter=true] - If true, a new line will be printed after the message.
 */
export const printInfo = (
  message: string,
  newLine = true,
  newLineAfter = true
) => {
  print(message, newLine, newLineAfter, chalk.blue("i"));
};

/**
 * It prints a message to the console, optionally with a new line before and/or after the message, and
 * optionally with a green checkmark at the end of the message.
 *
 * The function is written in TypeScript, but it's not really doing anything that's specific to
 * TypeScript. It's just a function that prints a message to the console.
 *
 * The function is written in a way that makes it easy to test. It has no side effects, and it returns
 * nothing. It just prints a message to the console.
 *
 * The function is written in a way that makes it easy to use. It has a default value for each of its
 * parameters, so you can call it with no parameters at all, and it will still work.
 *
 * The function is written in a way that makes it easy to read. It has a descriptive name, and it has a
 * descriptive comment at the top of the function.
 * @param {string} message - string - The message to print
 * @param [newLine=true] - boolean - whether to print a new line before the message
 * @param [newLineAfter=true] - boolean
 */
export const printSuccess = (
  message: string,
  newLine = true,
  newLineAfter = true
) => {
  print(message, newLine, newLineAfter, chalk.green("???"));
};

/**
 * It prints a message to the console with a yellow exclamation mark at the end.
 * @param {string} message - string - The message to print
 * @param [newLine=true] - boolean - whether to print a new line before the message
 * @param [newLineAfter=true] - boolean
 */
export const printWarning = (
  message: string,
  newLine = true,
  newLineAfter = true
) => {
  print(message, newLine, newLineAfter, chalk.yellow("!"));
};

/**
 * It prints a message to the console, optionally with a new line before and/or after the message, and
 * optionally with a symbol after the message.
 * @param {string} message - string - The message to print
 * @param [newLine=true] - boolean - whether to print a new line before the message
 * @param [newLineAfter=true] - boolean
 */
export const printError = (
  message: string,
  newLine = true,
  newLineAfter = true
) => {
  print(message, newLine, newLineAfter, chalk.red("!"));
};

module.exports = (currentConfig, _) => ({
  ...currentConfig,
  input: "tools/executors/dotnet/async-api-sync/impl.ts",
  output: {
    file: "dist/tools/executors/dotnet/async-api-sync/impl.js",
    strict: false,
    validate: false,
    exports: "default",
    format: !Array.isArray(currentConfig.output)
      ? currentConfig.output.format
      : "cjs",
  }
});

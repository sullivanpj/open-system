/* eslint-disable @typescript-eslint/no-var-requires */
import { lowerCaseFirst } from "@open-system/core-shared-utilities/common/string-fns";
import path from "path";
import { FieldInfo } from "../types";
import { ModelMeta } from "./types";

/**
 * Load model meta from standard location.
 */
export function getDefaultModelMeta(): ModelMeta {
  try {
    // normal load
    return require(".storm/model-meta").default;
  } catch {
    if (process.env.STORM_TEST === "1") {
      try {
        // special handling for running as tests, try resolving relative to CWD
        return require(path.join(
          process.cwd(),
          "node_modules",
          ".storm",
          "model-meta"
        )).default;
      } catch {
        throw new Error(
          'Model meta cannot be loaded. Please make sure "storm generate" has been run.'
        );
      }
    }
    throw new Error(
      'Model meta cannot be loaded. Please make sure "storm generate" has been run.'
    );
  }
}

/**
 * Resolves a model field to its metadata. Returns undefined if not found.
 */
export function resolveField(
  modelMeta: ModelMeta,
  model: string,
  field: string
): FieldInfo | undefined {
  return modelMeta.fields[lowerCaseFirst(model)][field];
}

/**
 * Gets all fields of a model.
 */
export function getFields(modelMeta: ModelMeta, model: string) {
  return modelMeta.fields[lowerCaseFirst(model)];
}

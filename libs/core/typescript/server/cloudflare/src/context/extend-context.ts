import { BINDINGS_TOKEN } from "@open-system/core-server-application";
import {
  ExecutionContext,
  ServerContext
} from "@open-system/core-server-application/context/execution-context";
import { GlobalContext } from "@open-system/core-server-application/context/global-context";
import { isDrizzleSqliteDB } from "@open-system/core-server-drizzle/utilities";
import { bindConstant } from "@open-system/core-shared-injection/utilities/bind-service";
import { isSet } from "@open-system/core-shared-utilities/common/type-checks";
import { DrizzleD1Database, drizzle } from "drizzle-orm/d1";
import {
  CloudflareServerBindings,
  CloudflareServerBindingsContext
} from "../types";

export const extendCloudflareServerContext = <
  TGlobalContext extends GlobalContext = GlobalContext,
  TExecutionContext extends ExecutionContext = ExecutionContext
>(
  context: ServerContext<TGlobalContext, TExecutionContext>,
  executionContext: TExecutionContext
): ServerContext<TGlobalContext, TExecutionContext> => {
  const requestBindings = executionContext.bindings as CloudflareServerBindings;

  let database: DrizzleD1Database<Record<string, unknown>> | undefined;
  if (isDrizzleSqliteDB(requestBindings?.DB)) {
    // database = requestBindings.DB;
  } else if (isSet(requestBindings?.DB)) {
    database = drizzle(requestBindings?.DB);
  } else {
    context.utils.logger.warn("No database found in Cloudflare bindings.");
  }

  context.bindings = {
    env: requestBindings,
    database
  };

  bindConstant<CloudflareServerBindingsContext>(
    BINDINGS_TOKEN,
    context.bindings,
    context.injector
  );

  return context;
};

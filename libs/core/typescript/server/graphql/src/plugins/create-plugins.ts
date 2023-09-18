/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDisableIntrospection } from "@envelop/disable-introspection";
import { useParserCache } from "@envelop/parser-cache";
import type { Plugin } from "@envelop/types";
import { useValidationCache } from "@envelop/validation-cache";
import { GlobalServerContext } from "@open-system/core-server-application";
import { IEntity } from "@open-system/core-server-domain/types";
import {
  GraphQLExecutionServerContext,
  GraphQLServerContext
} from "../context";
import { GraphQLHandlerPluginOptions, PluginMapConfiguration } from "../types";
import { useErrorHandler } from "./use-error-handler";
import { useExtendGraphQLServerContext } from "./use-extend-graphql-server-context";
import { useLogger } from "./use-logger";
import { useServiceProviders } from "./use-service-provider";

export const DefaultPluginMap: Required<PluginMapConfiguration> = {
  /**
   * The extend context plugin is used to extend the context of the GraphQL server.
   */
  extendContext: useExtendGraphQLServerContext,

  /**
   * The logger plugin is used to log messages to the Pino (by default).
   */
  logger: useLogger,

  /**
   * The error handler plugin is used to handle errors thrown by the GraphQL server.
   */
  serviceProviders: useServiceProviders
};

export const createPlugins = async <
  TEntities extends Array<IEntity> = Array<IEntity>,
  TGlobalContext extends GlobalServerContext<TEntities> = GlobalServerContext<TEntities>,
  TExecutionContext extends GraphQLExecutionServerContext = GraphQLExecutionServerContext
>({
  pluginMap = {},
  context,
  allowIntrospection,
  loggerOptions,
  extendContextOptions,
  serviceProvidersOptions
}: GraphQLHandlerPluginOptions<TEntities, TGlobalContext, TExecutionContext> & {
  context: TGlobalContext;
}): Promise<
  Array<Plugin<GraphQLServerContext<TGlobalContext, TExecutionContext>>>
> => {
  // Important: Plugins are executed in order of their usage, and inject functionality serially,
  // so the order here matters
  const plugins: Array<
    Plugin<GraphQLServerContext<TGlobalContext, TExecutionContext>>
  > = [];

  try {
    if (
      context.env.isDevelopment && (allowIntrospection ?? true)
        ? false
        : !allowIntrospection
    ) {
      plugins.push(
        useDisableIntrospection() as Plugin<
          GraphQLServerContext<TGlobalContext, TExecutionContext>
        >
      );
    }

    plugins.push(
      pluginMap["extendContext"]?.(context, extendContextOptions) ??
        DefaultPluginMap["extendContext"](context, extendContextOptions)
    );

    plugins.push(
      pluginMap["logger"]?.(context, loggerOptions) ??
        DefaultPluginMap["logger"](context, loggerOptions)
    );

    // Add other plugins here

    plugins.push(
      pluginMap["serviceProviders"]?.(context, serviceProvidersOptions) ??
        DefaultPluginMap["serviceProviders"](context, serviceProvidersOptions)
    );
  } catch (error) {
    context.utils.logger.error(error);
  }

  return [
    /*useSentry(),
    useSentryUser(),*/
    useErrorHandler<TGlobalContext, TExecutionContext>(context),
    ...plugins,
    useParserCache() as Plugin<
      GraphQLServerContext<TGlobalContext, TExecutionContext>
    >,
    useValidationCache() as Plugin<
      GraphQLServerContext<TGlobalContext, TExecutionContext>
    >
    /*useReadinessCheck<TGlobalContext, TExecutionContext>(context)
    await useHive<TGlobalContext, TExecutionContext>(context)*/
  ];
};

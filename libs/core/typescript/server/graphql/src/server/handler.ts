import type { Plugin } from "@envelop/types";
import {
  Repository,
  ServiceContext,
  UserContext,
  WhereParams,
  WhereUniqueParams,
  createServerContext
} from "@open-system/core-server-application";
import { IEntity } from "@open-system/core-server-domain/types";
import { ArrayElement, Logger } from "@open-system/core-shared-utilities";
import { createYoga } from "graphql-yoga";
import { createPlugins } from "../plugins";
import { GraphQLServerContext } from "../types";

export const createGraphQLHandler = async <
  TUser extends UserContext = UserContext,
  TEntities extends Array<IEntity> = Array<IEntity>,
  TNamespace extends ArrayElement<TEntities>["__typename"] = ArrayElement<TEntities>["__typename"],
  TEntityMapping extends Record<TNamespace, ArrayElement<TEntities>> = Record<
    TNamespace,
    ArrayElement<TEntities>
  >,
  TSelectKeys extends Record<
    TNamespace,
    | WhereParams<TEntityMapping[TNamespace], keyof TEntityMapping[TNamespace]>
    | WhereUniqueParams<
        TEntityMapping[TNamespace],
        keyof TEntityMapping[TNamespace]
      >
    | Record<string, never>
  > = Record<
    TNamespace,
    | WhereParams<TEntityMapping[TNamespace], keyof TEntityMapping[TNamespace]>
    | WhereUniqueParams<
        TEntityMapping[TNamespace],
        keyof TEntityMapping[TNamespace]
      >
    | Record<string, never>
  >,
  TCacheKeys = TSelectKeys,
  TServerContext extends GraphQLServerContext<
    TUser,
    TEntities,
    TNamespace,
    TEntityMapping,
    TSelectKeys,
    TCacheKeys
  > = GraphQLServerContext<
    TUser,
    TEntities,
    TNamespace,
    TEntityMapping,
    TSelectKeys,
    TCacheKeys
  >
>({
  injector,
  env,
  plugins,
  context,
  service,
  repositoryProviderParams
}: {
  env: TServerContext["env"];
  injector: TServerContext["injector"];
  plugins?: Array<Plugin<TServerContext>>;
  context?: TServerContext;
  service: Omit<ServiceContext, "instanceId"> &
    Partial<Pick<ServiceContext, "instanceId">>;
  repositoryProviderParams: Array<{
    namespace: TNamespace;
    builderFn: (
      context: TServerContext
    ) => Repository<
      TEntityMapping[TNamespace],
      TSelectKeys[TNamespace],
      TCacheKeys
    >;
  }>;
}) => {
  const logger = injector.get(Logger);
  if (!context) {
    context = createServerContext<
      TUser,
      TEntities,
      TNamespace,
      TEntityMapping,
      TSelectKeys,
      TCacheKeys,
      TServerContext
    >({
      injector,
      env,
      logger,
      service
    }) as TServerContext;
  }

  if (!plugins) {
    plugins = await createPlugins<
      TUser,
      TEntities,
      TNamespace,
      TEntityMapping,
      TSelectKeys,
      TCacheKeys,
      TServerContext
    >({ context, repositoryProviderParams });
  }

  const server = createYoga<TServerContext>({
    logging: injector.get(Logger),
    plugins,
    context
  });

  return server;
};

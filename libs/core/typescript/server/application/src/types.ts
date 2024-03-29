/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { IEntity } from "@open-system/core-server-domain/types";
export const MESSAGE_BROKER_TOKEN = Symbol.for("MESSAGE_BROKER_TOKEN");
export const EVENT_PUBLISHER_TOKEN = Symbol.for("EVENT_PUBLISHER_TOKEN");
export const EVENT_STORE_TOKEN = Symbol.for("EVENT_STORE_TOKEN");
export const REPOSITORY_TOKEN = Symbol.for("REPOSITORY_TOKEN");
export const REPOSITORY_DATA_LOADER_TOKEN = Symbol.for(
  "REPOSITORY_DATA_LOADER_TOKEN"
);
export const SERVICE_TOKEN = Symbol.for("SERVICE_TOKEN");
export const SYSTEM_TOKEN = Symbol.for("SYSTEM_TOKEN");
export const CACHE_TOKEN = Symbol.for("CACHE_TOKEN");
export const BINDINGS_TOKEN = Symbol.for("BINDINGS_TOKEN");

export type StringFilter = {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: string;
};

export type DateTimeFilter = {
  equals?: Date | string;
  in?: Date[] | string[];
  notIn?: Date[] | string[];
  lt?: Date | string;
  lte?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  not?: Date | string;
};

export type DateTimeNullableFilter = {
  equals?: Date | string | null;
  in?: Date[] | string[] | null;
  notIn?: Date[] | string[] | null;
  lt?: Date | string;
  lte?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  not?: Date | string | null;
};

export type StringNullableFilter = {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: string | null;
};

export type BoolFilter = {
  equals?: boolean;
  not?: boolean;
};

export type BoolNullableFilter = {
  equals?: boolean | null;
  not?: boolean | null;
};

export type NumberFilter = {
  equals?: number;
  in?: number[];
  notIn?: number[];
  between?: number[];
  notBetween?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: number[];
};

export type NumberNullableFilter = {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  between?: number[] | null;
  notBetween?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: number[] | null;
};

export const SortOrder = {
  asc: "asc",
  desc: "desc"
};

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

type EntityFieldKeys<TEntity extends IEntity = IEntity> = keyof Omit<
  TEntity,
  "__typename"
>;

type EntityFields<TEntity extends IEntity = IEntity> =
  TEntity[EntityFieldKeys<TEntity>];

export type EntityKeys<TEntity extends IEntity = IEntity> =
  EntityFields<TEntity> extends IEntity
    ? EntityKeys<EntityFields<TEntity>>
    : EntityFieldKeys<TEntity>;

export type AggregateFieldParams<
  TEntity extends IEntity = IEntity,
  TEntityKeys extends EntityKeys<TEntity> = EntityKeys<TEntity>
> = Partial<Record<TEntityKeys, true>>;

export type AggregateCountFieldParams<
  TEntity extends IEntity = IEntity,
  TEntityKeys extends EntityKeys<TEntity> = EntityKeys<TEntity>
> = AggregateFieldParams<TEntity, TEntityKeys> & {
  _all?: true;
};

type WhereParamsFields<TEntity extends IEntity = IEntity> = {
  [key in EntityKeys<TEntity>]?:
    | StringFilter
    | DateTimeFilter
    | BoolFilter
    | NumberFilter
    | WhereParams<TEntity>;
};

/*
Record<
    EntityKeys<TEntity>,
    StringNullableFilter | DateTimeNullableFilter | BoolFilter
  >
>;*/

export type WhereParams<TEntity extends IEntity = IEntity> =
  WhereParamsFields<TEntity> & {
    AND?: Array<WhereParams<TEntity>>;
    OR?: Array<WhereParams<TEntity>>;
    NOT?: WhereParams<TEntity> | Array<WhereParams<TEntity>>;
  };

export type WhereUniqueParams<TEntity extends IEntity = IEntity> = Partial<
  Omit<WhereParams<TEntity>, "id">
> & {
  id: string;
};

type SelectParams<TEntityKeys extends string | number | symbol> = Partial<
  Record<TEntityKeys, boolean>
>;
type SelectUniqueParams<TEntity extends IEntity = IEntity> = SelectParams<
  EntityKeys<TEntity>
>;

export type FindUniqueParams<TEntity extends IEntity = IEntity> = {
  select?: SelectUniqueParams<TEntity>;
  where: WhereUniqueParams<TEntity>;
};

type SelectManyParams<TEntity extends IEntity = IEntity> = Partial<
  Record<EntityKeys<TEntity>, boolean>
>;

export type FindFirstParams<TEntity extends IEntity = IEntity> = {
  select?: SelectManyParams<TEntity>;
  where?: WhereParams<TEntity>;
  orderBy?:
    | Record<EntityKeys<TEntity>, SortOrder>
    | Array<Record<EntityKeys<TEntity>, SortOrder>>;
  cursor?: WhereUniqueParams<TEntity>;
  take?: number;
  skip?: number;
  distinct?: EntityKeys<TEntity> | Array<EntityKeys<TEntity>>;
};

export type FindManyParams<TEntity extends IEntity = IEntity> = {
  select?: SelectManyParams<TEntity>;
  where?: WhereParams<TEntity>;
  orderBy?:
    | Record<EntityKeys<TEntity>, SortOrder>
    | Array<Record<EntityKeys<TEntity>, SortOrder>>;
  cursor?: WhereUniqueParams<TEntity>;
  take?: number;
  skip?: number;
  distinct?: EntityKeys<TEntity> | Array<EntityKeys<TEntity>>;
};

export type FindCountParams<TEntity extends IEntity = IEntity> = {
  where?: WhereParams<TEntity>;
  distinct?: EntityKeys<TEntity> | Array<EntityKeys<TEntity>>;
};

export const DEFAULT_SORT_ORDER = { id: SortOrder.asc };

export type UpdateDataParams<TEntity extends IEntity = IEntity> = Omit<
  TEntity,
  | "__typename"
  | "sequence"
  | "createdAt"
  | "createdBy"
  | "updatedAt"
  | "updatedBy"
>;

export type CreateParams<TEntity extends IEntity = IEntity> = {
  select?: Partial<Record<EntityKeys<TEntity>, boolean>>;
  data: UpdateDataParams<TEntity>;
};

export type UpdateParams<TEntity extends IEntity = IEntity> = {
  select?: SelectManyParams<TEntity>;
  data: UpdateDataParams<TEntity>;
  where: WhereUniqueParams<TEntity>;
};

export type UpdateManyParams<TEntity extends IEntity = IEntity> = {
  select?: SelectManyParams<TEntity>;
  data: UpdateDataParams<TEntity>;
  where?: WhereUniqueParams<TEntity>;
};

export type UpsertParams<TEntity extends IEntity = IEntity> = {
  select?: SelectManyParams<TEntity>;
  create: CreateParams<TEntity>["data"];
  update: UpdateParams<TEntity>["data"];
  where: WhereUniqueParams<TEntity>;
};

export type DeleteParams<TEntity extends IEntity = IEntity> = {
  select?: SelectManyParams<TEntity>;
  where: WhereUniqueParams<TEntity>;
};

export type DeleteManyParams<TEntity extends IEntity = IEntity> = {
  where?: WhereParams<TEntity>;
};

export type AggregateParams<TEntity extends IEntity = IEntity> = {
  select?: SelectManyParams<TEntity>;
  where?: WhereParams<TEntity>;
  orderBy?:
    | Record<EntityKeys<TEntity>, SortOrder>
    | Array<Record<EntityKeys<TEntity>, SortOrder>>;
  cursor?: WhereUniqueParams<TEntity>;
  take?: number;
  skip?: number;
  distinct?: EntityKeys<TEntity> | Array<EntityKeys<TEntity>>;
  _count?: AggregateCountFieldParams<TEntity, EntityKeys<TEntity>>;
  _min?: AggregateFieldParams<TEntity, EntityKeys<TEntity>>;
  _max?: AggregateFieldParams<TEntity, EntityKeys<TEntity>>;
};

export type GroupByParams<TEntity extends IEntity = IEntity> = {
  select?: Partial<Record<EntityKeys<TEntity>, boolean>>;
  where?: WhereParams<TEntity>;
  orderBy?:
    | Record<EntityKeys<TEntity>, SortOrder>
    | Array<Record<EntityKeys<TEntity>, SortOrder>>;
  cursor?: WhereUniqueParams<TEntity>;
  take?: number;
  skip?: number;
  distinct?: EntityKeys<TEntity> | Array<EntityKeys<TEntity>>;
  _count?: AggregateCountFieldParams<TEntity, EntityKeys<TEntity>>;
  _min?: AggregateFieldParams<TEntity, EntityKeys<TEntity>>;
  _max?: AggregateFieldParams<TEntity, EntityKeys<TEntity>>;
};

export type CountParams<
  TEntity extends IEntity = IEntity,
  TEntityKeys extends EntityKeys<TEntity> = EntityKeys<TEntity>
> = {
  select?: AggregateCountFieldParams<TEntity, TEntityKeys> | true;
};

/*export type EventSourcedServerContext<TUser extends UserContext = UserContext> =
  ServerContext<TUser> & {
    eventStore: EventStore;
    snapshotStore: any;
    eventPublisher: EventPublisher;
  };*/

export type QueryType = "findUnique" | "findFirst" | "findMany" | "aggregate";
export const QueryType = {
  FIND_UNIQUE: "findUnique" as QueryType,
  FIND_FIRST: "findFirst" as QueryType,
  FIND_MANY: "findMany" as QueryType,
  AGGREGATE: "aggregate" as QueryType
};

export type SelectKeys<TEntity extends IEntity = IEntity> =
  | WhereParams<TEntity>
  | WhereUniqueParams<TEntity>;

export type EntityName<TEntity extends IEntity = IEntity> =
  TEntity["__typename"];

export type BatchLoadKey<TEntity extends IEntity = IEntity> = {
  selector?: {
    id?: string;
    where?: SelectKeys<TEntity>;
  };
  cursor?: WhereUniqueParams<TEntity>;
  take?: number;
  orderBy?:
    | Record<EntityKeys<TEntity>, SortOrder>
    | Array<Record<EntityKeys<TEntity>, SortOrder>>;
  query: QueryType;
};

/**
 * A Function, which when given an Array of keys, returns a Promise of an Array
 * of values or Errors.
 */
export type BatchLoadFn<TEntity extends IEntity = IEntity> = (
  keys: Array<BatchLoadKey<TEntity>>
) => Promise<Array<TEntity[] | TEntity | Error>>;

/**
 * Optionally turn off batching or caching or provide a cache key function or a
 * custom cache instance.
 */
export type RepositoryOptions<TEntity extends IEntity = IEntity> = {
  name: string;
  batch?: boolean;
  maxBatchSize?: number;
  batchScheduleFn?: (callback: () => void) => void;
  cache?: boolean;
  cacheMap?: CacheMap<TEntity> | null;
};

/**
 * If a custom cache is provided, it must be of this type (a subset of ES6 Map).
 */
export type CacheMap<TEntity extends IEntity = IEntity> = {
  get(key: BatchLoadKey<TEntity>): TEntity[] | TEntity | void;
  set(key: BatchLoadKey<TEntity>, value: TEntity | TEntity[]): any;
  delete(key: BatchLoadKey<TEntity>): any;
  clear(): any;
};

/**
 * An object containing the current paginated result data returned from Entity at the current cursor position
 */
export type ModelEdge<TEntity extends IEntity = IEntity> = {
  __typename: `${TEntity["__typename"]}Edge`;
  node: TEntity;
  cursor: string;
};

/**
 * A base type to define the structure of paginated response data
 */
export type PageInfo = {
  __typename: "PageInfo";
  /** When paginating forwards, are there more items? */
  hasNextPage: boolean;
  /** When paginating backwards, are there more items? */
  hasPreviousPage: boolean;
  /** When paginating backwards, the cursor to continue. */
  startCursor: string;
  /** When paginating forwards, the cursor to continue. */
  endCursor: string;
};

/**
 * An object containing the paginated child model data returned from Model
 */
export type ModelConnection<TEntity extends IEntity = IEntity> = {
  __typename: `${TEntity["__typename"]}Connection`;
  edges: Array<ModelEdge<TEntity>>;
  pageInfo: PageInfo;
  totalCount: number;
};

/*type ModelFieldKeys<TModel extends IModel = IModel> = keyof Omit<
  TModel,
  "__typename"
>;

type ModelFields<TModel extends IModel = IModel> =
  TModel[ModelFieldKeys<TModel>];

export type ModelKeys<TModel extends IModel = IModel> =
  ModelFields<TModel> extends IModel
    ? ModelKeys<ModelFields<TModel>>
    : ModelFieldKeys<TModel>;

type SelectModelParams<TModelKeys extends string | number | symbol> = Partial<
  Record<TModelKeys, boolean>
>;
type SelectUniqueModelParams<TModel extends IModel = IModel> =
  SelectModelParams<ModelKeys<TModel>>;

type SelectManyModelParams<TModel extends IModel = IModel> = Partial<
  Record<ModelKeys<TModel>, boolean>
>;

type WhereModelParamsFields<TModel extends IModel = IModel> = {
  [key in ModelKeys<TModel>]?:
    | StringFilter
    | DateTimeFilter
    | BoolFilter
    | NumberFilter
    | WhereModelParams<TModel>;
};

export type WhereModelParams<TModel extends IModel = IModel> =
  WhereModelParamsFields<TModel> & {
    AND?: Array<WhereModelParams<TModel>>;
    OR?: Array<WhereModelParams<TModel>>;
    NOT?: WhereModelParams<TModel> | Array<WhereModelParams<TModel>>;
  };

export type WhereUniqueModelParams<TModel extends IModel = IModel> = Partial<
  Omit<WhereModelParams<TModel>, "id">
> & {
  id: string;
};

export type UniqueModelSelector<TModel extends IModel = IModel> = {
  select?: SelectUniqueModelParams<TModel>;
  where: WhereUniqueModelParams<TModel>;
};

export type ByIdModelSelector<TModel extends IModel = IModel> = {
  select?: SelectUniqueModelParams<TModel>;
  id: WhereUniqueModelParams<TModel>["id"];
};

export type ManyModelSelector<TModel extends IModel = IModel> = {
  select?: SelectManyModelParams<TModel>;
  where?: WhereModelParams<TModel>;
  orderBy?:
    | Record<ModelKeys<TModel>, SortOrder>
    | Array<Record<ModelKeys<TModel>, SortOrder>>;
  cursor?: WhereUniqueModelParams<TModel>;
  take?: number;
};

export type CreateModelData<TModel extends IModel = IModel> = Omit<
  WithoutMetadata<TModel>,
  "id"
>;

export type UpdateModelData<TModel extends IModel = IModel> =
  WithoutMetadata<TModel>;

export type CreateModelParams<TModel extends IModel = IModel> = {
  select?: Partial<Record<ModelKeys<TModel>, boolean>>;
  data: CreateModelData<TModel>;
};

export type CountModelSelector<TModel extends IModel = IModel> = {
  where?: WhereModelParams<TModel>;
};*/

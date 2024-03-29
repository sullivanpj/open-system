/* eslint-disable @typescript-eslint/no-explicit-any */

import { Temporal } from "@js-temporal/polyfill";

/**
 * Tokens used to identify a specific defined type during the dependency injection process
 */
export const Tokens = {
  RESULT: Symbol.for("OS_RESULT_SYMBOL"),
  DATE_TIME: Symbol.for("OS_DATE_TIME_SYMBOL"),
  HTTP_CONFIG: Symbol.for("OS_HTTP_CONFIG_SYMBOL"),
  HTTP_LIBRARY: Symbol.for("OS_HTTP_LIBRARY_SYMBOL"),
  HTTP_MIDDLEWARE: Symbol.for("OS_HTTP_MIDDLEWARE_SYMBOL"),
  HTTP_SERVER_CONFIG: Symbol.for("OS_HTTP_SERVER_CONFIG_SYMBOL"),
  API_REQUEST_FACTORY: Symbol.for("OS_API_REQUEST_FACTORY_SYMBOL"),
  COOKIE_PARSER: Symbol.for("OS_COOKIE_PARSER_SYMBOL")
};

/**
 * The valid types of the index for an `Indexable` type object
 */
export type IndexType = string | number | symbol;

/**
 * The declaration of a ***dictionary-type*** object
 */
export type Indexable = {
  [index: IndexType]: any;
};

export const EMPTY_STRING = "" as const;
export const NEWLINE_STRING = "\r\n" as const;
export const EMPTY_OBJECT = {} as const;

export type AnyCase<T extends IndexType> = string extends T
  ? string
  : T extends `${infer F1}${infer F2}${infer R}`
  ? `${Uppercase<F1> | Lowercase<F1>}${
      | Uppercase<F2>
      | Lowercase<F2>}${AnyCase<R>}`
  : T extends `${infer F}${infer R}`
  ? `${Uppercase<F> | Lowercase<F>}${AnyCase<R>}`
  : typeof EMPTY_STRING;

export type Newable<T> = new (...args: never[]) => T;

export interface Abstract<T> {
  prototype: T;
}

export interface Clonable<T> {
  clone(): T;
}

export type MaybePromise<T> = T | Promise<T>;

export interface ILogger {
  /**
   * Log success message
   */
  success: (...message: any[]) => any;

  /**
   * Log error message
   */
  error: (...message: any[]) => any;

  /**
   * Log warn message
   */
  warn: (...message: any[]) => any;

  /**
   * Log info message
   */
  info: (...message: any[]) => any;

  /**
   * Log debug message
   */
  debug: (...message: any[]) => any;
}

export interface IBaseClass {
  /**
   * A string representation of the class
   */
  __typename: string;
}

export interface IBaseUtilityClass extends IBaseClass {
  /**
   * A symbol representing the class type
   */
  __symbol: symbol;

  /**
   * Returns back a hash code to identify this specific instance
   *
   * @remarks The combination of class name and Id
   */
  getHashCode: () => string;

  /**
   * The `isEqualInstance` method is comparing the hash codes of two instances of the `BaseUtilityClass`
   * class. It takes another instance of `BaseClass` as a parameter and checks if the hash code of
   * the current instance is equal to the hash code of the other instance. If the hash codes are equal,
   * it means that the two instances are considered equal.
   *
   * @param other - The other instance of `BaseClass` to compare with
   * @returns A boolean value indicating if the two instances are equal
   */
  isEqualInstance: (other: any) => boolean;
}

export interface IError extends Error {
  /**
   * Additional information to display in an extended area below the message bar
   */
  extendedMessage?: string;
}

export interface AbortError extends IError {
  name: "abort";

  message: "Aborted";
}

export type IResult<
  TErr extends IError | null = null,
  TData = unknown
> = IBaseUtilityClass & {
  /**
   * The source of the error
   */
  source: ResultSourceTypes;

  /**
   * Any data returned from the process/function
   */
  data?: TData | null;

  /**
   *  A generic error type.
   */
  error: TErr | null;

  /**
   * Can the application reset the state automatically through the error boundary when the error occurs
   *
   * @defaultValue `true`
   */
  isResettable: boolean;

  /**
   * A function to check if the provided object is an error
   */
  isError: () => boolean;

  /**
   * A function to check if the provided object was successful
   */
  isSuccess: () => boolean;

  /**
   * A function to check if the provided object is the same type of result of the calling result
   */
  isEqual: (result?: unknown) => boolean;

  /**
   * The date-time the result occurred
   */
  timestamp: IDateTime;
};

/**
 * Values representing the origin of a result returned/thrown in the application
 *
 * @defaultValueResultSourceTypes.UNKNOWN
 */
export enum ResultSourceTypes {
  UNKNOWN = 0,
  RENDERING = 1,
  SERVER = 2,
  EXCEPTION = 3,
  VALIDATION = 4,
  ABORTED = 5
}

export type ReducerFunction<TState, TAction> = (
  state: TState,
  action: TAction
) => TState;

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export interface SelectOption {
  /**
   * 	The string value to display in the field
   */
  name: string;

  /**
   * The value stored behind the scenes when selected
   */
  value: string;

  /**
   * Is the option value valid for selection in the dropdown
   */
  disabled: boolean;

  /**
   * Sets or retrieves whether the option in the list box is the default item.
   */
  selected: boolean;
}

export const enum DateTimeFormatTemplates {
  DATE_SERIALIZED = "yyyyMMdd",
  TIME_SERIALIZED = "HH:mm:ss",
  DATE_TIME_SERIALIZED = "yyyyMMdd HH:mm:ss",
  TIME_SERIALIZED_TWOFOUR = "HHmmss",
  DATE_TIME_SERIALIZED_TWOFOUR = "yyyyMMddHHmmss",
  DATE_TIME_DISPLAY = "MM/dd/yyyy h:mm:ss a",
  DATE_DISPLAY = "MM/dd/yyyy",
  TIME_DISPLAY = "h:mm:ss a",
  TIME_DISPLAY_SHORT = "h:mm a",
  DATE_INPUT_FORMAT = "MM/DD/YYYY",
  TIME_INPUT_FORMAT = "HH:MM:SS",
  DD_MM_YYYY = "DD-MM-YYYY",
  YYYY_DD_MM = "YYYY-DD-MM",
  YYYY_MM_DD = "YYYY-MM-DD",
  DD_MM_YY = "DD-MM-YY",
  YY_DD_MM = "YY-DD-MM",
  YY_MM_DD = "YY-MM-DD",
  DD_MM_YYYY_HH_MM_SS = "DD-MM-YYYY HH:MM:SS",
  YYYY_DD_MM_HH_MM_SS = "YYYY-DD-MM HH:MM:SS",
  YYYY_MM_DD_HH_MM_SS = "YYYY-MM-DD HH:MM:SS",
  DD_MM_YY_HH_MM_SS = "DD-MM-YY HH:MM:SS",
  YY_DD_MM_HH_MM_SS = "YY-DD-MM",
  YY_MM_DD_HH_MM_SS = "YY-MM-DD HH:MM:SS",
  DD__MM__YYYY = "DD/MM/YYYY",
  YYYY__DD__MM = "YYYY/DD/MM",
  YYYY__MM__DD = "YYYY/MM/DD",
  DD__MM__YY = "DD/MM/YY",
  YY__DD__MM = "YY/DD/MM",
  YY__MM__DD = "YY/MM/DD",
  DD__MM__YYYY_HH_MM_SS = "DD/MM/YYYY HH:MM:SS",
  YYYY__DD__MM_HH_MM_SS = "YYYY/DD/MM HH:MM:SS",
  YYYY__MM__DD_HH_MM_SS = "YYYY/MM/DD HH:MM:SS",
  DD__MM__YY_HH_MM_SS = "DD/MM/YY HH:MM:SS",
  YY__DD__MM_HH_MM_SS = "YY/DD/MM",
  YY__MM__DD_HH_MM_SS = "YY/MM/DD HH:MM:SS"
}

/**
 * Wrap the `Temporal.Instant` object so we can re-use it in other places
 */
export interface IDateTime extends Temporal.Instant, IBaseUtilityClass {
  /**
   * It returns the current `DateTime` object as a string for serialization
   * @returns A `string` to use for serialization
   */
  stringify(): string;
}

/**
 * Represents an HTTP method.
 */
export type HttpMethod =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";
export const HttpMethod = {
  GET: "GET" as HttpMethod,
  HEAD: "HEAD" as HttpMethod,
  POST: "POST" as HttpMethod,
  PUT: "PUT" as HttpMethod,
  DELETE: "DELETE" as HttpMethod,
  CONNECT: "CONNECT" as HttpMethod,
  OPTIONS: "OPTIONS" as HttpMethod,
  TRACE: "TRACE" as HttpMethod,
  PATCH: "PATCH" as HttpMethod
};

/**
 * Represents an HTTP file which will be transferred from or to a server.
 */
export type HttpFile = Blob & { readonly name: string };

declare const $NestedValue: unique symbol;
/**
 * @deprecated to be removed in the next major version
 */
export type NestedValue<TValue extends object = object> = {
  [$NestedValue]: never;
} & TValue;

interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
}
interface FileList {
  readonly length: number;
  item(index: number): File | null;
  [index: number]: File;
}

export type LiteralUnion<T extends U, U extends BaseType> =
  | T
  | (U & {
      _?: never;
    });

export type BaseType =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint;

export type BrowserNativeObject = Date | FileList | File;

export type EmptyObject = {
  [K in string | number]: never;
};

export type NonUndefined<T> = T extends undefined ? never : T;

export type DeepPartial<T> = T extends BrowserNativeObject | NestedValue
  ? T
  : {
      [K in keyof T]?: DeepPartial<T[K]>;
    };

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "\t",
  pipes: "|"
};

export interface HttpFetchApi {
  signal: AbortSignal;
  abort: (reason?: string) => void;
  dispatch: (action: any) => any;
  getState: () => unknown;
  extra: unknown;
  endpoint: string;
  type: "query" | "mutation";
  /**
   * Only available for queries: indicates if a query has been forced,
   * i.e. it would have been fetched even if there would already be a cache entry
   * (this does not mean that there is already a cache entry though!)
   *
   * This can be used to for example add a `Cache-Control: no-cache` header for
   * invalidated queries.
   */
  forced?: boolean;
}

export type HttpMediaTypes =
  | "application/json"
  | "application/octet-stream"
  | "application/x-www-form-urlencoded"
  | "text/plain"
  | "text/html"
  | "application/graphql-response+json";
export const HttpMediaTypes = {
  JSON: "application/json" as HttpMediaTypes,
  OCTET_STREAM: "application/octet-stream" as HttpMediaTypes,
  FORM: "application/x-www-form-urlencoded" as HttpMediaTypes,
  TEXT: "text/plain" as HttpMediaTypes,
  HTML: "text/html" as HttpMediaTypes,
  GRAPHQL_RESPONSE_JSON: "application/graphql-response+json" as HttpMediaTypes
};

export type HttpMethods = "DELETE" | "GET" | "HEAD" | "POST" | "PUT" | "PATCH";
export const HttpMethods = {
  DELETE: "DELETE" as HttpMethods,
  GET: "GET" as HttpMethods,
  HEAD: "HEAD" as HttpMethods,
  POST: "POST" as HttpMethods,
  PUT: "PUT" as HttpMethods,
  PATCH: "PATCH" as HttpMethods
};

export type CredentialOption = "include" | "same-origin" | "omit";

export type HttpHeaderTypes = "x-apikey" | "accept" | "content-type";
export const HttpHeaderTypes = {
  X_APIKEY: "x-apikey",
  ACCEPT: "accept",
  CONTENT_TYPE: "content-type"
};

export type Headers<
  TKey extends keyof (HttpHeaderTypes & any) = keyof (HttpHeaderTypes & any)
> = Record<AnyCase<TKey>, any>;

export type Rollback = Record<
  string,
  (initialValue: any, currentValue: any) => any
>;

export type QueryOptions = {
  credentials?: CredentialOption;
  method?: HttpMethods;
  headers?: Headers;
};

/**
 * Contains a page of results for message or presence history, stats, or REST presence requests. A `PaginatedResult` response from a REST API paginated query is also accompanied by metadata that indicates the relative queries available to the `PaginatedResult` object.
 */
export interface HttpPaginatedResult<T = any> {
  /**
   * Contains the current page of results; for example, an array of {@link Message} or {@link PresenceMessage} objects for a channel history request.
   */
  data: T[];

  /**
   * Amount of records returned by request
   */
  count: number;

  /**
   * Total amount of records in the view store
   */
  total: number;

  /**
   * Amount of records to offset the search request
   */
  offset: number;

  /**
   * Returns `true` if this page is the last page and returns `false` if there are more pages available by calling next available.
   *
   * @returns Whether or not this is the last page of results.
   */
  isLast: boolean;
}

/**
 * Contains a page of results for message or presence history, stats, or REST presence requests. A `PaginatedResult` response from a REST API paginated query is also accompanied by metadata that indicates the relative queries available to the `PaginatedResult` object.
 */
export interface HttpErrorResult {
  /**
   * The error code in HTTP header is sent in the response.
   */
  errorCode: number;

  /**
   * The error message sent in the response.
   */
  errorMessage: string;
}

export interface FileState extends File {
  fileId: string;
  type: string;
  dataUrl?: string;
  data?: string;
}

export type ServerFieldErrorStatus = "error" | "warning" | "info";
export const ServerFieldErrorStatus = {
  ERROR: "error" as ServerFieldErrorStatus,
  WARNING: "warning" as ServerFieldErrorStatus,
  INFO: "info" as ServerFieldErrorStatus
};

export interface ServerFieldError {
  /**
   * Status code of the server action
   */
  status: ServerFieldErrorStatus;

  /**
   * Result code of the server action
   */
  code?: string;

  /**
   * Result message of a server action
   */
  message: string;
}

export type ServerFieldErrors<
  TData = Record<string, any>,
  TKey extends keyof TData = keyof TData
> = Record<TKey, ServerFieldError>;

/**
 * Contains results for message or presence history, stats, or REST presence requests. A `ServerResult` response from a REST API paginated query is also accompanied by metadata that indicates the relative queries available to the `ServerResult` object.
 */
export interface ServerResult<TData = Record<string, any>> {
  /**
   * Contains the current page of results; for example, an array of {@link Message} or {@link PresenceMessage} objects for a channel history request.
   */
  data: TData;

  /**
   * Status code of the server action
   */
  status: number;

  /**
   * Result code of the server action
   */
  code?: string;

  /**
   * Result message of a server action
   */
  message?: string;

  /**
   * Field errors/warning/info returned as a result of the server call
   */
  fields?: ServerFieldErrors<TData>;
}

/**
 * Contains a page of results for message or presence history, stats, or REST presence requests. A `PaginatedServerResult` response from a REST API paginated query is also accompanied by metadata that indicates the relative queries available to the `PaginatedServerResult` object.
 */
export interface PaginatedServerResult<TData = Record<string, any>>
  extends ServerResult<TData[]> {
  /**
   * Amount of records returned by request
   */
  count: number;

  /**
   * Total amount of records in the view store
   */
  total: number;

  /**
   * Amount of records to offset the search request
   */
  offset: number;

  /**
   * Returns `true` if this page is the last page and returns `false` if there are more pages available by calling next available.
   *
   * @returns Whether or not this is the last page of results.
   */
  isLast: boolean;
}

export interface IIdentity<T = string> {
  id: T;
}

export interface IVersioned {
  version: number;
}

export interface ISequenced {
  /**
   * The sequence number (version, or event counter, etc.) of the record
   */
  sequence: number;
}

export interface IRelayTypeField {
  __typename: string;
}

export const CONFIG_TOKEN = Symbol.for("CONFIG_TOKEN");

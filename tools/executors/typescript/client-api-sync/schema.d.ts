export interface ClientApiSyncExecutorSchema {
  generator: string;
  additionalProperties?: string;
  globalProperties?: string;
  domainName: string;
  serviceName?: string;
  packageName: string;
  specJsonFile: string;
}

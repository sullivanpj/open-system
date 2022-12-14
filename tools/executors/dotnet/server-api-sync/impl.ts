import { ExecutorContext } from "@nrwl/devkit";
import { ConsoleLogger } from "@open-system/core-typescript-utilities";
import { existsSync } from "fs";
import Path from "path";
import { execute } from "../utilities";
import { ServerApiSyncExecutorSchema } from "./schema";

export default async function (
  options: ServerApiSyncExecutorSchema,
  context: ExecutorContext
) {
  try {
    ConsoleLogger.info("Executing server-api-sync executor...");
    ConsoleLogger.info(`Options: ${JSON.stringify(options, null, 2)}`);
    ConsoleLogger.info(`Current Directory: ${__dirname}`);

    const { domainName, serviceName, specJsonFile, generator, packageName } =
      options;

    const rootPath = context.root;
    const sourceRoot =
      context.projectName && context.workspace.projects
        ? context.workspace.projects[context.projectName].sourceRoot
        : `apps/apis/${serviceName ? serviceName : domainName}`;
    const projectName = context.projectName
      ? context.projectName
      : `apis-${serviceName ? serviceName : domainName}`;

    let result;
    if (!existsSync(Path.join(`${rootPath}/`, sourceRoot))) {
      ConsoleLogger.warn(
        `The file location ${Path.join(
          `${rootPath}/`,
          sourceRoot
        )} could no be found... Skipping deletes`
      );
    } else {
      ConsoleLogger.info("Clearing previously generated API");
      result = await execute(
        `rmdir /S /Q "${Path.join(rootPath, sourceRoot)}"`
      );
      if (result) {
        ConsoleLogger.error(result);
        return { success: false };
      }
      ConsoleLogger.info("Directory successfully cleared");
    }

    ConsoleLogger.success("Syncing Server API code...");

    const fullServiceName = `${
      serviceName
        ? serviceName.charAt(0).toUpperCase() + serviceName.slice(1)
        : domainName.charAt(0).toUpperCase() + domainName.slice(1)
    }Service.Api`;

    result = await execute(
      `java -cp tools/openapi/dotnet-server/target/open-system-dotnet-server-openapi-generator-1.0.0.jar;tools/openapi/openapi-generator-cli-6.2.1.jar org.openapitools.codegen.OpenAPIGenerator generate --input-spec=${specJsonFile} -g ${
        generator ?? "open-system-dotnet-server"
      } -o ${sourceRoot} --enable-post-process-file --global-property="apiDocs=true" --additional-properties="aspnetCoreVersion=7.0,buildTarget=program,licenseName=BSD 2-Clause License Simplified,licenseUrl=https://spdx.org/licenses/BSD-2-Clause.html,packageAuthors=Patrick Sullivan,packageCopyright=Copyright (c) 2022 Patrick Sullivan,packageDescription=A collection of ${
        serviceName ?? domainName
      } APIs used by the Open System repository,packageName=${packageName},packageTitle=OpenSystem,packageVersion=1.0.0,projectSdk=Microsoft.NET.Sdk.Web,operationIsAsync=true,operationResultTask=true,nullableReferenceTypes=true,isBasicBearer=true,pocoModels=false,useSwashbuckle=true,enumNameSuffix=Options,enumValueSuffix=,modelNameSuffix=Dto,generateAliasAsModel=true,domainName=${domainName},serviceName=${
        serviceName ?? domainName
      },fullServiceName=${fullServiceName},specJsonFile=${specJsonFile},sourceRoot=${sourceRoot}",dockerTag=${projectName}:latest,useDateTimeOffsetFlag=true,optionalEmitDefaultValuesFlag=true,projectName=${projectName},useNewtonsoft=false,useDefaultRouting=true `
    );

    if (result) {
      ConsoleLogger.error(`${result}`);
      return { success: false };
    }
    ConsoleLogger.success("Server API sync succeeded.");

    return { success: !result };
  } catch (e) {
    ConsoleLogger.error(
      `An error occurred syncing server API for ${context.projectName}`
    );
    ConsoleLogger.error(e);

    return { success: false };
  }
}

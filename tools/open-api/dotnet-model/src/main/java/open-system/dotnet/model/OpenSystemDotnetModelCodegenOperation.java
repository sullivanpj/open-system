

package opensystem.dotnet.model;

import org.openapitools.codegen.*;
import org.openapitools.codegen.model.*;
import org.openapitools.codegen.languages.*;
import io.swagger.models.properties.*;
import io.swagger.v3.parser.util.SchemaTypeUtil;

import java.util.*;
import java.io.File;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.github.benmanes.caffeine.cache.Ticker;
import com.google.common.base.CaseFormat;
import com.google.common.collect.ImmutableMap;
import com.samskivert.mustache.Mustache;
import com.samskivert.mustache.Mustache.Compiler;
import com.samskivert.mustache.Mustache.Lambda;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.text.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.tuple.Pair;
import org.openapitools.codegen.CodegenDiscriminator.MappedModel;
import org.openapitools.codegen.api.TemplatingEngineAdapter;
import org.openapitools.codegen.config.GlobalSettings;
import org.openapitools.codegen.examples.ExampleGenerator;
import org.openapitools.codegen.languages.RustServerCodegen;
import org.openapitools.codegen.meta.FeatureSet;
import org.openapitools.codegen.meta.GeneratorMetadata;
import org.openapitools.codegen.meta.Stability;
import org.openapitools.codegen.meta.features.*;
import org.openapitools.codegen.model.ModelMap;
import org.openapitools.codegen.model.ModelsMap;
import org.openapitools.codegen.model.OperationsMap;
import org.openapitools.codegen.serializer.SerializerUtils;
import org.openapitools.codegen.templating.MustacheEngineAdapter;
import org.openapitools.codegen.templating.mustache.*;
import org.openapitools.codegen.utils.ModelUtils;
import org.openapitools.codegen.utils.OneOfImplementorAdditionalData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.*;
import java.io.File;
import java.util.*;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentSkipListSet;
import java.util.concurrent.TimeUnit;
import java.util.function.Consumer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import io.swagger.v3.core.util.Json;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.Operation;
import io.swagger.v3.oas.models.PathItem;
import io.swagger.v3.oas.models.callbacks.Callback;
import io.swagger.v3.oas.models.examples.Example;
import io.swagger.v3.oas.models.headers.Header;
import io.swagger.v3.oas.models.media.*;
import io.swagger.v3.oas.models.parameters.*;
import io.swagger.v3.oas.models.responses.ApiResponse;
import io.swagger.v3.oas.models.responses.ApiResponses;
import io.swagger.v3.oas.models.security.OAuthFlow;
import io.swagger.v3.oas.models.security.OAuthFlows;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import io.swagger.v3.oas.models.servers.ServerVariable;
import io.swagger.v3.parser.util.SchemaTypeUtil;

import static org.openapitools.codegen.utils.OnceLogger.once;
import static org.openapitools.codegen.utils.StringUtils.*;
import com.google.common.collect.Sets;
import com.github.curiousoddman.rgxgen.*;
import com.github.curiousoddman.rgxgen.config.RgxGenProperties;
import com.github.curiousoddman.rgxgen.config.RgxGenOption;
import com.samskivert.mustache.Mustache;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.media.Schema;
import io.swagger.v3.parser.util.SchemaTypeUtil;
import org.openapitools.codegen.*;
import org.openapitools.codegen.meta.features.*;
import org.openapitools.codegen.model.ModelMap;
import org.openapitools.codegen.model.OperationMap;
import org.openapitools.codegen.model.OperationsMap;
import org.openapitools.codegen.utils.ModelUtils;
import org.openapitools.codegen.utils.URLPathUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.net.URL;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Arrays;

import static java.util.UUID.randomUUID;

public class OpenSystemDotnetModelCodegenOperation extends CodegenOperation {
    public String successResponseType;
    public String requestName;
    //public boolean isQuery;
    //public boolean isQueryById;
    public boolean isCommand;

    public List<OpenSystemDotnetModelCodegenParameter> allParams = new ArrayList<OpenSystemDotnetModelCodegenParameter>();
    public List<OpenSystemDotnetModelCodegenParameter> bodyParams = new ArrayList<OpenSystemDotnetModelCodegenParameter>();
    public List<OpenSystemDotnetModelCodegenParameter> pathParams = new ArrayList<OpenSystemDotnetModelCodegenParameter>();
    public List<OpenSystemDotnetModelCodegenParameter> queryParams = new ArrayList<OpenSystemDotnetModelCodegenParameter>();
    public List<OpenSystemDotnetModelCodegenParameter> headerParams = new ArrayList<OpenSystemDotnetModelCodegenParameter>();
    public List<OpenSystemDotnetModelCodegenParameter> implicitHeadersParams = new ArrayList<OpenSystemDotnetModelCodegenParameter>();
    public List<OpenSystemDotnetModelCodegenParameter> formParams = new ArrayList<OpenSystemDotnetModelCodegenParameter>();
    public List<OpenSystemDotnetModelCodegenParameter> cookieParams = new ArrayList<OpenSystemDotnetModelCodegenParameter>();
    public List<OpenSystemDotnetModelCodegenParameter> requiredParams = new ArrayList<OpenSystemDotnetModelCodegenParameter>();
    public List<OpenSystemDotnetModelCodegenParameter> optionalParams = new ArrayList<OpenSystemDotnetModelCodegenParameter>();
    public List<OpenSystemDotnetModelCodegenParameter> requiredAndNotNullableParams = new ArrayList<OpenSystemDotnetModelCodegenParameter>();


    /**
     * Check if act is query request
     *
     * @return true if act as Restful show method, false otherwise
     */
    /*public boolean isQuery() {
      if (!"GET".equalsIgnoreCase(httpMethod))
        return false;

     for (CodegenResponse response : responses)
      {
        if (Integer.parseInt(response.code) == 200)
          return !response.dataType.getClass().isArray();
      }

      return false;
    }*/

    /**
     * Check if act is query request
     *
     * @return true if act as Restful show method, false otherwise
     */
    /*public boolean isQueryById() {
        return "GET".equalsIgnoreCase(httpMethod) && !isQuery;
    }*/

    /**
     * Check if act is command request
     *
     * @return true if act as Restful show method, false otherwise
     */
    /*public boolean isCommand() {
        return !"GET".equalsIgnoreCase(httpMethod);
    }*/

    /**
     * Check if act as Restful show method
     *
     * @return true if act as Restful show method, false otherwise
     */
    public String requestName() {
      if (vendorExtensions != null &&
        vendorExtensions.containsKey("x-os-request-name")) {
          requestName = (String) vendorExtensions.get("x-os-request-name");
      }

      if (requestName == null) {
          if ("GET".equalsIgnoreCase(httpMethod)) {
            requestName = operationId + "Query";
          } else {
            requestName = operationId + "Command";
          }
      }

      return requestName;
    }

    /**
     * Check if act as Restful show method
     *
     * @return true if act as Restful show method, false otherwise
     */
    public String successResponseType() {
      for (CodegenResponse response : responses)
      {
        if (Integer.parseInt(response.code) == 200)
          return response.dataType.replace("&lt;",
            "<").replace("&gt;",
            ">");
      }

      return null;
    }

   /* public void copyFrom(CodegenOperation input) {
        this.hasAuthMethods = input.hasAuthMethods;
        this.hasConsumes = input.hasConsumes;
        this.hasProduces = input.hasProduces;
        this.hasParams = input.hasParams;
        this.hasOptionalParams = input.hasOptionalParams;
        this.hasRequiredParams = input.hasRequiredParams;
        this.returnTypeIsPrimitive = input.returnTypeIsPrimitive;
        this.returnSimpleType = input.returnSimpleType;
        this.subresourceOperation = input.subresourceOperation;
        this.isMap = input.isMap;
        this.isArray = input.isArray;
        this.isMultipart = input.isMultipart;
        this.isResponseBinary = input.isResponseBinary;
        this.isResponseFile = input.isResponseFile;
        this.isResponseOptional = input.isResponseOptional;
        this.hasReference = input.hasReference;
        this.hasDefaultResponse = input.hasDefaultResponse;
        this.hasErrorResponseObject = input.hasErrorResponseObject;
        this.isRestfulIndex = input.isRestfulIndex;
        this.isRestfulShow = input.isRestfulShow;
        this.isRestfulCreate = input.isRestfulCreate;
        this.isRestfulUpdate = input.isRestfulUpdate;
        this.isRestfulDestroy = input.isRestfulDestroy;
        this.isRestful = input.isRestful;
        this.isDeprecated = input.isDeprecated;
        this.isCallbackRequest = input.isCallbackRequest;
        this.uniqueItems = input.uniqueItems;
        this.returnProperty = input.returnProperty;
        this.responseHeaders = input.responseHeaders;
        this.path = input.path;
        this.operationId = input.operationId;
        this.returnType = input.returnType;
        this.httpMethod = input.httpMethod;
        this.returnBaseType = input.returnBaseType;
        this.returnContainer = input.returnContainer;
        this.summary = input.summary;
        this.unescapedNotes = input.unescapedNotes;
        this.notes = input.notes;
        this.baseName = input.baseName;
        this.defaultResponse = input.defaultResponse;
        this.discriminator = input.discriminator;
        this.consumes = input.consumes;
        this.produces = input.produces;
        this.prioritizedContentTypes = input.prioritizedContentTypes;
        this.servers = input.servers;
        this.bodyParam = input.bodyParam;
        this.allParams = input.allParams;
        this.bodyParams = input.bodyParams;
        this.pathParams = input.pathParams;
        this.queryParams = input.queryParams;
        this.headerParams = input.headerParams;
        this.formParams = input.formParams;
        this.cookieParams = input.cookieParams;
        this.requiredParams = input.requiredParams;
        this.optionalParams = input.optionalParams;
        this.requiredAndNotNullableParams = input.requiredAndNotNullableParams;
        this.authMethods = input.authMethods;
        this.tags = input.tags;
        this.responses = input.responses;
        this.callbacks = input.callbacks;
        this.imports = input.imports;
        this.examples = input.examples;
        this.requestBodyExamples = input.requestBodyExamples;
        this.externalDocs = input.externalDocs;
        this.vendorExtensions = input.vendorExtensions;
        this.nickname = input.nickname;
        this.operationIdOriginal = input.operationIdOriginal;
        this.operationIdLowerCase = input.operationIdLowerCase;
        this.operationIdCamelCase = input.operationIdCamelCase;
        this.operationIdSnakeCase = input.operationIdSnakeCase;

        this.successResponseType = this.successResponseType();
        this.requestName = this.requestName();

    }*/

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("OpenSystemDotnetModelCodegenOperation{");
        sb.append("responseHeaders=").append(responseHeaders);
        sb.append(", hasAuthMethods=").append(hasAuthMethods);
        sb.append(", hasConsumes=").append(hasConsumes);
        sb.append(", hasProduces=").append(hasProduces);
        sb.append(", hasParams=").append(hasParams);
        sb.append(", hasOptionalParams=").append(hasOptionalParams);
        sb.append(", hasRequiredParams=").append(hasRequiredParams);
        sb.append(", returnTypeIsPrimitive=").append(returnTypeIsPrimitive);
        sb.append(", returnSimpleType=").append(returnSimpleType);
        sb.append(", subresourceOperation=").append(subresourceOperation);
        sb.append(", isMap=").append(isMap);
        sb.append(", returnProperty=").append(returnProperty);
        sb.append(", isArray=").append(isArray);
        sb.append(", isMultipart=").append(isMultipart);
        sb.append(", isResponseBinary=").append(isResponseBinary);
        sb.append(", isResponseFile=").append(isResponseFile);
        sb.append(", isResponseOptional=").append(isResponseOptional);
        sb.append(", hasReference=").append(hasReference);
        sb.append(", hasDefaultResponse=").append(hasDefaultResponse);
        sb.append(", hasErrorResponseObject=").append(hasErrorResponseObject);
        sb.append(", isRestfulIndex=").append(isRestfulIndex);
        sb.append(", isRestfulShow=").append(isRestfulShow);
        sb.append(", isRestfulCreate=").append(isRestfulCreate);
        sb.append(", isRestfulUpdate=").append(isRestfulUpdate);
        sb.append(", isRestfulDestroy=").append(isRestfulDestroy);
        sb.append(", isRestful=").append(isRestful);
        sb.append(", isDeprecated=").append(isDeprecated);
        sb.append(", isCallbackRequest=").append(isCallbackRequest);
        sb.append(", uniqueItems='").append(uniqueItems);
        sb.append(", path='").append(path).append('\'');
        sb.append(", operationId='").append(operationId).append('\'');
        sb.append(", returnType='").append(returnType).append('\'');
        sb.append(", httpMethod='").append(httpMethod).append('\'');
        sb.append(", returnBaseType='").append(returnBaseType).append('\'');
        sb.append(", returnContainer='").append(returnContainer).append('\'');
        sb.append(", summary='").append(summary).append('\'');
        sb.append(", unescapedNotes='").append(unescapedNotes).append('\'');
        sb.append(", notes='").append(notes).append('\'');
        sb.append(", baseName='").append(baseName).append('\'');
        sb.append(", defaultResponse='").append(defaultResponse).append('\'');
        sb.append(", discriminator=").append(discriminator);
        sb.append(", consumes=").append(consumes);
        sb.append(", produces=").append(produces);
        sb.append(", prioritizedContentTypes=").append(prioritizedContentTypes);
        sb.append(", servers=").append(servers);
        sb.append(", bodyParam=").append(bodyParam);
        sb.append(", allParams=").append(allParams);
        sb.append(", bodyParams=").append(bodyParams);
        sb.append(", pathParams=").append(pathParams);
        sb.append(", queryParams=").append(queryParams);
        sb.append(", headerParams=").append(headerParams);
        sb.append(", formParams=").append(formParams);
        sb.append(", cookieParams=").append(cookieParams);
        sb.append(", requiredParams=").append(requiredParams);
        sb.append(", optionalParams=").append(optionalParams);
        sb.append(", requiredAndNotNullableParams=").append(requiredAndNotNullableParams);
        sb.append(", authMethods=").append(authMethods);
        sb.append(", tags=").append(tags);
        sb.append(", responses=").append(responses);
        sb.append(", callbacks=").append(callbacks);
        sb.append(", imports=").append(imports);
        sb.append(", examples=").append(examples);
        sb.append(", requestBodyExamples=").append(requestBodyExamples);
        sb.append(", externalDocs=").append(externalDocs);
        sb.append(", vendorExtensions=").append(vendorExtensions);
        sb.append(", nickname='").append(nickname).append('\'');
        sb.append(", operationIdOriginal='").append(operationIdOriginal).append('\'');
        sb.append(", operationIdLowerCase='").append(operationIdLowerCase).append('\'');
        sb.append(", operationIdCamelCase='").append(operationIdCamelCase).append('\'');
        sb.append(", operationIdSnakeCase='").append(operationIdSnakeCase).append('\'');
        sb.append(", successResponseType='").append(successResponseType).append('\'');
        sb.append(", requestName='").append(requestName).append('\'');
        sb.append(", isCommand='").append(isCommand).append('\'');
        //sb.append(", isQuery='").append(isQuery).append('\'');
        //sb.append(", isQueryById='").append(isQueryById).append('\'');

        sb.append('}');
        return sb.toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OpenSystemDotnetModelCodegenOperation that = (OpenSystemDotnetModelCodegenOperation) o;
        return super.equals(that) &&
          Objects.equals(successResponseType, that.successResponseType) &&
          Objects.equals(requestName, that.requestName);
    }

    @Override
    public int hashCode() {

        return Objects.hash(responseHeaders, hasAuthMethods, hasConsumes, hasProduces, hasParams, hasOptionalParams,
                hasRequiredParams, returnTypeIsPrimitive, returnSimpleType, subresourceOperation, isMap,
                isArray, isMultipart, isResponseBinary, isResponseFile, isResponseOptional, hasReference,
                hasDefaultResponse, isRestfulIndex, isRestfulShow, isRestfulCreate, isRestfulUpdate, isRestfulDestroy,
                isRestful, isDeprecated, isCallbackRequest, uniqueItems, path, operationId, returnType, httpMethod,
                returnBaseType, returnContainer, summary, unescapedNotes, notes, baseName, defaultResponse,
                discriminator, consumes, produces, prioritizedContentTypes, servers, bodyParam, allParams, bodyParams,
                pathParams, queryParams, headerParams, formParams, cookieParams, requiredParams, returnProperty, optionalParams,
                authMethods, tags, responses, callbacks, imports, examples, requestBodyExamples, externalDocs,
                vendorExtensions, nickname, operationIdOriginal, operationIdLowerCase, operationIdCamelCase,
                operationIdSnakeCase, hasErrorResponseObject, requiredAndNotNullableParams, successResponseType, requestName);
    }
}

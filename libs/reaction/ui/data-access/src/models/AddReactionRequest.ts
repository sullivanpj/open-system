/**
 * Reaction APIs
 * A collection of APIs used to get and set user reactions and comments for an article/page 
 *
 * OpenAPI spec version: 1
 * Contact: Patrick.Joseph.Sullivan@protonmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  HttpFile,
} from '@open-system/core-typescript-utilities';


export class AddReactionRequest {
    'type': AddReactionRequestTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AddReactionRequestTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddReactionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AddReactionRequestTypeEnum = "like" | "unlike" | "cry" | "laugh" ;

export const AddReactionRequestTypeEnum = {
   LIKE: "like" as AddReactionRequestTypeEnum , UNLIKE: "unlike" as AddReactionRequestTypeEnum , CRY: "cry" as AddReactionRequestTypeEnum , LAUGH: "laugh" as AddReactionRequestTypeEnum 
}

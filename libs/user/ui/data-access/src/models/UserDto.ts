/**
 * User APIs
 * A collection of APIs used to get and set user related data 
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


export class UserDto {
    /**
    * The `guid` associated with the record
    */
    'guid': string;
    'createdOn': Date;
    'createdBy': string;
    'updatedOn'?: Date;
    'updatedBy'?: string;
    /**
    * The unique Id used to identify the user
    */
    'userId': string;
    /**
    * The display name of the user
    */
    'name': string;
    'type': string;
    'lastVisitDateTime'?: Date;
    'visitCount': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedOn",
            "baseName": "updatedOn",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedBy",
            "baseName": "updatedBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastVisitDateTime",
            "baseName": "lastVisitDateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "visitCount",
            "baseName": "visitCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserDto.attributeTypeMap;
    }

    public constructor() {
    }
}


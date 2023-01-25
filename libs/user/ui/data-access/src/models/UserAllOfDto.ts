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


export class UserAllOfDto {
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
        return UserAllOfDto.attributeTypeMap;
    }

    public constructor() {
    }
}


/**
 * Engagement
 * A collection of APIs used to get and set user reactions and comments for an article/page 
 *
 * OpenAPI spec version: 1.0
 * Contact: Patrick.Joseph.Sullivan@protonmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  HttpFile,
} from '@open-system/core-typescript-utilities';


export class ReactionDetailDto {
    'type': ReactionDetailDtoTypeDtoEnum;
    'count': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ReactionDetailDtoTypeDtoEnum",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReactionDetailDto.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ReactionDetailDtoTypeDtoEnum = "LIKE" | "DISLIKE" ;


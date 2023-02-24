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

import { ReactionCountRecord } from './ReactionCountRecord';
import {
  HttpFile,
} from '@open-system/core-typescript-utilities';


export class GetReactionsCount200Response {
    'data'?: Array<ReactionCountRecord>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ReactionCountRecord>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetReactionsCount200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

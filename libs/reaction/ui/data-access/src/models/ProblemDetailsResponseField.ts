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


export class ProblemDetailsResponseField {
    'name': string;
    'errors': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProblemDetailsResponseField.attributeTypeMap;
    }

    public constructor() {
    }
}

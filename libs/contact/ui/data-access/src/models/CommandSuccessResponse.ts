/**
 * Contact APIs
 * A collection of APIs used to get and set contact related data 
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


/**
* A response returned from the server when data is successfully updated
*/
export class CommandSuccessResponse {
    /**
    * The `guid` associated with the record
    */
    'id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return CommandSuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


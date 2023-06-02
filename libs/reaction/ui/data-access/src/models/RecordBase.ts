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
} from '@open-system/core-utilities';


/**
* The minimum model fields shared by all data stored in the database
*/
export class RecordBase {
    /**
    * The `guid` associated with the record
    */
    'id': string;
    'createdOn': Date;
    'createdBy': string;
    'updatedOn'?: Date;
    'updatedBy'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
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
        }    ];

    static getAttributeTypeMap() {
        return RecordBase.attributeTypeMap;
    }

    public constructor() {
    }
}


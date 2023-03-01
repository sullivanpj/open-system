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

import { ContactRecord } from './ContactRecord';
import {
  HttpFile,
} from '@open-system/core-typescript-utilities';


export class GetContacts200ResponseAllOf {
    'data': Array<ContactRecord>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ContactRecord>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetContacts200ResponseAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

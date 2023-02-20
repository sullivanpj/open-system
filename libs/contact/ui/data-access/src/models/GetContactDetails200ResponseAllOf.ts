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

import { ContactDetailRecord } from './ContactDetailRecord';
import {
  HttpFile,
} from '@open-system/core-typescript-utilities';


export class GetContactDetails200ResponseAllOf {
    'data': Array<ContactDetailRecord>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ContactDetailRecord>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetContactDetails200ResponseAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


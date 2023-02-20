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


export class GetContactDetails200Response {
    /**
    * The current page number of the selected data
    */
    'pageNumber': number;
    /**
    * The size of the current page
    */
    'pageSize': number;
    /**
    * The total number of records in the data set
    */
    'recordsTotal': number;
    /**
    * The number of records filtered from the data set
    */
    'recordsFiltered': number;
    'data': Array<ContactDetailRecord>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": ""
        },
        {
            "name": "recordsTotal",
            "baseName": "recordsTotal",
            "type": "number",
            "format": ""
        },
        {
            "name": "recordsFiltered",
            "baseName": "recordsFiltered",
            "type": "number",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ContactDetailRecord>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetContactDetails200Response.attributeTypeMap;
    }

    public constructor() {
    }
}


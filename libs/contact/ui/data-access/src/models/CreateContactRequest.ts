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


export class CreateContactRequest {
    'firstName'?: string;
    'lastName'?: string;
    'phoneNumber'?: string;
    /**
    * The email address of the contact
    */
    'email': string;
    'isSubscribed': boolean;
    'addressLine1'?: string;
    'addressLine2'?: string;
    'city'?: string;
    'state'?: string;
    'countryCode'?: string;
    'postalCode'?: string;
    'companyName'?: string;
    'title'?: string;
    /**
    * The type of contact request
    */
    'reason': CreateContactRequestReasonEnum;
    'details'?: string;
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": "email"
        },
        {
            "name": "isSubscribed",
            "baseName": "isSubscribed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "addressLine1",
            "baseName": "addressLine1",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressLine2",
            "baseName": "addressLine2",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "CreateContactRequestReasonEnum",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": "uri"
        }    ];

    static getAttributeTypeMap() {
        return CreateContactRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CreateContactRequestReasonEnum = "business" | "question" | "other" | "project" | "interest" | "subscription" ;


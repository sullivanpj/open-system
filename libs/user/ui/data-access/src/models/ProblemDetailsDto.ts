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


/**
* A model for API errors inline with the [RFC 7807](https://www.rfc-editor.org/rfc/rfc7807) specification.
*/
export class ProblemDetailsDto {
    /**
    * A URI reference [RFC3986](https://www.rfc-editor.org/rfc/rfc3986) that identifies the problem type. This specification encourages that, when dereferenced, it provide human-readable documentation for the problem type (e.g., using HTML [W3C.REC-html5-20141028](https://www.rfc-editor.org/rfc/rfc7807#ref-W3C.REC-html5-20141028)). When this member is not present, its value is assumed to be `about:blank`.
    */
    'type': string;
    /**
    * A short, human-readable summary of the problem type. It **SHOULD NOT** change from occurrence to occurrence of the pro**blem, except for purposes of localization (e.g., using proactive content negotiation; see [RFC7231, Section 3.4](https://www.rfc-editor.org/rfc/rfc7231#section-3.4)).
    */
    'title'?: string;
    /**
    * A human-readable explanation specific to this occurrence of the problem.
    */
    'detail'?: string;
    /**
    * A URI reference that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced.
    */
    'instance'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
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
            "name": "detail",
            "baseName": "detail",
            "type": "string",
            "format": ""
        },
        {
            "name": "instance",
            "baseName": "instance",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProblemDetailsDto.attributeTypeMap;
    }

    public constructor() {
    }
}


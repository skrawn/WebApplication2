// tslint:disable
/**
 * Weather Forecast
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ComplexResponse,
    ComplexResponseFromJSON,
    ComplexResponseFromJSONTyped,
    ComplexResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface ControllerResponseComplexResponse
 */
export interface ControllerResponseComplexResponse {
    /**
     * 
     * @type {ComplexResponse}
     * @memberof ControllerResponseComplexResponse
     */
    data?: ComplexResponse;
    /**
     * 
     * @type {string}
     * @memberof ControllerResponseComplexResponse
     */
    error?: string;
}

export function ControllerResponseComplexResponseFromJSON(json: any): ControllerResponseComplexResponse {
    return ControllerResponseComplexResponseFromJSONTyped(json, false);
}

export function ControllerResponseComplexResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ControllerResponseComplexResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ComplexResponseFromJSON(json['data']),
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function ControllerResponseComplexResponseToJSON(value?: ControllerResponseComplexResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ComplexResponseToJSON(value.data),
        'error': value.error,
    };
}



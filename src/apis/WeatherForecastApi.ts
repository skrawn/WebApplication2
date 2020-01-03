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


import * as runtime from '../runtime';
import {
    ControllerResponseComplexResponse,
    ControllerResponseComplexResponseFromJSON,
    ControllerResponseComplexResponseToJSON,
    WeatherForecast,
    WeatherForecastFromJSON,
    WeatherForecastToJSON,
} from '../models';

/**
 * no description
 */
export class WeatherForecastApi extends runtime.BaseAPI {

    /**
     */
    async getRaw(): Promise<runtime.ApiResponse<Array<WeatherForecast>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/WeatherForecast`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WeatherForecastFromJSON));
    }

    /**
     */
    async get(): Promise<Array<WeatherForecast>> {
        const response = await this.getRaw();
        return await response.value();
    }

    /**
     */
    async getGarbageRaw(): Promise<runtime.ApiResponse<ControllerResponseComplexResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/WeatherForecast/complex`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ControllerResponseComplexResponseFromJSON(jsonValue));
    }

    /**
     */
    async getGarbage(): Promise<ControllerResponseComplexResponse> {
        const response = await this.getGarbageRaw();
        return await response.value();
    }

}

import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
let WeatherApiService = class WeatherApiService {
    //"https://openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22&id=281184&units=metric";
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.SERVER_URL = "https://openweathermap.org/data/2.5/weather";
    }
    getRequestWithParams() {
        let param = new HttpParams();
        param = param.append('appid', "b6907d289e10d714a6e88b30761fae22");
        param = param.append('units', "metric");
        param = param.append('id', "281184");
        return this.httpClient.get(this.SERVER_URL, { params: param });
    }
};
WeatherApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], WeatherApiService);
export { WeatherApiService };
//# sourceMappingURL=weather-api.service.js.map
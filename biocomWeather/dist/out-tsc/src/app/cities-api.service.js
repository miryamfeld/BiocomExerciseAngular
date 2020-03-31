import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CitiesApiService = class CitiesApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.SERVER_URL = "http://localhost:3000";
    }
    getCities() {
        return this.httpClient.get(this.SERVER_URL);
    }
};
CitiesApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CitiesApiService);
export { CitiesApiService };
//# sourceMappingURL=cities-api.service.js.map
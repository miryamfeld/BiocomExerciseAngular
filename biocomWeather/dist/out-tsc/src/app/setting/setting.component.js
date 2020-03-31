import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SettingComponent = class SettingComponent {
    constructor(citiesService) {
        this.citiesService = citiesService;
        this.cities = [];
    }
    ngOnInit() {
        this.citiesService.getCities().subscribe((data) => {
            console.log(data);
            this.cities = data;
        });
    }
};
SettingComponent = __decorate([
    Component({
        selector: 'app-setting',
        templateUrl: './setting.component.html',
        styleUrls: ['./setting.component.css']
    })
], SettingComponent);
export { SettingComponent };
//# sourceMappingURL=setting.component.js.map
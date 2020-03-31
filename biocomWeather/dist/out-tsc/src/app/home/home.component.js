import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';
let HomeComponent = class HomeComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.curWeather = new WeatherData();
    }
    ngOnInit() {
        this.weatherService.getRequestWithParams().subscribe((data) => {
            console.log(data);
            if (data != null)
                this.initWeatherData(data);
        });
    }
    initWeatherData(data) {
        this.curWeather.cityId = data.id;
        this.curWeather.cityName = data.name;
        this.curWeather.tempature = data.main.temp;
        this.curWeather.tempaUnit = 0;
        this.curWeather.tempaDesc = data.weather[0].description;
        this.curWeather.iconId = data.weather[0].icon;
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map
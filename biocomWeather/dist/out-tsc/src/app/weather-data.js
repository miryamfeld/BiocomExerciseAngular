var tempatureUnits;
(function (tempatureUnits) {
    tempatureUnits[tempatureUnits["C"] = 0] = "C";
    tempatureUnits[tempatureUnits["F"] = 1] = "F";
})(tempatureUnits || (tempatureUnits = {}));
export class WeatherData {
    get cityId() {
        return this._cityId;
    }
    set cityId(id) {
        this._cityId = id;
    }
    get cityName() {
        return this._cityName;
    }
    set cityName(name) {
        this._cityName = name;
    }
    get tempature() {
        return this._tempature;
    }
    set tempature(tempa) {
        this._tempature = tempa;
    }
    get tempaUnit() {
        return this._tempatureUnit;
    }
    set tempaUnit(unit) {
        this._tempatureUnit = unit;
    }
    get tempaDesc() {
        return this._tempaDesc;
    }
    set tempaDesc(description) {
        this._tempaDesc = description;
    }
    get iconId() {
        return this._iconId;
    }
    set iconId(id) {
        this._iconId = id;
    }
}
//# sourceMappingURL=weather-data.js.map
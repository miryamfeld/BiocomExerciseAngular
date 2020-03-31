
export class WeatherData {
    private _cityId: number;
    private _cityName: string;
    private _tempature: number;
    private _tempatureUnit: string;
    private _tempaDesc: string;
    private _iconId: number; 

    get cityId(): number {
        return this._cityId;
    }
    set cityId(id: number) {            
        this._cityId = id;
    }

    get cityName(): string {
        return this._cityName;
    }
    set cityName(name: string) {            
        this._cityName = name;
    }

    get tempature(): number {
        return this._tempature;
    }
    set tempature(tempa: number) {            
        this._tempature = tempa;
    }

    get tempaUnit(): string {
        return this._tempatureUnit;
    }
    set tempaUnit(unit: string) {                    
        this._tempatureUnit = unit;
    }

    get tempaDesc(): string {
        return this._tempaDesc;
    }
    set tempaDesc(description: string) {                    
        this._tempaDesc = description;
    }

    get iconId(): number {
        return this._iconId;
    }
    set iconId(id: number) {                    
        this._iconId = id;
    }
 
}

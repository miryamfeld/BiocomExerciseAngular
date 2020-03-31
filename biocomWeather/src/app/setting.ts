import { Injectable } from '@angular/core';

@Injectable()
export class Setting {
    CityId: string;
    KindValue: string;
    settingVisible: boolean;

    constructor(){
        this.CityId = "281184";
        this.KindValue = "metric";
        this.settingVisible= true;
    }
}

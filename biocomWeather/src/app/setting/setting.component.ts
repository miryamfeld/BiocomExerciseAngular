import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import *  as  citiesList  from  '../db-cities.json';
//import { TempatureKinds } from '../tempature-kinds.enum';
import { Setting } from '../setting';
import { Router } from "@angular/router";

@Component({
  selector: 'app-setting',
  providers: [Setting],
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  cities: any = (citiesList as any).default;  
  tempatureKinds = [{id: "metric", desc: "Celsius"}, {id: "imperial" , desc: "Fahrenheit"}];

  setting: any;
  isSave: boolean = false;
 
  constructor(private weatherService: WeatherApiService, private router: Router,
     public defaultSetting: Setting) { 
        defaultSetting.settingVisible = false;
      }

  ngOnInit(): void {   
  }

  SettingChanged() { 
    this.isSave = true;       
   }

  BackOnClick() {
    if(this.isSave)
      this.router.navigate(
        ['/home', { cityId: this.defaultSetting.CityId, 
        tempraKind: this.defaultSetting.KindValue }]
    )
    else
      this.router.navigate(['/home']);
   }
}


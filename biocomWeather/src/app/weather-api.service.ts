import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Setting } from './setting';
import {WeatherData} from './weather-data'

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private SERVER_URL = "https://openweathermap.org/data/2.5/weather";
  //"https://openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22&id=281184&units=metric";

  constructor(private http: HttpClient) { } 

  public geWeathertData(setting: Setting):Observable<WeatherData>{  
    let param = new HttpParams();
    param = param.append('appid', "b6907d289e10d714a6e88b30761fae22");
    param = param.append('units', setting.KindValue);
    param = param.append('id', setting.CityId);
    return this.http.get<WeatherData>(this.SERVER_URL, {params: param});  
  } 
}


  
  
 



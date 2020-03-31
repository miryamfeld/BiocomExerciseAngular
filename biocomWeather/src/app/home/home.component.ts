import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { WeatherData } from '../weather-data';
import { TempatureKinds } from '../tempature-kinds.enum';
import { Setting } from '../setting';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  providers: [Setting],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  curWeather: WeatherData = new WeatherData();
  subscription: Subscription; 

  constructor(private weatherService: WeatherApiService, 
    private route: ActivatedRoute,
    private setting: Setting) {  
      setting.settingVisible = true;
  }

  ngOnInit(): void { 
    
    this.subscription = this.route.paramMap.subscribe(params => 
      {  
        if (params.get('cityId') != null)
          this.setting.CityId = params.get('cityId');
        if (params.get('tempraKind') != null)
          this.setting.KindValue = params.get('tempraKind');
      }
    )       

    this.getWeatherData();  
  }

  getWeatherData(): void {
    this.weatherService.geWeathertData(this.setting).subscribe(
      value =>{
        console.log(value);
        this.initWeatherData(value);
      }
    )  
  }

  initWeatherData(data): void {
    this.curWeather.cityId = data.id;
    this.curWeather.cityName = data.name;
    this.curWeather.tempature = data.main.temp;
    this.curWeather.tempaUnit = this.setting.KindValue == TempatureKinds.Celsius ? 'C' : 'F';
    this.curWeather.tempaDesc = data.weather[0].description;
    this.curWeather.iconId = data.weather[0].icon;
  }

  ngOnDestroy() {  
    this.subscription.unsubscribe();  
  }
}






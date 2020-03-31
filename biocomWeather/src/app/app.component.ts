import { Component } from '@angular/core';
import { Setting } from './setting'

@Component({
  selector: 'app-root',
  providers: [Setting],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biocomWeather';
  constructor(public setting: Setting){}
}

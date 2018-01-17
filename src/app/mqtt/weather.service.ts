import { Injectable } from '@angular/core';
import { WEATHERS } from './mock.weathers';

@Injectable()
export class WeatherService {

  constructor() { }
  getWeather() {
    return WEATHERS;
  }
}

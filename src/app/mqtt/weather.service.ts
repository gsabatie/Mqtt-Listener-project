import { Injectable } from "@angular/core";
import { WEATHERS } from "./mock.weathers";
import { Observable } from "rxjs/Observable";

import { MQTTService } from "./service";
@Injectable()
export class WeatherService extends MQTTService {
  getWeatherdata() {
    return super.getdata("weather");
  }
}

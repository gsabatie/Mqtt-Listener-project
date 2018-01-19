import { Injectable } from "@angular/core";
import { LIGTH } from "./mock.ligth";
import { MqttService, MqttMessage } from "ngx-mqtt";
import { Observable } from "rxjs/Observable";

import { MQTTService } from "./service";
@Injectable()
export class HumidityService extends MQTTService {
  getHumiditydata() {
    return super.getdata("IoT/humidity");
  }
}

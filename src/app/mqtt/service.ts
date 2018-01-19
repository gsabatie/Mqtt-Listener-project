import { Injectable } from "@angular/core";
import { LIGTH } from "./mock.ligth";
import { MqttService, MqttMessage } from "ngx-mqtt";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MQTTService {
  constructor(private _mqttService: MqttService) {
    this._mqttService = _mqttService;
  }

  getdata(channel: string) {
    return this._mqttService.observe(channel);
  }
  test() {
    alert("mqtt");
    this._mqttService.unsafePublish("light", "message", {
      qos: 0,
      retain: true
    });
  }
}

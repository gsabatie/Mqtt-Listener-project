import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatSelectModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatOptionModule
} from "@angular/material";
import { ChartistModule } from "ng-chartist";
import { AppComponent } from "./app.component";

import {
  MqttMessage,
  MqttModule,
  MqttService,
  MqttServiceOptions,
  OnMessageEvent
} from "ngx-mqtt";

export const MQTT_SERVICE_OPTIONS: MqttServiceOptions = {
  hostname: "m23.cloudmqtt.com",
  port: 31030
};

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatOptionModule,
    MatToolbarModule,
    ChartistModule,
    MqttModule.forRoot({
      provide: MqttService,

      useFactory: mqttServiceFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

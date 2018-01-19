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

import { ChartsModule } from "ng2-charts";
import { AppComponent } from "./app.component";

import {
  MqttMessage,
  MqttModule,
  MqttService,
  MqttServiceOptions,
  OnMessageEvent
} from "ngx-mqtt";

export const MQTT_SERVICE_OPTIONS: MqttServiceOptions = {
  hostname: "test.mosquitto.org",
  port: 8080,
  path: "/mqtt"
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
    ChartsModule,
    MqttModule.forRoot({
      provide: MqttService,

      useFactory: mqttServiceFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

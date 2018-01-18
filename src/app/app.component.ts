import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
  AfterContentInit
} from "@angular/core";
import * as Chartist from "chartist";
import chartistComponent, {
  ChartistComponent,
  ChartType,
  ChartEvent,
  ChartistModule
} from "ng-chartist";

import { MqttService, MqttMessage } from "ngx-mqtt";

import { WeatherService } from "./mqtt/weather.service";
import { LigthService } from "./mqtt/ligth.service";
import { HumidityService } from "./mqtt/humidity.service";

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: "app-root",
  providers: [WeatherService, LigthService, HumidityService],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Dashboard";

  chart: Chart;
  temperatureData: any;
  humidyData: any;
  lightData: any;
  weatherData: any;

  chartistComponent: ChartistComponent;

  chartData: any;
  chartOptions: any;
  chartType: String;

  weatherService: WeatherService;
  humidityService: HumidityService;
  ligthService: LigthService;

  shouldHideHumidityLine: Boolean;
  shouldHideWeatherLine: Boolean;
  shouldHideLigthLine: Boolean;

  constructor(
    weathers: WeatherService,
    ligth: LigthService,
    humidity: HumidityService
  ) {
    this.weatherService = weathers;
    this.ligthService = ligth;
    this.humidityService = humidity;
    this.chartOptions = {
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      height: "400px",
      axisX: {
        showLabel: false,
        showGrid: false
      }
    };

    this.chartType = "Line";
    this.chartData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: []
    };
    this.subscribeChannel();
  }

  reloadChart(data: any) {
    this.chartData = data;
  }

  onCheckBoxChange() {
    this.updateData();
  }

  subscribeChannel() {
    this.ligthService.getLightdata().subscribe((message: MqttMessage) => {
      alert(message.payload.toString());
    });

    // this.weatherService.getWeatherdata().subscribe((message: MqttMessage) => {
    //   alert(message.payload.toString());
    // });

    // this.humidityService.getHumiditydata().subscribe((message: MqttMessage) => {
    //   alert(message.payload.toString());
    // });
  }

  updateData() {
    this.ligthService.test();
    const data = { labels: [1, 2, 3, 4, 5, 6, 7, 8], series: [] };
    // if (this.shouldHideHumidityLine === false) {
    //   data.series.push(this.humidyData);
    // }
    // if (this.shouldHideWeatherLine === false) {
    //   data.series.push(this.weatherData);
    // }
    // if (this.shouldHideLigthLine === false) {
    //   data.series.push(this.lightData);
    // }
    // this.reloadChart(data);
  }

  onHumidityCheckboxChange($event) {
    this.shouldHideHumidityLine = !this.shouldHideHumidityLine;
    this.onCheckBoxChange();
  }

  onWeatherCheckboxChange($event) {
    this.shouldHideWeatherLine = !this.shouldHideWeatherLine;
    this.onCheckBoxChange();
  }

  onLigthCheckboxChange($event) {
    this.shouldHideLigthLine = !this.shouldHideLigthLine;
    this.onCheckBoxChange();
  }
}

import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
  AfterContentInit
} from "@angular/core";

import { MqttService, MqttMessage } from "ngx-mqtt";

import { WeatherService } from "./mqtt/weather.service";
import { LigthService } from "./mqtt/ligth.service";
import { HumidityService } from "./mqtt/humidity.service";

@Component({
  selector: "app-root",
  providers: [WeatherService, LigthService, HumidityService],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Dashboard";

  weatherData = { labels: [], series: [[]] };
  humidityData = { labels: [], series: [[]] };
  lightData = { labels: [], series: [[]] };

  chartData: any;
  chartOptions: any;
  chartType: String;

  weatherService: WeatherService;
  humidityService: HumidityService;
  ligthService: LigthService;

  shouldHideHumidityLine: Boolean;
  shouldHideWeatherLine: Boolean;
  shouldHideLigthLine: Boolean;

  selected = "light";

  constructor(
    private mqtt: MqttService,
    weathers: WeatherService,
    ligth: LigthService,
    humidity: HumidityService
  ) {
    this.weatherService = weathers;
    this.ligthService = ligth;
    this.humidityService = humidity;
    this.shouldHideLigthLine = false;
    this.shouldHideHumidityLine = true;
    this.shouldHideWeatherLine = true;
    this.chartOptions = { responsive: true };

    this.chartType = "Line";
    this.subscribeChannel();
  }

  reloadChart(data: any, labels: string[], title: string) {
    this.lineChartData[0].data = data;
    this.lineChartData[0].label = title;
    this.lineChartLabels = labels;
  }

  onChangeSelect() {
    this.updateData();
  }
  subscribeChannel() {
    this.ligthService.getLightdata().subscribe((message: MqttMessage) => {
      this.lightData.labels.push(Date());
      this.lightData.series[0].push(parseInt(message.payload.toString()));
      //this.lightData.datapush(parseInt(message.payload.toString()));
      this.updateData();
    });

    this.weatherService.getWeatherdata().subscribe((message: MqttMessage) => {
      this.weatherData.labels.push(Date());
      this.weatherData.series[0].push(parseInt(message.payload.toString()));
      //this.weatherData.push(parseInt(message.payload.toString()));
      this.updateData();
    });

    this.humidityService.getHumiditydata().subscribe((message: MqttMessage) => {
      this.humidityData.labels.push(Date());
      this.humidityData.series[0].push(parseInt(message.payload.toString()));
      // this.humidityData.push(parseInt(message.payload.toString()));
      this.updateData();
    });
  }

  updateData() {
    if (this.selected === "humidity") {
      this.reloadChart(
        this.humidityData.series[0],
        this.humidityData.labels,
        "Humidité"
      );
    }
    if (this.selected === "weather") {
      this.reloadChart(
        this.weatherData.series[0],
        this.weatherData.labels,
        "Temperature"
      );
    }
    if (this.selected === "light") {
      this.reloadChart(
        this.lightData.series[0],
        this.lightData.labels,
        "Luminosité"
      );
    }
  }

  public lineChartData: Array<any> = [{ data: [], label: "Lumiosité" }];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartLegend: boolean = true;
  public lineChartType: string = "line";
}

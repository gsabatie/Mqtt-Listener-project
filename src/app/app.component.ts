import { Component, ViewChild, ElementRef, AfterViewInit, ContentChild, AfterContentInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartistComponent, ChartType, ChartEvent } from 'ng-chartist';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'Dashboard';

 chart: Chart;

  chartistComponent: ChartistComponent ;
  constructor() {
    this.chart = {
       type: 'Line',
    data: {
           labels: [1, 2, 3, 4, 5, 6, 7, 8],
           series: [
             [5, 9, 7, 8, 5, 3, 5, 4]
           ]
       }  ,
    options: {
      showLine: true,
      axisX: {
        labelInterpolationFnc: function(value: number, index: number): string {
          return index % 13 === 0 ? `W${value}` : null;
        }
}
  }
    };
  }
 }

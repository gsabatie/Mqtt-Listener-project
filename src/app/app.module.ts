import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule, MatMenuModule, MatSidenavModule, MatSelectModule,  MatCheckboxModule, MatToolbarModule } from "@angular/material";
import {ChartistModule} from 'ng-chartist';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    ChartistModule
   // angularChartist.name
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

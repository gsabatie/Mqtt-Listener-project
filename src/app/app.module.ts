import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatMenuModule, MatSidenavModule, MatSelectModule,  MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatOptionModule } from '@angular/material';
import {ChartistModule} from 'ng-chartist';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
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
    ChartistModule
   // angularChartist.name
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

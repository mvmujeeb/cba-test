import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { ChartComponent } from './weather/chart.component';
import { WeatherService } from './weather/weather.service';
import { ChartModule } from 'angular2-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
     ChartModule.forRoot(
            require('highcharts')
        ), 
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

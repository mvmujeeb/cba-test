import { Routes } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';


export const rootRouterConfig: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'weather', component: WeatherComponent },
  
];


import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherResponseModel, WeatherContainerModel } from './weather.model';

@Component({
  selector: 'home',
  styleUrls: ['./weather.component.css'],
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

  public selectedCity: string = 'Melbourne';
  public dataLoded: boolean = false;
  public weatherData: WeatherContainerModel;
  public weatherHourlyData: WeatherContainerModel;
  public today: Date = new Date();
  private cities: string[] = ['Sydney', 'Melbourne', 'Adelaide']
  /**
   *
   */
  constructor(private weatherService: WeatherService) {

  }
  public ngOnInit() {
    this.loadWeatherData(this.selectedCity);
    this.loadWeatherHourlyData(this.selectedCity);
  }

   public loadWeatherHourlyData(city: string) {
    this.weatherService.getHourlyWeather(city).subscribe((data: WeatherResponseModel) => {
      this.dataLoded = true;
      if (data.error === "") {
        this.weatherHourlyData = data.weather;
        this.weatherHourlyData.list = data.weather.list
        console.log(this.weatherHourlyData, 'weatherHourlyData')
      }
    }

    )
  }
  public loadWeatherData(city: string) {
    this.weatherService.getDailyWeather(city).subscribe((data: WeatherResponseModel) => {
      if (data.error === "") {
        this.weatherData = data.weather;
        this.weatherData.list = data.weather.list
        this.weatherData.city = data.weather.city
        console.log(this.weatherData, 'weatherData')
      }
    }

    )
  }

  public showIconClass(condition: string) {
    let className: string;
    switch (condition.toLowerCase()) {
      case 'rain':
        className = 'rainy';
        break;
      case 'clear':
        className = 'sunny';
        break;
      case 'sunny':
        className = 'sunny';
        break;
      default:
        className = 'partlysunny';
        break;
    }
    return className;


  }
}

import { mockWeatherData } from '../data/weatherdata';
import { hourlyWeatherData } from '../data/weatherdata-hourly';


/* GET api listing. */
export class WeatherService {

    private city: string;
    private responseData: any =  {
            error: "",
            weather: {}
        };

    constructor() {
        let response = ``
    }

    public getWeatherData(location?: string, noOfDays?: number) {
        this.city = location;
        //response.weather = weatherData[location];
        this.responseData.weather = this.getData(noOfDays ? noOfDays : 10);
        return this.responseData;

    }
    public getHourlyWeatherData(location?: string) {
        this.city = location;

        //response.weather = weatherData[location];
        this.responseData.weather = this.getHourlyData();
        return this.responseData;

    }
    private getHourlyData(): any {
         var weatherdata = hourlyWeatherData[this.city];
        var weatherObj = { dt: 0 }
        var  returnData = {list:[], city:{}};
        returnData.city = weatherdata.city;
        for (let i: number = 0; i < 10; i++) {
            weatherObj = weatherdata.list[i] || {}
            weatherObj.dt = new Date().getTime() + (3600000 * (i + 1));
            returnData.list.push(weatherObj)
        }
        return returnData;
    }

    private getData(noOfDays?: number): any {
        var weatherdata = mockWeatherData[this.city];
        var returnData = {list:[],city:{}};
        returnData.city = weatherdata.city;
        var weatherObj = { dt: 0 }
        for (let i: number = 0; i < noOfDays; i++) {
            weatherObj = weatherdata.list[i] || {}
            weatherObj.dt = new Date().getTime() + (86400000 * (i + 1));
            returnData.list.push(weatherObj)
        }
        return returnData;
    }


}




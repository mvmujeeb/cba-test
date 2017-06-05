import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { WeatherModel, WeatherResponseModel } from './weather.model';
import { Subject } from 'rxjs/Rx';
/**
 * This class provides the AddressSearch service with methods to read names and add names.
 */
@Injectable()
export class WeatherService {
    private endPoint:string ='http://localhost:3001/weatherapi/';
    constructor(private http: Http) { }

    public getDailyWeather(location: string): Observable<any> {
        let url: string = `${this.endPoint}daily?city=${location}&days=10`

        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.of({
                error: "error",
                weather: {}
            }));
    }
    public getHourlyWeather(location: string): Observable<any> {
        let url = `${this.endPoint}hourly?city=${location}`;
        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.of({
                error: "error",
                weather: {}
            }));
    }
}
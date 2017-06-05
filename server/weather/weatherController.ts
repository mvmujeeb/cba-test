// Import only what we need from express
import { Router } from 'express';
import { WeatherService } from './weatherService';

// Assign router to the express.Router() instance
let weatherService: WeatherService = new WeatherService();
export class WeatherController {
    public getHourlyWeather = function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(weatherService.getHourlyWeatherData(req.query.city));
    };

    public getDailyWeather = function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(weatherService.getWeatherData(req.query.city, req.query.days));
    };
}


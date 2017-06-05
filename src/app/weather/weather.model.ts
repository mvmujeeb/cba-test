export class WeatherResponseModel {
    public error: '';
    public weather: WeatherContainerModel;
}
export class WeatherContainerModel {
    public city: LocationModel;
    public cnt: string;
    public list: WeatherModel[];
}
export class LocationModel {
    public name: LocationModel;
    public country: string;
    public elevation: string;
    public coord: CordinateModel;
}
export class WeatherModel {
    public speed: string;
    public deg: string;
    public clouds: string;
    public humidity: string;
    public rain: string;
    public weather: weatherConditionModel;
    public pressure: string;
    public temp: TempModel;
    public dt: string;
}

export class weatherConditionModel {
    public main: string;
    public description: string;

}
export class CordinateModel {
    public lon: string;
    public lat: string;

}
export class TempModel {
    public day: string;
    public min: string;
    public max: string;
    public night: string;
    public eve: string;
    public morn: string;
}

/* server/server.ts */

// Import everything from express and assign it to the express variable
import * as express from 'express';
import * as http from 'http';
import { WeatherController } from './weather/weatherController';
import * as path from 'path';

let weatherController: WeatherController = new WeatherController();


const app = express();
const port: number = process.env.PORT || 3001;

app.use(express.static('dist'));
app.get("/dist/assets/img/*", function (req, res) {
    res.sendFile(req.path, { root: './' })
});

// Mount the WeatherController at the /weatherapi route
app.get("/weatherapi/daily", weatherController.getDailyWeather);
app.get("/weatherapi/hourly", weatherController.getHourlyWeather);

// Serve the application at the given port
http.createServer(app).listen(port, () => {
    console.log(port)
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
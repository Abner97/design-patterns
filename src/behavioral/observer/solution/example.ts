import { WeatherStation } from "./classes/WeatherStation";
import { CurrentConditionsDisplay } from "./classes/CurrentConditionsDisplay";
import { StatisticsDisplay } from "./classes/StatisticsDisplay";
import { ForecastDisplay } from "./classes/ForecastDisplay";

console.log("=== SOLUCIÓN OBSERVER: Weather Station ===\n");

const station = new WeatherStation();

const currentDisplay = new CurrentConditionsDisplay();
const statsDisplay = new StatisticsDisplay();
const forecastDisplay = new ForecastDisplay();

station.attach(currentDisplay);
station.attach(statsDisplay);
station.attach(forecastDisplay);

station.setMeasurements(25, 65, 1013);
station.setMeasurements(27, 70, 1015);
station.setMeasurements(23, 80, 1010);

console.log("--- Desconectando display de estadísticas ---");
station.detach(statsDisplay);

station.setMeasurements(26, 75, 1012);
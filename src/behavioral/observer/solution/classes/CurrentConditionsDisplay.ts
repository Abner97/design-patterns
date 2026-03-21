import { WeatherObserver } from "../interfaces/WeatherObserver";

export class CurrentConditionsDisplay implements WeatherObserver {
  update(temp: number, humidity: number, pressure: number): void {
    console.log(`📊 [Condiciones Actuales] ${temp}°C, ${humidity}% humedad`);
  }
}
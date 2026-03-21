import { WeatherObserver } from "../interfaces/WeatherObserver";

export class ForecastDisplay implements WeatherObserver {
  private lastPressure: number = 0;

  update(temp: number, humidity: number, pressure: number): void {
    let forecast = "Sin cambios";
    
    if (pressure > this.lastPressure) {
      forecast = "Mejorando el tiempo";
    } else if (pressure < this.lastPressure) {
      forecast = "Tiempo más frío y lluvioso";
    }
    
    console.log(`🔮 [Pronóstico] ${forecast} (Presión: ${pressure} hPa)`);
    this.lastPressure = pressure;
  }
}
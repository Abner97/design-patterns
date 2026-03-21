import { WeatherObserver } from "../interfaces/WeatherObserver";

export class StatisticsDisplay implements WeatherObserver {
  private temperatures: number[] = [];

  update(temp: number, humidity: number, pressure: number): void {
    this.temperatures.push(temp);
    const avg = this.temperatures.reduce((a, b) => a + b, 0) / this.temperatures.length;
    const min = Math.min(...this.temperatures);
    const max = Math.max(...this.temperatures);
    
    console.log(`📈 [Estadísticas] Promedio: ${avg.toFixed(1)}°C, Min: ${min}°C, Max: ${max}°C`);
  }
}
export interface WeatherObserver {
  update(temp: number, humidity: number, pressure: number): void;
}
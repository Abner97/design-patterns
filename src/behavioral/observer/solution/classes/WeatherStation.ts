import { WeatherSubject } from "../interfaces/WeatherSubject";
import { WeatherObserver } from "../interfaces/WeatherObserver";

export class WeatherStation implements WeatherSubject {
  private observers: WeatherObserver[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  attach(observer: WeatherObserver): void {
    this.observers.push(observer);
    console.log("📡 Nuevo display conectado a la estación meteorológica");
  }

  detach(observer: WeatherObserver): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
      console.log("📡 Display desconectado de la estación meteorológica");
    }
  }

  notify(): void {
    this.observers.forEach(observer => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  setMeasurements(temp: number, humidity: number, pressure: number): void {
    console.log(`\n🌡️ Nuevas mediciones: ${temp}°C, ${humidity}% humedad, ${pressure} hPa\n`);
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notify();
  }
}
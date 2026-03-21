import { WeatherObserver } from "./WeatherObserver";

export interface WeatherSubject {
  attach(observer: WeatherObserver): void;
  detach(observer: WeatherObserver): void;
  notify(): void;
}
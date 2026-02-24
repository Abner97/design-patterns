// EJERCICIO OBSERVER
// Implementa una estación meteorológica que notifica a diferentes displays

/*
INSTRUCCIONES:
1. Crea una interfaz Observer con método update(temp: number, humidity: number)
2. Crea una clase WeatherStation (Subject) que notifique cambios
3. Implementa tres displays: CurrentConditionsDisplay, StatisticsDisplay, ForecastDisplay
4. Cada display debe mostrar información diferente cuando se actualiza

EJEMPLO DE USO:
const station = new WeatherStation();
const display1 = new CurrentConditionsDisplay();
station.attach(display1);
station.setMeasurements(25, 65);
*/

// TODO: Implementa aquí tu solución

// ============================================
// SOLUCIÓN (Descomenta para ver la respuesta)
// ============================================

/*
interface WeatherObserver {
  update(temperature: number, humidity: number, pressure: number): void;
}

class WeatherStation {
  private observers: WeatherObserver[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  public attach(observer: WeatherObserver): void {
    this.observers.push(observer);
    console.log("📱 Nuevo display conectado");
  }

  public detach(observer: WeatherObserver): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
      console.log("📱 Display desconectado");
    }
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    console.log("\n🌡️  Nuevas mediciones recibidas...\n");
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notify();
  }

  private notify(): void {
    this.observers.forEach(observer => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }
}

class CurrentConditionsDisplay implements WeatherObserver {
  update(temperature: number, humidity: number, pressure: number): void {
    console.log("📊 CONDICIONES ACTUALES:");
    console.log(`   Temperatura: ${temperature}°C`);
    console.log(`   Humedad: ${humidity}%`);
    console.log(`   Presión: ${pressure} hPa\n`);
  }
}

class StatisticsDisplay implements WeatherObserver {
  private temperatures: number[] = [];

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperatures.push(temperature);
    const avg = this.temperatures.reduce((a, b) => a + b, 0) / this.temperatures.length;
    const max = Math.max(...this.temperatures);
    const min = Math.min(...this.temperatures);

    console.log("📈 ESTADÍSTICAS:");
    console.log(`   Promedio: ${avg.toFixed(1)}°C`);
    console.log(`   Máxima: ${max}°C`);
    console.log(`   Mínima: ${min}°C\n`);
  }
}

class ForecastDisplay implements WeatherObserver {
  private lastPressure: number = 0;

  update(temperature: number, humidity: number, pressure: number): void {
    console.log("🔮 PRONÓSTICO:");
    
    if (pressure > this.lastPressure) {
      console.log("   Mejorando el clima ☀️");
    } else if (pressure < this.lastPressure) {
      console.log("   Empeorando el clima 🌧️");
    } else {
      console.log("   Clima estable 🌤️");
    }
    
    this.lastPressure = pressure;
    console.log();
  }
}

// PRUEBA TU SOLUCIÓN
console.log("=== EJERCICIO OBSERVER: Weather Station ===\n");

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
*/

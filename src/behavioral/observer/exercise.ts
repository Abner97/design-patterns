// EJERCICIO OBSERVER
// Implementa una estación meteorológica que notifica a diferentes displays

/*
INSTRUCCIONES:
1. Crea una interfaz Observer con método update(temp: number, humidity: number, pressure: number)
2. Crea una clase WeatherStation (Subject) que notifique cambios
3. Implementa tres displays: CurrentConditionsDisplay, StatisticsDisplay, ForecastDisplay
4. Cada display debe mostrar información diferente cuando se actualiza

EJEMPLO DE USO:
const station = new WeatherStation();
const display1 = new CurrentConditionsDisplay();
station.attach(display1);
station.setMeasurements(25, 65, 1013);
*/

// TODO: Implementa aquí tu solución

// PRUEBA TU SOLUCIÓN
console.log("=== EJERCICIO OBSERVER: Weather Station ===\n");

// Descomenta cuando hayas implementado tu solución
/*
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

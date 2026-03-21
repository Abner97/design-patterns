import { HomeTheaterFacade } from "./classes/HomeTheaterFacade";

console.log("=== SOLUCIÓN FACADE: Home Theater ===\n");

const homeTheater = new HomeTheaterFacade();

homeTheater.watchMovie("Inception");

console.log("--- Después de 2 horas... ---\n");

homeTheater.endMovie();

console.log("--- Otra película ---\n");

homeTheater.watchMovie("The Matrix");
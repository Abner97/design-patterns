import { Application } from "./classes/Application";
import { ConsoleLogger } from "./classes/ConsoleLogger";
import { FileLogger } from "./classes/FileLogger";
import { ConsoleLoggerAdapter } from "./classes/ConsoleLoggerAdapter";
import { FileLoggerAdapter } from "./classes/FileLoggerAdapter";

console.log("=== SOLUCIÓN ADAPTER: Logger System ===\n");

const app = new Application();

// Agregar diferentes loggers
const consoleLogger = new ConsoleLoggerAdapter(new ConsoleLogger());
const fileLogger = new FileLoggerAdapter(new FileLogger(), "errors.log");

app.addLogger(consoleLogger);
app.addLogger(fileLogger);

console.log("--- Logging a múltiples destinos ---\n");
app.log("INFO", "Aplicación iniciada");
app.log("WARNING", "Memoria al 80%");
app.log("ERROR", "Fallo en la conexión a la base de datos");

console.log("\n--- Logger individual ---\n");
const singleLogger = new ConsoleLoggerAdapter(new ConsoleLogger());
singleLogger.log("DEBUG", "Variable x = 42");
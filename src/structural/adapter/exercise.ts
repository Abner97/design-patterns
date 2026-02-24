// EJERCICIO ADAPTER
// Adapta diferentes sistemas de logging a una interfaz común

/*
INSTRUCCIONES:
1. Tienes dos sistemas de logging externos: ConsoleLogger y FileLogger
2. Crea una interfaz Logger con método log(level: string, message: string)
3. Crea adapters para ambos sistemas que implementen la interfaz Logger
4. ConsoleLogger tiene: print(text: string)
5. FileLogger tiene: writeToFile(filename: string, content: string)

EJEMPLO DE USO:
const logger = new ConsoleLoggerAdapter(new ConsoleLogger());
logger.log("INFO", "Aplicación iniciada");
*/

// Sistemas externos (no puedes modificarlos)
class ConsoleLogger {
  public print(text: string): void {
    console.log(`[CONSOLE] ${text}`);
  }
}

class FileLogger {
  public writeToFile(filename: string, content: string): void {
    console.log(`[FILE: ${filename}] ${content}`);
  }
}

// TODO: Implementa aquí tu solución

// PRUEBA TU SOLUCIÓN
console.log("=== EJERCICIO ADAPTER: Logger System ===\n");

// Descomenta cuando hayas implementado tu solución
/*
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
*/

// EJERCICIO SINGLETON
// Implementa un ConfigManager que gestione la configuración de la aplicación

/*
INSTRUCCIONES:
1. Crea una clase ConfigManager usando el patrón Singleton
2. Debe tener métodos: set(key, value), get(key), getAll()
3. Debe almacenar la configuración en un objeto privado
4. Asegúrate de que solo exista una instancia

EJEMPLO DE USO:
const config1 = ConfigManager.getInstance();
config1.set("apiUrl", "https://api.example.com");
config1.set("timeout", 5000);

const config2 = ConfigManager.getInstance();
console.log(config2.get("apiUrl")); // "https://api.example.com"
console.log(config1 === config2); // true
*/

// TODO: Implementa aquí tu solución
class ConfigManager {
  // Tu código aquí
}

// PRUEBA TU SOLUCIÓN
console.log("=== EJERCICIO SINGLETON: ConfigManager ===\n");

// Descomenta cuando hayas implementado tu solución
/*
const config1 = ConfigManager.getInstance();
config1.set("apiUrl", "https://api.example.com");
config1.set("timeout", 5000);
config1.set("debug", true);

console.log("\n--- Obteniendo configuración desde otra instancia ---\n");

const config2 = ConfigManager.getInstance();
console.log(`API URL: ${config2.get("apiUrl")}`);
console.log(`Timeout: ${config2.get("timeout")}`);
console.log(`Debug: ${config2.get("debug")}`);

console.log("\n--- Verificación ---");
console.log(`¿Son la misma instancia? ${config1 === config2 ? "✅ SÍ" : "❌ NO"}`);
console.log("\nToda la configuración:", config2.getAll());
*/

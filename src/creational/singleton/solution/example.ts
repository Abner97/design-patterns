import { ConfigManager } from "./ConfigManager";

console.log("=== SOLUCIÓN SINGLETON: ConfigManager ===\n");

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
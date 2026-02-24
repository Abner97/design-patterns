import { DatabaseConnection } from "../classes/DatabaseConnection";

console.log("=== EJEMPLO SINGLETON: DatabaseConnection ===\n");

const db1 = DatabaseConnection.getInstance();
db1.connect();
db1.query("SELECT * FROM users");

console.log("\n--- Intentando crear otra instancia ---\n");

const db2 = DatabaseConnection.getInstance();
db2.connect();
db2.query("SELECT * FROM products");

console.log("\n--- Verificando que son la misma instancia ---");
console.log(`¿Son la misma instancia? ${db1 === db2 ? "✅ SÍ" : "❌ NO"}`);

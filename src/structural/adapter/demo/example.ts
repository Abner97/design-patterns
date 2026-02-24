import { ModernPaymentSystem } from "../classes/ModernPaymentSystem";
import { LegacyPaymentSystem } from "../classes/LegacyPaymentSystem";
import { PaymentAdapter } from "../classes/PaymentAdapter";
import { ModernPaymentProcessor } from "../interfaces/ModernPaymentProcessor";

console.log("=== EJEMPLO ADAPTER: Payment Systems ===\n");

console.log("--- Usando sistema moderno ---\n");
const modernSystem = new ModernPaymentSystem();
modernSystem.processPayment("USER123", 100, "USD");

console.log("\n--- Usando sistema legacy con adapter ---\n");
const legacySystem = new LegacyPaymentSystem();
const adapter = new PaymentAdapter(legacySystem);
adapter.processPayment("USER456", 200, "USD");

console.log("--- Ambos sistemas usan la misma interfaz ---\n");
function processOrder(processor: ModernPaymentProcessor, userId: string, amount: number) {
  processor.processPayment(userId, amount, "USD");
}

processOrder(modernSystem, "USER789", 50);
processOrder(adapter, "USER999", 75);

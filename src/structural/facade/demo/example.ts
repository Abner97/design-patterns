import { OrderFacade } from "../classes/OrderFacade";

console.log("=== EJEMPLO FACADE: Order System ===\n");

const orderSystem = new OrderFacade();

orderSystem.placeOrder(
  "PROD-001",
  99.99,
  "Calle Principal 123, Ciudad",
  "cliente@example.com"
);

console.log("\n--- Segunda orden ---\n");

orderSystem.placeOrder(
  "PROD-002",
  149.99,
  "Avenida Central 456, Ciudad",
  "otro@example.com"
);

import { PaymentFactory } from "./classes/PaymentFactory";
import { CreditCardFactory } from "./classes/CreditCardFactory";
import { PayPalFactory } from "./classes/PayPalFactory";
import { CryptocurrencyFactory } from "./classes/CryptocurrencyFactory";

export function getPaymentFactory(type: string): PaymentFactory {
  switch (type.toLowerCase()) {
    case "creditcard":
      return new CreditCardFactory();
    case "paypal":
      return new PayPalFactory();
    case "crypto":
      return new CryptocurrencyFactory();
    default:
      throw new Error(`Tipo de pago no soportado: ${type}`);
  }
}

console.log("=== SOLUCIÓN FACTORY METHOD: Payment System ===\n");

const payments = ["creditcard", "paypal", "crypto"];

payments.forEach((type) => {
  const factory = getPaymentFactory(type);
  factory.processPayment(150);
});

console.log("\n--- Procesando múltiples pagos ---\n");

const orders = [
  { amount: 50, method: "paypal" },
  { amount: 200, method: "crypto" },
  { amount: 75, method: "creditcard" },
];

orders.forEach((order) => {
  const factory = getPaymentFactory(order.method);
  factory.processPayment(order.amount);
});
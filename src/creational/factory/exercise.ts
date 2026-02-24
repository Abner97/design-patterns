// EJERCICIO FACTORY METHOD
// Implementa un sistema de procesamiento de pagos

/*
INSTRUCCIONES:
1. Crea una interfaz PaymentMethod con un método process(amount: number)
2. Implementa tres métodos de pago: CreditCard, PayPal, Cryptocurrency
3. Crea factories para cada método de pago
4. Implementa una función que retorne el factory apropiado según el tipo

EJEMPLO DE USO:
const factory = getPaymentFactory("paypal");
factory.processPayment(100);
// Output: 💳 Pago de $100 procesado con PayPal
*/

// TODO: Implementa aquí tu solución

// PRUEBA TU SOLUCIÓN
console.log("=== EJERCICIO FACTORY METHOD: Payment System ===\n");

// Descomenta cuando hayas implementado tu solución
/*
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
*/

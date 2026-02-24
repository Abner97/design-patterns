export class PaymentSystem {
  processPayment(amount: number): boolean {
    console.log(`💳 Procesando pago de $${amount}...`);
    return true;
  }
}

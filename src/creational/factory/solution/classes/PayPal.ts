import { PaymentMethod } from "../interfaces/PaymentMethod";

export class PayPal implements PaymentMethod {
  process(amount: number): void {
    console.log(`💳 Pago de $${amount} procesado con PayPal`);
  }
}
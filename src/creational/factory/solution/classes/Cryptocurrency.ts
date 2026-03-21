import { PaymentMethod } from "../interfaces/PaymentMethod";

export class Cryptocurrency implements PaymentMethod {
  process(amount: number): void {
    console.log(`💳 Pago de $${amount} procesado con Criptomoneda`);
  }
}
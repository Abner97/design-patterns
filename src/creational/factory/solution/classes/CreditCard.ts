import { PaymentMethod } from "../interfaces/PaymentMethod";

export class CreditCard implements PaymentMethod {
  process(amount: number): void {
    console.log(`💳 Pago de $${amount} procesado con Tarjeta de Crédito`);
  }
}
import { PaymentMethod } from "../interfaces/PaymentMethod";

export abstract class PaymentFactory {
  abstract createPayment(): PaymentMethod;
  
  processPayment(amount: number): void {
    const payment = this.createPayment();
    payment.process(amount);
  }
}
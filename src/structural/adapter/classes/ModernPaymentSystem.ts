import { ModernPaymentProcessor } from "../interfaces/ModernPaymentProcessor";

export class ModernPaymentSystem implements ModernPaymentProcessor {
  public processPayment(userId: string, amount: number, currency: string): void {
    console.log(`💳 [Modern] Procesando pago de ${amount} ${currency} para usuario ${userId}`);
  }
}

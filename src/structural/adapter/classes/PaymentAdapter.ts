import { ModernPaymentProcessor } from "../interfaces/ModernPaymentProcessor";
import { LegacyPaymentSystem } from "./LegacyPaymentSystem";

export class PaymentAdapter implements ModernPaymentProcessor {
  constructor(private legacySystem: LegacyPaymentSystem) {}

  public processPayment(userId: string, amount: number, currency: string): void {
    console.log(`🔄 Adaptando solicitud moderna a sistema legacy...`);
    console.log(`   Usuario: ${userId}, Monto: ${amount} ${currency}`);
    
    const accountNumber = `ACC-${userId}`;
    this.legacySystem.makePayment(accountNumber, amount);
    console.log(`✅ Pago completado\n`);
  }
}

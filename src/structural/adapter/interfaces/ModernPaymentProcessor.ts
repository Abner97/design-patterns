export interface ModernPaymentProcessor {
  processPayment(userId: string, amount: number, currency: string): void;
}

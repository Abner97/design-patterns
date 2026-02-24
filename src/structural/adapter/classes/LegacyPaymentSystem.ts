export class LegacyPaymentSystem {
  public makePayment(accountNumber: string, amount: number): void {
    console.log(`💰 [Legacy] Procesando pago de $${amount} desde cuenta ${accountNumber}`);
  }
}

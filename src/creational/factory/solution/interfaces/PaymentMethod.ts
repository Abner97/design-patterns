export interface PaymentMethod {
  process(amount: number): void;
}
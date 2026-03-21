import { PaymentFactory } from "./PaymentFactory";
import { PaymentMethod } from "../interfaces/PaymentMethod";
import { PayPal } from "./PayPal";

export class PayPalFactory extends PaymentFactory {
  createPayment(): PaymentMethod {
    return new PayPal();
  }
}
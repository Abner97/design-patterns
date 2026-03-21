import { PaymentFactory } from "./PaymentFactory";
import { PaymentMethod } from "../interfaces/PaymentMethod";
import { CreditCard } from "./CreditCard";

export class CreditCardFactory extends PaymentFactory {
  createPayment(): PaymentMethod {
    return new CreditCard();
  }
}
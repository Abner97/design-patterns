import { PaymentFactory } from "./PaymentFactory";
import { PaymentMethod } from "../interfaces/PaymentMethod";
import { Cryptocurrency } from "./Cryptocurrency";

export class CryptocurrencyFactory extends PaymentFactory {
  createPayment(): PaymentMethod {
    return new Cryptocurrency();
  }
}
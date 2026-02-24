import { Coffee } from "../interfaces/Coffee";

export class SimpleCoffee implements Coffee {
  cost(): number {
    return 2;
  }

  description(): string {
    return "Café simple";
  }
}

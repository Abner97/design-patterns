import { CoffeeDecorator } from "./CoffeeDecorator";

export class WhipDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.7;
  }

  description(): string {
    return this.coffee.description() + ", Crema batida";
  }
}

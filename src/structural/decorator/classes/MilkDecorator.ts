import { CoffeeDecorator } from "./CoffeeDecorator";

export class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.5;
  }

  description(): string {
    return this.coffee.description() + ", Leche";
  }
}

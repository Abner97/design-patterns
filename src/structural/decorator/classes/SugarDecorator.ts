import { CoffeeDecorator } from "./CoffeeDecorator";

export class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.2;
  }

  description(): string {
    return this.coffee.description() + ", Azúcar";
  }
}

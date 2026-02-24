import { CoffeeDecorator } from "./CoffeeDecorator";

export class CaramelDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.6;
  }

  description(): string {
    return this.coffee.description() + ", Caramelo";
  }
}

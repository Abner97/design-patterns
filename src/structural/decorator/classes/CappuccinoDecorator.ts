import { CoffeeDecorator } from "./CoffeeDecorator";

export class CapuccinoDecorator extends CoffeeDecorator{
    cost(): number {
       return this.coffee.cost() + 0.8;
    }
    description(): string {
       return this.coffee.description() + ", Capuccino";
    }

}
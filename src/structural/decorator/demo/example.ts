import { Coffee } from "../interfaces/Coffee";
import { SimpleCoffee } from "../classes/SimpleCoffee";
import { MilkDecorator } from "../classes/MilkDecorator";
import { SugarDecorator } from "../classes/SugarDecorator";
import { WhipDecorator } from "../classes/WhipDecorator";
import { CaramelDecorator } from "../classes/CaramelDecorator";

console.log("=== EJEMPLO DECORATOR: Coffee Shop ===\n");

let coffee: Coffee = new SimpleCoffee();
console.log(`${coffee.description()} - $${coffee.cost()}`);

console.log("\n--- Agregando leche ---\n");
coffee = new MilkDecorator(coffee);
console.log(`${coffee.description()} - $${coffee.cost()}`);

console.log("\n--- Agregando azúcar ---\n");
coffee = new SugarDecorator(coffee);
console.log(`${coffee.description()} - $${coffee.cost()}`);

console.log("\n--- Café especial con todo ---\n");
let specialCoffee: Coffee = new SimpleCoffee();
specialCoffee = new MilkDecorator(specialCoffee);
specialCoffee = new WhipDecorator(specialCoffee);
specialCoffee = new CaramelDecorator(specialCoffee);
specialCoffee = new SugarDecorator(specialCoffee);

console.log(`${specialCoffee.description()}`);
console.log(`Precio total: $${specialCoffee.cost()}`);

console.log("\n--- Diferentes combinaciones ---\n");
const orders = [
  new MilkDecorator(new SimpleCoffee()),
  new WhipDecorator(new MilkDecorator(new SimpleCoffee())),
  new CaramelDecorator(new SugarDecorator(new SimpleCoffee())),
];

orders.forEach((order, index) => {
  console.log(`Orden ${index + 1}: ${order.description()} - $${order.cost()}`);
});

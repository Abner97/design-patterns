import { Observer } from "../interfaces/Observer";

export class Investor implements Observer {
  constructor(private name: string) {}

  update(stock: string, price: number): void {
    console.log(`💼 ${this.name} notificado: ${stock} = $${price}`);
  }
}

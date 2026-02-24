import { Observer } from "../interfaces/Observer";

export class TradingBot implements Observer {
  constructor(private botId: string) {}

  update(stock: string, price: number): void {
    console.log(`🤖 Bot ${this.botId}: Analizando ${stock} a $${price}`);
    if (price < 100) {
      console.log(`   ➜ Bot ${this.botId}: ¡COMPRAR!`);
    } else if (price > 150) {
      console.log(`   ➜ Bot ${this.botId}: ¡VENDER!`);
    }
  }
}

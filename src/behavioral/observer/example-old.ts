// PATRÓN OBSERVER
// Define una dependencia uno-a-muchos entre objetos

interface Observer {
  update(stock: string, price: number): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class StockMarket implements Subject {
  private observers: Observer[] = [];
  private stocks: Map<string, number> = new Map();

  public attach(observer: Observer): void {
    this.observers.push(observer);
    console.log("👤 Nuevo observador registrado");
  }

  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
      console.log("👤 Observador eliminado");
    }
  }

  public notify(): void {
    this.observers.forEach(observer => {
      this.stocks.forEach((price, stock) => {
        observer.update(stock, price);
      });
    });
  }

  public setStockPrice(stock: string, price: number): void {
    console.log(`\n📊 Actualizando precio de ${stock} a $${price}`);
    this.stocks.set(stock, price);
    this.notifyStock(stock, price);
  }

  private notifyStock(stock: string, price: number): void {
    this.observers.forEach(observer => observer.update(stock, price));
  }
}

class Investor implements Observer {
  constructor(private name: string) {}

  update(stock: string, price: number): void {
    console.log(`💼 ${this.name} notificado: ${stock} = $${price}`);
  }
}

class TradingBot implements Observer {
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

// DEMO
console.log("=== EJEMPLO OBSERVER: Stock Market ===\n");

const market = new StockMarket();

const investor1 = new Investor("Juan");
const investor2 = new Investor("María");
const bot = new TradingBot("BOT-001");

market.attach(investor1);
market.attach(investor2);
market.attach(bot);

market.setStockPrice("AAPL", 150);
market.setStockPrice("GOOGL", 95);
market.setStockPrice("MSFT", 200);

console.log("\n--- Investor Juan se retira ---");
market.detach(investor1);

market.setStockPrice("AAPL", 145);

import { Subject } from "../interfaces/Subject";
import { Observer } from "../interfaces/Observer";

export class StockMarket implements Subject {
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

export interface Observer {
  update(stock: string, price: number): void;
}

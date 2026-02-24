import { SortStrategy } from "../interfaces/SortStrategy";

export class Sorter {
  constructor(private strategy: SortStrategy) {}

  public setStrategy(strategy: SortStrategy): void {
    this.strategy = strategy;
  }

  public sort(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}

import { CompressionStrategy } from "../interfaces/CompressionStrategy";

export class FileCompressor {
  private strategy: CompressionStrategy;

  constructor(strategy: CompressionStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: CompressionStrategy): void {
    this.strategy = strategy;
  }

  compress(file: string): string {
    return this.strategy.compress(file);
  }
}
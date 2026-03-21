export interface CompressionStrategy {
  compress(file: string): string;
}
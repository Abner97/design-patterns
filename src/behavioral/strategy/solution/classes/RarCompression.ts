import { CompressionStrategy } from "../interfaces/CompressionStrategy";

export class RarCompression implements CompressionStrategy {
  compress(file: string): string {
    const compressedFile = `${file}.rar`;
    console.log(`📦 Comprimiendo ${file} usando RAR → ${compressedFile}`);
    return compressedFile;
  }
}
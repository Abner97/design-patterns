import { CompressionStrategy } from "../interfaces/CompressionStrategy";

export class ZipCompression implements CompressionStrategy {
  compress(file: string): string {
    const compressedFile = `${file}.zip`;
    console.log(`📦 Comprimiendo ${file} usando ZIP → ${compressedFile}`);
    return compressedFile;
  }
}
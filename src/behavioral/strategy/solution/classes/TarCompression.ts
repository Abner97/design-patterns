import { CompressionStrategy } from "../interfaces/CompressionStrategy";

export class TarCompression implements CompressionStrategy {
  compress(file: string): string {
    const compressedFile = `${file}.tar.gz`;
    console.log(`📦 Comprimiendo ${file} usando TAR → ${compressedFile}`);
    return compressedFile;
  }
}
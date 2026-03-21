import { FileCompressor } from "./classes/FileCompressor";
import { ZipCompression } from "./classes/ZipCompression";
import { RarCompression } from "./classes/RarCompression";
import { TarCompression } from "./classes/TarCompression";
import { CompressionStrategy } from "./interfaces/CompressionStrategy";

console.log("=== SOLUCIÓN STRATEGY: File Compression ===\n");

const files = ["documento.txt", "imagen.png", "video.mp4"];

const compressor = new FileCompressor(new ZipCompression());

files.forEach(file => {
  compressor.compress(file);
});

console.log("\n--- Cambiando a RAR ---\n");
compressor.setStrategy(new RarCompression());
compressor.compress("proyecto.zip");

console.log("\n--- Cambiando a TAR ---\n");
compressor.setStrategy(new TarCompression());
compressor.compress("backup.sql");

console.log("\n--- Compresión dinámica según tamaño ---\n");

function getCompressionStrategy(fileSize: number): CompressionStrategy {
  if (fileSize < 1000) return new ZipCompression();
  if (fileSize < 5000) return new RarCompression();
  return new TarCompression();
}

const fileSizes = [500, 3000, 10000];
fileSizes.forEach((size, index) => {
  const strategy = getCompressionStrategy(size);
  const comp = new FileCompressor(strategy);
  comp.compress(`file${index}.dat (${size}KB)`);
});
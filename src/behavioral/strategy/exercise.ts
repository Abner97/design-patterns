// EJERCICIO STRATEGY
// Implementa diferentes estrategias de compresión de archivos

/*
INSTRUCCIONES:
1. Crea una interfaz CompressionStrategy con método compress(file: string): string
2. Implementa tres estrategias: ZipCompression, RarCompression, TarCompression
3. Crea una clase FileCompressor que use estas estrategias
4. Cada estrategia debe retornar el nombre del archivo comprimido

EJEMPLO DE USO:
const compressor = new FileCompressor(new ZipCompression());
compressor.compress("documento.txt"); // documento.txt.zip
*/

// TODO: Implementa aquí tu solución

// ============================================
// SOLUCIÓN (Descomenta para ver la respuesta)
// ============================================

/*
interface CompressionStrategy {
  compress(file: string): string;
}

class ZipCompression implements CompressionStrategy {
  compress(file: string): string {
    console.log(`📦 Comprimiendo ${file} con ZIP...`);
    return `${file}.zip`;
  }
}

class RarCompression implements CompressionStrategy {
  compress(file: string): string {
    console.log(`📦 Comprimiendo ${file} con RAR...`);
    return `${file}.rar`;
  }
}

class TarCompression implements CompressionStrategy {
  compress(file: string): string {
    console.log(`📦 Comprimiendo ${file} con TAR...`);
    return `${file}.tar.gz`;
  }
}

class FileCompressor {
  private strategy: CompressionStrategy;

  constructor(strategy: CompressionStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: CompressionStrategy): void {
    this.strategy = strategy;
  }

  public compress(file: string): string {
    const result = this.strategy.compress(file);
    console.log(`✅ Archivo comprimido: ${result}\n`);
    return result;
  }
}

// PRUEBA TU SOLUCIÓN
console.log("=== EJERCICIO STRATEGY: File Compression ===\n");

const files = ["documento.txt", "imagen.png", "video.mp4"];

const compressor = new FileCompressor(new ZipCompression());

files.forEach(file => {
  compressor.compress(file);
});

console.log("--- Cambiando a RAR ---\n");
compressor.setStrategy(new RarCompression());
compressor.compress("proyecto.zip");

console.log("--- Cambiando a TAR ---\n");
compressor.setStrategy(new TarCompression());
compressor.compress("backup.sql");

console.log("--- Compresión dinámica según tamaño ---\n");

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
*/

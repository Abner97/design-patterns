export class FileLogger {
  public writeToFile(filename: string, content: string): void {
    console.log(`[FILE: ${filename}] ${content}`);
  }
}
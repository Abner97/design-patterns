import { Logger } from "../interfaces/Logger";
import { FileLogger } from "./FileLogger";

export class FileLoggerAdapter implements Logger {
  private fileLogger: FileLogger;
  private filename: string;

  constructor(fileLogger: FileLogger, filename: string) {
    this.fileLogger = fileLogger;
    this.filename = filename;
  }

  log(level: string, message: string): void {
    this.fileLogger.writeToFile(this.filename, `[${level}] ${message}`);
  }
}
import { Logger } from "../interfaces/Logger";
import { ConsoleLogger } from "./ConsoleLogger";

export class ConsoleLoggerAdapter implements Logger {
  private consoleLogger: ConsoleLogger;

  constructor(consoleLogger: ConsoleLogger) {
    this.consoleLogger = consoleLogger;
  }

  log(level: string, message: string): void {
    this.consoleLogger.print(`[${level}] ${message}`);
  }
}
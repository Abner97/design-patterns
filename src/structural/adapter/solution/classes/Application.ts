import { Logger } from "../interfaces/Logger";

export class Application {
  private loggers: Logger[] = [];

  addLogger(logger: Logger): void {
    this.loggers.push(logger);
  }

  log(level: string, message: string): void {
    this.loggers.forEach(logger => logger.log(level, message));
  }
}
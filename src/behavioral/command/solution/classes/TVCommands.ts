import { Command } from "../interfaces/Command";
import { TV } from "./Devices";

export class TVOnCommand implements Command {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.on();
  }

  undo(): void {
    this.tv.off();
  }
}

export class TVOffCommand implements Command {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.off();
  }

  undo(): void {
    this.tv.on();
  }
}
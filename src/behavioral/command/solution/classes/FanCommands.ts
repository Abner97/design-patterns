import { Command } from "../interfaces/Command";
import { Fan } from "./Devices";

export class FanOnCommand implements Command {
  private fan: Fan;
  private speed: number;

  constructor(fan: Fan, speed: number = 3) {
    this.fan = fan;
    this.speed = speed;
  }

  execute(): void {
    this.fan.on();
    this.fan.setSpeed(this.speed);
  }

  undo(): void {
    this.fan.off();
  }
}
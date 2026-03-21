import { Command } from "../interfaces/Command";

export class RemoteControl {
  private command: Command | null = null;
  private lastCommand: Command | null = null;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    if (this.command) {
      this.command.execute();
      this.lastCommand = this.command;
    }
  }

  pressUndo(): void {
    if (this.lastCommand) {
      this.lastCommand.undo();
    }
  }
}
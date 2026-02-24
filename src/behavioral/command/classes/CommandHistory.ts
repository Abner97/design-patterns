import { Command } from "../interfaces/Command";

export class CommandHistory {
  private history: Command[] = [];
  private currentIndex: number = -1;

  public execute(command: Command): void {
    command.execute();
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.history.push(command);
    this.currentIndex++;
  }

  public undo(): void {
    if (this.currentIndex >= 0) {
      const command = this.history[this.currentIndex];
      command.undo();
      this.currentIndex--;
    } else {
      console.log("⚠️  No hay nada que deshacer");
    }
  }

  public redo(): void {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      const command = this.history[this.currentIndex];
      command.execute();
    } else {
      console.log("⚠️  No hay nada que rehacer");
    }
  }
}

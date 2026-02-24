import { Command } from "../interfaces/Command";
import { TextEditor } from "./TextEditor";

export class DeleteCommand implements Command {
  private deletedText: string = "";

  constructor(private editor: TextEditor, private length: number) {}

  execute(): void {
    const content = this.editor.getContent();
    this.deletedText = content.slice(-this.length);
    this.editor.delete(this.length);
    console.log(`🗑️  Eliminando ${this.length} caracteres`);
  }

  undo(): void {
    this.editor.write(this.deletedText);
    console.log(`↩️  Restaurando: "${this.deletedText}"`);
  }
}

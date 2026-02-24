import { Command } from "../interfaces/Command";
import { TextEditor } from "./TextEditor";

export class WriteCommand implements Command {
  constructor(private editor: TextEditor, private text: string) {}

  execute(): void {
    this.editor.write(this.text);
    console.log(`✏️  Escribiendo: "${this.text}"`);
  }

  undo(): void {
    this.editor.delete(this.text.length);
    console.log(`↩️  Deshaciendo escritura de: "${this.text}"`);
  }
}

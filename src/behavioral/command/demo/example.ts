import { TextEditor } from "../classes/TextEditor";
import { CommandHistory } from "../classes/CommandHistory";
import { WriteCommand } from "../classes/WriteCommand";

console.log("=== EJEMPLO COMMAND: Text Editor ===\n");

const editor = new TextEditor();
const history = new CommandHistory();

history.execute(new WriteCommand(editor, "Hola "));
editor.display();

history.execute(new WriteCommand(editor, "Mundo"));
editor.display();

history.execute(new WriteCommand(editor, "!"));
editor.display();

console.log("\n--- Deshacer última acción ---\n");
history.undo();
editor.display();

console.log("\n--- Deshacer otra vez ---\n");
history.undo();
editor.display();

console.log("\n--- Rehacer ---\n");
history.redo();
editor.display();

console.log("\n--- Escribir más texto ---\n");
history.execute(new WriteCommand(editor, " TypeScript"));
editor.display();

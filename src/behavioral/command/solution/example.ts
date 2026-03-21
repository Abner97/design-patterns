import { RemoteControl } from "./classes/RemoteControl";
import { Light, TV, Fan } from "./classes/Devices";
import { LightOnCommand, LightOffCommand } from "./classes/LightCommands";
import { TVOnCommand, TVOffCommand } from "./classes/TVCommands";
import { FanOnCommand } from "./classes/FanCommands";
import { MacroCommand } from "./classes/MacroCommand";

console.log("=== SOLUCIÓN COMMAND: Remote Control ===\n");

const remote = new RemoteControl();
const light = new Light();
const tv = new TV();
const fan = new Fan();

console.log("--- Encender luz ---\n");
remote.setCommand(new LightOnCommand(light));
remote.pressButton();

console.log("\n--- Encender TV ---\n");
remote.setCommand(new TVOnCommand(tv));
remote.pressButton();

console.log("\n--- Encender ventilador ---\n");
remote.setCommand(new FanOnCommand(fan, 5));
remote.pressButton();

console.log("\n--- Deshacer última acción ---\n");
remote.pressUndo();

console.log("\n--- Deshacer otra vez ---\n");
remote.pressUndo();

console.log("\n--- Macro: Modo noche (apagar todo) ---\n");
const nightMode = new MacroCommand([
  new LightOffCommand(light),
  new TVOffCommand(tv),
  new FanOnCommand(fan, 1)
]);

remote.setCommand(nightMode);
remote.pressButton();

console.log("\n--- Deshacer modo noche ---\n");
remote.pressUndo();
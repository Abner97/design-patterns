// EJERCICIO COMMAND
// Implementa un control remoto para dispositivos del hogar

/*
INSTRUCCIONES:
1. Crea una interfaz Command con execute() y undo()
2. Implementa dispositivos: Light, TV, Fan
3. Crea comandos para encender/apagar cada dispositivo
4. Implementa un RemoteControl que pueda ejecutar y deshacer comandos

EJEMPLO DE USO:
const remote = new RemoteControl();
const light = new Light();
remote.setCommand(new LightOnCommand(light));
remote.pressButton(); // Luz encendida
remote.pressUndo(); // Luz apagada
*/

// Dispositivos (no modificar)
class Light {
  on(): void { console.log("💡 Luz encendida"); }
  off(): void { console.log("💡 Luz apagada"); }
}

class TV {
  on(): void { console.log("📺 TV encendida"); }
  off(): void { console.log("📺 TV apagada"); }
}

class Fan {
  on(): void { console.log("🌀 Ventilador encendido"); }
  off(): void { console.log("🌀 Ventilador apagado"); }
  setSpeed(speed: number): void { console.log(`🌀 Velocidad: ${speed}`); }
}

// TODO: Implementa aquí tu solución

// PRUEBA TU SOLUCIÓN
console.log("=== EJERCICIO COMMAND: Remote Control ===\n");

// Descomenta cuando hayas implementado tu solución
/*
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
*/

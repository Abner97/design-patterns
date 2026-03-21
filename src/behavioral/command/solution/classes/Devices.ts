export class Light {
  on(): void { console.log("💡 Luz encendida"); }
  off(): void { console.log("💡 Luz apagada"); }
}

export class TV {
  on(): void { console.log("📺 TV encendida"); }
  off(): void { console.log("📺 TV apagada"); }
}

export class Fan {
  on(): void { console.log("🌀 Ventilador encendido"); }
  off(): void { console.log("🌀 Ventilador apagado"); }
  setSpeed(speed: number): void { console.log(`🌀 Velocidad: ${speed}`); }
}
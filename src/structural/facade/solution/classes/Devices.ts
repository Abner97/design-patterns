export class Television {
  on(): void { console.log("📺 TV encendida"); }
  off(): void { console.log("📺 TV apagada"); }
  setInput(input: string): void { console.log(`📺 Input cambiado a ${input}`); }
}

export class SoundSystem {
  on(): void { console.log("🔊 Sistema de sonido encendido"); }
  off(): void { console.log("🔊 Sistema de sonido apagado"); }
  setVolume(level: number): void { console.log(`🔊 Volumen ajustado a ${level}`); }
}

export class DVDPlayer {
  on(): void { console.log("💿 DVD Player encendido"); }
  off(): void { console.log("💿 DVD Player apagado"); }
  play(movie: string): void { console.log(`💿 Reproduciendo: ${movie}`); }
  stop(): void { console.log("💿 Reproducción detenida"); }
}

export class RoomLights {
  dim(level: number): void { console.log(`💡 Luces atenuadas al ${level}%`); }
  on(): void { console.log("💡 Luces encendidas"); }
}
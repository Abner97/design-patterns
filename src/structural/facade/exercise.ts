// EJERCICIO FACADE
// Implementa un HomeTheaterFacade para simplificar el uso de un sistema de cine en casa

/*
INSTRUCCIONES:
1. Tienes varios dispositivos: TV, SoundSystem, DVDPlayer, Lights
2. Cada dispositivo tiene métodos on(), off() y otros específicos
3. Crea un HomeTheaterFacade con métodos watchMovie() y endMovie()
4. watchMovie() debe: apagar luces, encender TV, encender sonido, reproducir DVD
5. endMovie() debe: detener DVD, apagar TV, apagar sonido, encender luces

EJEMPLO DE USO:
const homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie("Inception");
homeTheater.endMovie();
*/

// Dispositivos (no modificar)
class Television {
  on(): void { console.log("📺 TV encendida"); }
  off(): void { console.log("📺 TV apagada"); }
  setInput(input: string): void { console.log(`📺 Input cambiado a ${input}`); }
}

class SoundSystem {
  on(): void { console.log("🔊 Sistema de sonido encendido"); }
  off(): void { console.log("🔊 Sistema de sonido apagado"); }
  setVolume(level: number): void { console.log(`🔊 Volumen ajustado a ${level}`); }
}

class DVDPlayer {
  on(): void { console.log("💿 DVD Player encendido"); }
  off(): void { console.log("💿 DVD Player apagado"); }
  play(movie: string): void { console.log(`💿 Reproduciendo: ${movie}`); }
  stop(): void { console.log("💿 Reproducción detenida"); }
}

class RoomLights {
  dim(level: number): void { console.log(`💡 Luces atenuadas al ${level}%`); }
  on(): void { console.log("💡 Luces encendidas"); }
}

// TODO: Implementa aquí tu solución

// ============================================
// SOLUCIÓN (Descomenta para ver la respuesta)
// ============================================

/*
class HomeTheaterFacade {
  private tv: Television;
  private sound: SoundSystem;
  private dvd: DVDPlayer;
  private lights: RoomLights;

  constructor() {
    this.tv = new Television();
    this.sound = new SoundSystem();
    this.dvd = new DVDPlayer();
    this.lights = new RoomLights();
  }

  public watchMovie(movie: string): void {
    console.log("🎬 Preparando cine en casa...\n");
    this.lights.dim(10);
    this.tv.on();
    this.tv.setInput("DVD");
    this.sound.on();
    this.sound.setVolume(8);
    this.dvd.on();
    this.dvd.play(movie);
    console.log("\n🍿 ¡Disfruta la película!\n");
  }

  public endMovie(): void {
    console.log("🎬 Finalizando cine en casa...\n");
    this.dvd.stop();
    this.dvd.off();
    this.sound.off();
    this.tv.off();
    this.lights.on();
    console.log("\n✅ Sistema apagado\n");
  }
}

// PRUEBA TU SOLUCIÓN
console.log("=== EJERCICIO FACADE: Home Theater ===\n");

const homeTheater = new HomeTheaterFacade();

homeTheater.watchMovie("Inception");

console.log("--- Después de 2 horas... ---\n");

homeTheater.endMovie();

console.log("--- Otra película ---\n");

homeTheater.watchMovie("The Matrix");
*/

import { Television, SoundSystem, DVDPlayer, RoomLights } from "./Devices";

export class HomeTheaterFacade {
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

  watchMovie(movie: string): void {
    console.log("🎬 Preparando cine en casa...\n");
    
    this.lights.dim(10);
    this.tv.on();
    this.tv.setInput("DVD");
    this.sound.on();
    this.sound.setVolume(8);
    this.dvd.on();
    this.dvd.play(movie);
    
    console.log("\n🍿 ¡Disfruta la película!");
  }

  endMovie(): void {
    console.log("🎬 Finalizando sesión de cine...\n");
    
    this.dvd.stop();
    this.dvd.off();
    this.sound.off();
    this.tv.off();
    this.lights.on();
    
    console.log("\n✅ Sistema apagado correctamente");
  }
}
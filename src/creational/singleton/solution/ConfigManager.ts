export class ConfigManager {
  private static instance: ConfigManager;
  private config: Map<string, any> = new Map();

  private constructor() {}

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  public set(key: string, value: any): void {
    this.config.set(key, value);
    console.log(`⚙️ Configuración actualizada: ${key} = ${value}`);
  }

  public get(key: string): any {
    return this.config.get(key);
  }

  public getAll(): Record<string, any> {
    const result: Record<string, any> = {};
    this.config.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }
}
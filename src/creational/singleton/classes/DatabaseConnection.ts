export class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connectionString: string;
  private isConnected: boolean = false;

  private constructor() {
    this.connectionString = "mongodb://localhost:27017/mydb";
    console.log("🔧 Creando nueva conexión a la base de datos...");
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public connect(): void {
    if (!this.isConnected) {
      console.log(`✅ Conectado a: ${this.connectionString}`);
      this.isConnected = true;
    } else {
      console.log("⚠️  Ya existe una conexión activa");
    }
  }

  public query(sql: string): void {
    if (this.isConnected) {
      console.log(`📊 Ejecutando query: ${sql}`);
    } else {
      console.log("❌ Error: No hay conexión activa");
    }
  }
}

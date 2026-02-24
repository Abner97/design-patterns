import { Notification } from "../interfaces/Notification";

export class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`📧 Email enviado: ${message}`);
  }
}

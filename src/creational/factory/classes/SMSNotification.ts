import { Notification } from "../interfaces/Notification";

export class SMSNotification implements Notification {
  send(message: string): void {
    console.log(`📱 SMS enviado: ${message}`);
  }
}

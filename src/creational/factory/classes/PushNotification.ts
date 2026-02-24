import { Notification } from "../interfaces/Notification";

export class PushNotification implements Notification {
  send(message: string): void {
    console.log(`🔔 Push notification enviada: ${message}`);
  }
}

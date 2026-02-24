import { Notification } from "../interfaces/Notification";

export abstract class NotificationFactory {
  abstract createNotification(): Notification;

  public notify(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

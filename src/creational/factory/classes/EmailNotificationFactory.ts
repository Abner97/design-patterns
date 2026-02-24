import { NotificationFactory } from "./NotificationFactory";
import { EmailNotification } from "./EmailNotification";
import { Notification } from "../interfaces/Notification";

export class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

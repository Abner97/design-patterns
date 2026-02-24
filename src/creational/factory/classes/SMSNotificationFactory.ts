import { NotificationFactory } from "./NotificationFactory";
import { SMSNotification } from "./SMSNotification";
import { Notification } from "../interfaces/Notification";

export class SMSNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }
}

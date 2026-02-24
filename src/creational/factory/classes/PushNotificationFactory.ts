import { NotificationFactory } from "./NotificationFactory";
import { PushNotification } from "./PushNotification";
import { Notification } from "../interfaces/Notification";

export class PushNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new PushNotification();
  }
}

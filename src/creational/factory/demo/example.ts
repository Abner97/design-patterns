import { EmailNotificationFactory } from "../classes/EmailNotificationFactory";
import { SMSNotificationFactory } from "../classes/SMSNotificationFactory";
import { PushNotificationFactory } from "../classes/PushNotificationFactory";
import { NotificationFactory } from "../classes/NotificationFactory";

console.log("=== EJEMPLO FACTORY METHOD: Notifications ===\n");

const emailFactory = new EmailNotificationFactory();
emailFactory.notify("Tu pedido ha sido enviado");

const smsFactory = new SMSNotificationFactory();
smsFactory.notify("Código de verificación: 123456");

const pushFactory = new PushNotificationFactory();
pushFactory.notify("Tienes un nuevo mensaje");

console.log("\n--- Selección dinámica de notificación ---\n");

function getNotificationFactory(type: string): NotificationFactory {
  switch (type) {
    case "email":
      return new EmailNotificationFactory();
    case "sms":
      return new SMSNotificationFactory();
    case "push":
      return new PushNotificationFactory();
    default:
      throw new Error("Tipo de notificación no soportado");
  }
}

const userPreference = "sms";
const factory = getNotificationFactory(userPreference);
factory.notify("Mensaje usando preferencia del usuario");

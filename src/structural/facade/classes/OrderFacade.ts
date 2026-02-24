import { InventorySystem } from "./InventorySystem";
import { PaymentSystem } from "./PaymentSystem";
import { ShippingSystem } from "./ShippingSystem";
import { NotificationSystem } from "./NotificationSystem";

export class OrderFacade {
  private inventory: InventorySystem;
  private payment: PaymentSystem;
  private shipping: ShippingSystem;
  private notification: NotificationSystem;

  constructor() {
    this.inventory = new InventorySystem();
    this.payment = new PaymentSystem();
    this.shipping = new ShippingSystem();
    this.notification = new NotificationSystem();
  }

  public placeOrder(
    productId: string,
    amount: number,
    address: string,
    email: string
  ): boolean {
    console.log("🛒 Iniciando proceso de orden...\n");

    if (!this.inventory.checkStock(productId)) {
      console.log("❌ Producto no disponible");
      return false;
    }

    this.inventory.reserveProduct(productId);

    if (!this.payment.processPayment(amount)) {
      console.log("❌ Pago rechazado");
      return false;
    }

    const trackingNumber = this.shipping.scheduleDelivery(address);
    this.notification.sendConfirmation(email, trackingNumber);

    console.log("\n✅ Orden completada exitosamente!");
    return true;
  }
}

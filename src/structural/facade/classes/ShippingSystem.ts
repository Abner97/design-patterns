export class ShippingSystem {
  scheduleDelivery(address: string): string {
    console.log(`🚚 Programando envío a ${address}...`);
    return "TRACK123456";
  }
}

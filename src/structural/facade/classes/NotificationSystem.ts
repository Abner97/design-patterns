export class NotificationSystem {
  sendConfirmation(email: string, trackingNumber: string): void {
    console.log(`📧 Enviando confirmación a ${email} (Tracking: ${trackingNumber})`);
  }
}

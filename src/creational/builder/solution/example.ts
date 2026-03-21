import { EmailBuilder } from "./classes/EmailBuilder";

console.log("=== SOLUCIÓN BUILDER: Email Builder ===\n");

const email1 = new EmailBuilder()
  .to("cliente@example.com")
  .subject("Confirmación de pedido")
  .body("Tu pedido #12345 ha sido confirmado")
  .cc("ventas@example.com")
  .addAttachment("factura.pdf")
  .build();

email1.display();

const email2 = new EmailBuilder()
  .to("equipo@example.com")
  .subject("Reunión semanal")
  .body("Recordatorio de la reunión del viernes")
  .cc("manager@example.com")
  .cc("hr@example.com")
  .bcc("ceo@example.com")
  .addAttachment("agenda.docx")
  .addAttachment("presentacion.pptx")
  .build();

email2.display();

// Probar validación
console.log("--- Probando validación ---\n");
try {
  const invalidEmail = new EmailBuilder()
    .body("Email sin destinatario ni asunto")
    .build();
} catch (error) {
  console.log(`❌ Error capturado: ${(error as Error).message}`);
}
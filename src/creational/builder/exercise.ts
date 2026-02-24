// EJERCICIO BUILDER
// Implementa un EmailBuilder para construir emails complejos

/*
INSTRUCCIONES:
1. Crea una clase Email con propiedades: to, subject, body, cc, bcc, attachments
2. Crea una clase EmailBuilder con métodos fluent para construir el email
3. Implementa validación en el método build() (to y subject son obligatorios)

EJEMPLO DE USO:
const email = new EmailBuilder()
  .to("user@example.com")
  .subject("Bienvenido")
  .body("Gracias por registrarte")
  .cc("admin@example.com")
  .addAttachment("documento.pdf")
  .build();
*/

// TODO: Implementa aquí tu solución

// PRUEBA TU SOLUCIÓN
console.log("=== EJERCICIO BUILDER: Email Builder ===\n");

// Descomenta cuando hayas implementado tu solución
/*
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
*/

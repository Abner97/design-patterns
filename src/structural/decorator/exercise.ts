// EJERCICIO DECORATOR
// Implementa decoradores para formatear texto

/*
INSTRUCCIONES:
1. Crea una interfaz TextComponent con método getText(): string
2. Implementa PlainText que retorne texto simple
3. Crea decoradores: BoldDecorator, ItalicDecorator, UnderlineDecorator
4. Los decoradores deben envolver el texto con etiquetas HTML

EJEMPLO DE USO:
let text = new PlainText("Hola Mundo");
text = new BoldDecorator(text);
text = new ItalicDecorator(text);
console.log(text.getText()); // <i><b>Hola Mundo</b></i>
*/

// TODO: Implementa aquí tu solución

// ============================================
// SOLUCIÓN (Descomenta para ver la respuesta)
// ============================================

/*
interface TextComponent {
  getText(): string;
}

class PlainText implements TextComponent {
  constructor(private text: string) {}

  getText(): string {
    return this.text;
  }
}

abstract class TextDecorator implements TextComponent {
  constructor(protected component: TextComponent) {}
  abstract getText(): string;
}

class BoldDecorator extends TextDecorator {
  getText(): string {
    return `<b>${this.component.getText()}</b>`;
  }
}

class ItalicDecorator extends TextDecorator {
  getText(): string {
    return `<i>${this.component.getText()}</i>`;
  }
}

class UnderlineDecorator extends TextDecorator {
  getText(): string {
    return `<u>${this.component.getText()}</u>`;
  }
}

class ColorDecorator extends TextDecorator {
  constructor(component: TextComponent, private color: string) {
    super(component);
  }

  getText(): string {
    return `<span style="color:${this.color}">${this.component.getText()}</span>`;
  }
}

// PRUEBA TU SOLUCIÓN
console.log("=== EJERCICIO DECORATOR: Text Formatters ===\n");

let text1: TextComponent = new PlainText("Hola Mundo");
console.log("Texto plano:", text1.getText());

text1 = new BoldDecorator(text1);
console.log("Con negrita:", text1.getText());

text1 = new ItalicDecorator(text1);
console.log("Con itálica:", text1.getText());

console.log("\n--- Diferentes combinaciones ---\n");

let text2: TextComponent = new PlainText("TypeScript");
text2 = new UnderlineDecorator(text2);
text2 = new ColorDecorator(text2, "blue");
console.log("Texto 2:", text2.getText());

let text3: TextComponent = new PlainText("Patrones de Diseño");
text3 = new BoldDecorator(text3);
text3 = new UnderlineDecorator(text3);
text3 = new ItalicDecorator(text3);
text3 = new ColorDecorator(text3, "red");
console.log("Texto 3:", text3.getText());
*/

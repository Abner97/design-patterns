import { TextComponent } from "./interfaces/TextComponent";
import { PlainText } from "./classes/PlainText";
import { BoldDecorator } from "./classes/BoldDecorator";
import { ItalicDecorator } from "./classes/ItalicDecorator";
import { UnderlineDecorator } from "./classes/UnderlineDecorator";
import { ColorDecorator } from "./classes/ColorDecorator";

console.log("=== SOLUCIÓN DECORATOR: Text Formatters ===\n");

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
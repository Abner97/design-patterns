import { TextComponent } from "../interfaces/TextComponent";

export class PlainText implements TextComponent {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }
}
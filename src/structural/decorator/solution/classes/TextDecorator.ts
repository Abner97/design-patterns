import { TextComponent } from "../interfaces/TextComponent";

export abstract class TextDecorator implements TextComponent {
  protected component: TextComponent;

  constructor(component: TextComponent) {
    this.component = component;
  }

  abstract getText(): string;
}
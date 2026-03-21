import { TextDecorator } from "./TextDecorator";

export class ColorDecorator extends TextDecorator {
  private color: string;

  constructor(component: any, color: string) {
    super(component);
    this.color = color;
  }

  getText(): string {
    return `<span style="color:${this.color}">${this.component.getText()}</span>`;
  }
}
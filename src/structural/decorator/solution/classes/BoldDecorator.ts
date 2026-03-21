import { TextDecorator } from "./TextDecorator";

export class BoldDecorator extends TextDecorator {
  getText(): string {
    return `<b>${this.component.getText()}</b>`;
  }
}
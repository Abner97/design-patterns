import { TextDecorator } from "./TextDecorator";

export class UnderlineDecorator extends TextDecorator {
  getText(): string {
    return `<u>${this.component.getText()}</u>`;
  }
}
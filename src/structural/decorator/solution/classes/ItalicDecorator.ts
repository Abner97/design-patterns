import { TextDecorator } from "./TextDecorator";

export class ItalicDecorator extends TextDecorator {
  getText(): string {
    return `<i>${this.component.getText()}</i>`;
  }
}
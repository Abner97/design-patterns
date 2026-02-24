export class TextEditor {
  private content: string = "";

  public write(text: string): void {
    this.content += text;
  }

  public delete(length: number): void {
    this.content = this.content.slice(0, -length);
  }

  public getContent(): string {
    return this.content;
  }

  public display(): void {
    console.log(`📝 Contenido: "${this.content}"`);
  }
}

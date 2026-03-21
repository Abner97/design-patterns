export class Email {
  public to: string;
  public subject: string;
  public body: string;
  public cc: string[] = [];
  public bcc: string[] = [];
  public attachments: string[] = [];

  constructor(
    to: string,
    subject: string,
    body: string,
    cc: string[] = [],
    bcc: string[] = [],
    attachments: string[] = []
  ) {
    this.to = to;
    this.subject = subject;
    this.body = body;
    this.cc = cc;
    this.bcc = bcc;
    this.attachments = attachments;
  }

  display(): void {
    console.log("📧 Email construido:");
    console.log(`Para: ${this.to}`);
    console.log(`Asunto: ${this.subject}`);
    console.log(`Cuerpo: ${this.body}`);
    
    if (this.cc.length > 0) {
      console.log(`CC: ${this.cc.join(", ")}`);
    }
    
    if (this.bcc.length > 0) {
      console.log(`BCC: ${this.bcc.join(", ")}`);
    }
    
    if (this.attachments.length > 0) {
      console.log(`Adjuntos: ${this.attachments.join(", ")}`);
    }
    
    console.log("---");
  }
}
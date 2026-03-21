import { Email } from "./Email";

export class EmailBuilder {
  private _to: string = "";
  private _subject: string = "";
  private _body: string = "";
  private _cc: string[] = [];
  private _bcc: string[] = [];
  private _attachments: string[] = [];

  to(email: string): EmailBuilder {
    this._to = email;
    return this;
  }

  subject(subject: string): EmailBuilder {
    this._subject = subject;
    return this;
  }

  body(body: string): EmailBuilder {
    this._body = body;
    return this;
  }

  cc(email: string): EmailBuilder {
    this._cc.push(email);
    return this;
  }

  bcc(email: string): EmailBuilder {
    this._bcc.push(email);
    return this;
  }

  addAttachment(filename: string): EmailBuilder {
    this._attachments.push(filename);
    return this;
  }

  build(): Email {
    if (!this._to) {
      throw new Error("El campo 'to' es obligatorio");
    }
    
    if (!this._subject) {
      throw new Error("El campo 'subject' es obligatorio");
    }

    return new Email(
      this._to,
      this._subject,
      this._body,
      [...this._cc],
      [...this._bcc],
      [...this._attachments]
    );
  }
}
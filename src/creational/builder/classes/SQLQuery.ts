export class SQLQuery {
  constructor(
    private selectClause: string,
    private fromClause: string,
    private whereClause: string,
    private orderByClause: string,
    private limitClause: string
  ) {}

  public toString(): string {
    let query = this.selectClause + this.fromClause;
    if (this.whereClause) query += this.whereClause;
    if (this.orderByClause) query += this.orderByClause;
    if (this.limitClause) query += this.limitClause;
    return query;
  }
}

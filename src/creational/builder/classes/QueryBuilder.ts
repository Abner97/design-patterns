import { SQLQuery } from "./SQLQuery";

export class QueryBuilder {
  private selectClause: string = "";
  private fromClause: string = "";
  private whereClause: string = "";
  private orderByClause: string = "";
  private limitClause: string = "";

  public select(...columns: string[]): QueryBuilder {
    this.selectClause = `SELECT ${columns.join(", ")} `;
    return this;
  }

  public from(table: string): QueryBuilder {
    this.fromClause = `FROM ${table} `;
    return this;
  }

  public where(condition: string): QueryBuilder {
    this.whereClause = `WHERE ${condition} `;
    return this;
  }

  public orderBy(column: string, direction: "ASC" | "DESC" = "ASC"): QueryBuilder {
    this.orderByClause = `ORDER BY ${column} ${direction} `;
    return this;
  }

  public limit(count: number): QueryBuilder {
    this.limitClause = `LIMIT ${count}`;
    return this;
  }

  public build(): SQLQuery {
    return new SQLQuery(
      this.selectClause,
      this.fromClause,
      this.whereClause,
      this.orderByClause,
      this.limitClause
    );
  }
}

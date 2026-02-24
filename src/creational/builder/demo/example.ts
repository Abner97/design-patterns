import { QueryBuilder } from "../classes/QueryBuilder";

console.log("=== EJEMPLO BUILDER: SQL Query Builder ===\n");

const query1 = new QueryBuilder()
  .select("id", "name", "email")
  .from("users")
  .where("age > 18")
  .orderBy("name", "ASC")
  .limit(10)
  .build();

console.log("Query 1:");
console.log(query1.toString());

console.log("\n--- Query más simple ---\n");

const query2 = new QueryBuilder()
  .select("*")
  .from("products")
  .where("price < 100")
  .build();

console.log("Query 2:");
console.log(query2.toString());

console.log("\n--- Query sin condiciones ---\n");

const query3 = new QueryBuilder()
  .select("title", "author")
  .from("books")
  .orderBy("title")
  .build();

console.log("Query 3:");
console.log(query3.toString());

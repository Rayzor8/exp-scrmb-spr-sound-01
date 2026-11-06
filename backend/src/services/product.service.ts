import db from "../db";
import { Product, productsTable } from "../db/schema";

export async function getAllProducts(): Promise<Product[]> {
  return await db.select().from(productsTable);
}

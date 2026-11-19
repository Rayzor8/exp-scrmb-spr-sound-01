import db from "../db";
import { Product, productsTable } from "../db/schema";

export async function getAllProducts(): Promise<Product[]> {
  return await db.select().from(productsTable);
}

export async function getAllGenres() {
  const genres = await db
    .selectDistinct({ genre: productsTable.genre })
    .from(productsTable);
  return genres.map(el => el.genre);
}

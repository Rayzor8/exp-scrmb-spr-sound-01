import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const productsTable = sqliteTable("products", {
  id: int("id").primaryKey(),
  title: text().notNull(),
  artist: text().notNull(),
  price: int().notNull(),
  image: text().notNull(),
  year: int(),
  genre: text(),
  stock: int(),
});

export type Product = typeof productsTable.$inferSelect;
export type NewProduct = typeof productsTable.$inferInsert;
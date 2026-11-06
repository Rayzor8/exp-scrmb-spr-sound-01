
import db from "./index";
import { productsTable } from "./schema";

async function main() {
  console.log("Seeding database...");

  await db.insert(productsTable).values([
    {
      title: "Thriller",
      artist: "Michael Jackson",
      price: 150000,
      image: "https://media.gettyimages.com/id/1173378325/photo/portrait-of-michael-jackson.jpg?s=2048x2048&w=gi&k=20&c=X9EkT4oEBj_qNhbOL8Lc8ErfaV-fDnYyBTGLLqO_7DY=",
      year: 1982,
      genre: "Pop",
      stock: 10,
    },
    {
      title: "Back in Black",
      artist: "AC/DC",
      price: 175000,
      image: "https://media.gettyimages.com/id/84879282/photo/photo-of-ac-dc-and-malcolm-young-and-cliff-williams-and-bon-scott-and-angus-young-and-ac-dc-and.jpg?s=2048x2048&w=gi&k=20&c=4atKwekMAcZ0dK-QF_pGtcUtvQw2CIE8xWNum-g0IWw=",
      year: 1980,
      genre: "Rock",
      stock: 5,
    },
  ]);

  console.log("Seeding finished!");
}

main();
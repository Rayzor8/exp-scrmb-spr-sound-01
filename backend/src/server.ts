import express from "express";
import cors from "cors";
import { productsRouter } from "./routes/product.route";

const app = express();
app.use(cors());

app.use("/api/products", productsRouter);

app.listen(8000, () => console.log("listening 8000"));

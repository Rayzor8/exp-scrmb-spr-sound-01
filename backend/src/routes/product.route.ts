import express from "express";
import * as ProductController from "../controllers/product.controller";

export const productsRouter = express.Router();

productsRouter.get("/", ProductController.getProducts);

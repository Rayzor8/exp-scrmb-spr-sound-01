import { Request, Response } from "express";
import * as ProductService from "../services/product.service";

export async function getProducts(_: Request, res: Response) {
  try {
    const products = await ProductService.getAllProducts();
    return res.status(200).json({ success: true, data: products });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: (error as Error).message });
  }
}

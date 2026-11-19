import { Request, Response } from "express";
import * as ProductService from "../services/product.service";
import { API_MESSAGES } from "../constants/api.messages";

export async function getProducts(_: Request, res: Response) {
  try {
    const products = await ProductService.getAllProducts();
    return res.status(200).json({
      success: true,
      message: API_MESSAGES.SUCCESS.PRODUCTS_RETRIEVED,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: API_MESSAGES.ERROR.PRODUCTS_RETRIEVAL_FAILED,
    });
  }
}

export async function getGenres(_: Request, res: Response) {
  try {
    const genres = await ProductService.getAllGenres();
    return res.status(200).json({
      success: true,
      message: API_MESSAGES.SUCCESS.GENRES_RETRIEVED,
      data: genres,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: API_MESSAGES.ERROR.GENRES_RETRIEVAL_FAILED,
    });
  }
}

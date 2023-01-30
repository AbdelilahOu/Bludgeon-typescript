import { errorResponse } from "../utils/error.handler";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  createStockMouvement,
} from "../database/repository";

import { Response, Request } from "express";
import { serializeBigInt } from "../utils/serializeBigInt";
import { updateProductT } from "../database/models";

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const rows = await getAllProducts();
    res.status(200).json({
      rows: serializeBigInt(rows),
    });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const getProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await getProduct(Number(id));
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const createProductController = async (req: Request, res: Response) => {
  const { Product } = req.body.data;
  console.log(Product);
  try {
    const row = await createProduct(Product);
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const updateProductController = async (req: Request, res: Response) => {
  console.log(req.body);
  const { Product }: { Product: updateProductT } = req.body.data;
  const { id } = req.params;
  try {
    const row = await updateProduct({ id: Number(id), data: Product });
    if (Product.quantity && Product.quantity > 0) {
      const updateStock = await createStockMouvement({
        productId: row.id,
        quantity: Product.quantity,
        model: "IN",
      });
    }
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await deleteProduct(Number(id));
    res.status(200).json({ row: row.id });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

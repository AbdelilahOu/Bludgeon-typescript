import { errorResponse } from "../utils/error.handler";
import { Response, Request } from "express";

import {
  createProduct,
  deleteProduct,
  readProduct,
  updateProduct,
} from "../database/repository";

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    await deleteProduct(Number(req.params?.id));
    res.json({ msg: "done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const createProductController = async (req: Request, res: Response) => {
  try {
    await createProduct(req.body?.product);
    res.status(200).json({ msg: "creation is done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const updateProductController = async (req: Request, res: Response) => {
  try {
    await updateProduct(Number(req.params?.id), req.body?.product);
    res.status(200).json({ msg: "update is done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const readProductController = async (req: Request, res: Response) => {
  try {
    const rows = await readProduct();
    res.status(200).json(rows);
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

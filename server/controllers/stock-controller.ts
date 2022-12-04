import { errorResponse } from "../utils/error.handler";
import { Response, Request } from "express";

import {
  createStock,
  deleteStock,
  readStock,
  updateStock,
} from "../database/repository";

export const deleteStockController = async (req: Request, res: Response) => {
  try {
    await deleteStock(Number(req.params?.id));
    res.json({ msg: "deleting is done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const createStockController = async (req: Request, res: Response) => {
  try {
    await createStock(req.body?.stock);
    res.status(200).json({ msg: "creation is done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const updateStockController = async (req: Request, res: Response) => {
  try {
    await updateStock(Number(req.params?.id), req.body?.stock);
    res.status(200).json({ msg: "update is done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const readStockController = async (req: Request, res: Response) => {
  try {
    const rows = await readStock();
    res.status(200).json(rows);
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

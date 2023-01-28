import { errorResponse } from "../utils/error.handler";
import {
  createStockMouvement,
  getStockMouvement,
  getStockMouvements,
} from "../database/repository";

import { Response, Request } from "express";
import { serializeBigInt } from "../utils/serializeBigInt";

export const createStockController = async (req: Request, res: Response) => {
  const { Stock } = req.body.data;
  try {
    const row = await createStockMouvement(Stock);
    res.status(200).json({
      rows: serializeBigInt(row),
    });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const getStocksController = async (req: Request, res: Response) => {
  try {
    const rows = await getStockMouvements();
    res.status(200).json({
      rows: serializeBigInt(rows),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const getStockController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await getStockMouvement(Number(id));
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

import { errorResponse } from "../utils/error.handler";
import {
  getAllSellers,
  createSeller,
  updateSeller,
  deleteSeller,
  getSeller,
} from "../database/repository";

import { Response, Request } from "express";
import { serializeBigInt } from "../utils/serializeBigInt";

export const getSellersController = async (req: Request, res: Response) => {
  try {
    const rows = await getAllSellers();
    res.status(200).json({
      rows: serializeBigInt(rows),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const getSellerController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await getSeller(Number(id));
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const createSellerController = async (req: Request, res: Response) => {
  const { Vendor } = req.body.data;
  try {
    const row = await createSeller(Vendor);
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const updateSellerController = async (req: Request, res: Response) => {
  const { Vendor } = req.body.data;
  const { id } = req.params;
  try {
    const row = await updateSeller({ id: Number(id), data: Vendor });
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const deleteSellerController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await deleteSeller(Number(id));
    res.status(200).json({ row: row.id });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

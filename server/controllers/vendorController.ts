import { errorResponse } from "../utils/error.handler";
import {
  getAllVendors,
  createVendor,
  updateVendor,
  deleteVendor,
  getVendor,
} from "../database/repository";

import { Response, Request } from "express";
import { serializeBigInt } from "../utils/serializeBigInt";

export const getVendorsController = async (req: Request, res: Response) => {
  try {
    const rows = await getAllVendors();
    res.status(200).json({
      rows: serializeBigInt(rows),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const getVendorController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await getVendor(Number(id));
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const createVendorController = async (req: Request, res: Response) => {
  const { Vendor } = req.body.data;
  try {
    const row = await createVendor(Vendor);
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const updateVendorController = async (req: Request, res: Response) => {
  const { Vendor } = req.body.data;
  const { id } = req.params;
  try {
    const row = await updateVendor({ id: Number(id), data: Vendor });
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const deleteVendorController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await deleteVendor(Number(id));
    res.status(200).json({ row: row.id });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

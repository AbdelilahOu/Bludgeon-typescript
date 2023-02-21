import { errorResponse } from "../utils/error.handler";
import { Response, Request } from "express";
import { serializeBigInt } from "../utils/serializeBigInt";
import {
  createCredi,
  deleteCredi,
  getCredis,
  updateCredi,
} from "../database/repository/crediRepo";

export const createCrediController = async (req: Request, res: Response) => {
  const { Credi } = req.body.data;
  try {
    const row = await createCredi(Credi);
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const getCredisController = async (req: Request, res: Response) => {
  try {
    const rows = await getCredis();
    res.status(200).json({
      rows: serializeBigInt(rows),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const updateCrediController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Credi } = req.body.data;
  try {
    const row = await updateCredi(Number(id), Credi);
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const deleteCrediController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await deleteCredi(Number(id));
    res.status(200).json({ row: row.id });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

import { errorResponse } from "../utils/error.handler";
import {
  getAllInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoice,
} from "../database/repository";

import { Response, Request } from "express";
import { serializeBigInt } from "../utils/serializeBigInt";

export const getInvoicesController = async (req: Request, res: Response) => {
  try {
    const rows = await getAllInvoices();
    res.status(200).json({
      rows: serializeBigInt(rows),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const getInvoiceController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await getInvoice(Number(id));
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const createInvoiceController = async (req: Request, res: Response) => {
  const { Invoice } = req.body.data;
  try {
    const row = await createInvoice(Invoice);
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const updateInvoiceController = async (req: Request, res: Response) => {
  const { Invoice } = req.body.data;
  const { id } = req.params;
  try {
    const row = await updateInvoice({ id: Number(id), data: Invoice });
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const deleteInvoiceController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await deleteInvoice(Number(id));
    res.status(200).json({ row: row.id });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

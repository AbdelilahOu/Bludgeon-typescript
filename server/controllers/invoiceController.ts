<<<<<<< HEAD
import { errorResponse } from "../utils/error.handler";
import {
  createInvoiceItem,
  updateInvoiceItem,
  getAllInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoice,
} from "../database/repository";

import { Response, Request } from "express";
import { serializeBigInt } from "../utils/serializeBigInt";
import { incomingInvoiceT } from "../database/models";

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
  const { Invoice }: { Invoice: incomingInvoiceT } = req.body.data;
  try {
    const { invoiceItems } = Invoice;
    const InvoiceRow = await createInvoice(Invoice);
    let invoiceRowItems = [];
    for await (const item of invoiceItems) {
      const RowItem = await createInvoiceItem({
        ...item,
        invoiceId: InvoiceRow.id,
      });
      invoiceRowItems.push(RowItem);
    }
    res.status(200).json({
      row: serializeBigInt({
        ...InvoiceRow,
        invoiceItems: invoiceRowItems,
      }),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const updateInvoiceController = async (req: Request, res: Response) => {
  const { Invoice }: { Invoice: incomingInvoiceT } = req.body.data;
  const { id } = req.params;
  try {
    const { vendorId, total, invoiceItems } = Invoice;

    const row = await updateInvoice({
      id: Number(id),
      data: { vendorId, total },
    });
    const rowItems = [];
    for await (const item of invoiceItems) {
      const updatedItem = await updateInvoiceItem({
        ...item,
        invoiceId: row.id,
      });
      rowItems.push(updatedItem);
    }
    res.status(200).json({
      row: serializeBigInt({
        ...row,
        invoiceItems: rowItems,
      }),
    });
  } catch (error) {
    console.log(error);
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
=======
import { errorResponse } from "../utils/error.handler";
import {
  createInvoiceItem,
  updateInvoiceItem,
  getAllInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoice,
} from "../database/repository";

import { Response, Request } from "express";
import { serializeBigInt } from "../utils/serializeBigInt";
import { incomingInvoiceT } from "../database/models";

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
  const { Invoice }: { Invoice: incomingInvoiceT } = req.body.data;
  try {
    const { invoiceItems } = Invoice;
    const InvoiceRow = await createInvoice(Invoice);
    let invoiceRowItems = [];
    for await (const item of invoiceItems) {
      const RowItem = await createInvoiceItem({
        ...item,
        invoiceId: InvoiceRow.id,
      });
      invoiceRowItems.push(RowItem);
    }
    res.status(200).json({
      row: serializeBigInt({
        ...InvoiceRow,
        invoiceItems: invoiceRowItems,
      }),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const updateInvoiceController = async (req: Request, res: Response) => {
  const { Invoice }: { Invoice: incomingInvoiceT } = req.body.data;
  const { id } = req.params;
  try {
    const { vendorId, total, invoiceItems } = Invoice;

    const row = await updateInvoice({
      id: Number(id),
      data: { vendorId, total },
    });
    const rowItems = [];
    for await (const item of invoiceItems) {
      const updatedItem = await updateInvoiceItem({
        ...item,
        invoiceId: row.id,
      });
      rowItems.push(updatedItem);
    }
    res.status(200).json({
      row: serializeBigInt({
        ...row,
        invoiceItems: rowItems,
      }),
    });
  } catch (error) {
    console.log(error);
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
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834

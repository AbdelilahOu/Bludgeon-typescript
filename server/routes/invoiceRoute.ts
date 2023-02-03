import {
  getInvoiceController,
  getInvoicesController,
  createInvoiceController,
  updateInvoiceController,
  deleteInvoiceController,
} from "../controllers/InvoiceController";
import { Router } from "express";

const route = Router();

route
  .get("/", getInvoicesController)
  .get("/:id", getInvoiceController)
  .post("/", createInvoiceController)
  .put("/:id", updateInvoiceController)
  .delete("/:id", deleteInvoiceController);

export { route as invoiceRoute };

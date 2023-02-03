<<<<<<< HEAD
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
=======
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
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834

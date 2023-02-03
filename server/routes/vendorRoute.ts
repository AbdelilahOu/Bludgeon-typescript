import {
  getVendorController,
  getVendorsController,
  createVendorController,
  updateVendorController,
  deleteVendorController,
} from "../controllers/VendorController";
import { Router } from "express";

const route = Router();

route
  .get("/", getVendorsController)
  .get("/:id", getVendorController)
  .post("/", createVendorController)
  .put("/:id", updateVendorController)
  .delete("/:id", deleteVendorController);

export { route as vendorRoute };

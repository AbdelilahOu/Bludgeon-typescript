<<<<<<< HEAD
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
=======
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
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834

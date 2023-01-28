import {
  getProductController,
  getProductsController,
  createProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/ProductController";
import { Router } from "express";

const route = Router();

route
  .get("/", getProductsController)
  .get("/:id", getProductController)
  .post("/", createProductController)
  .put("/:id", updateProductController)
  .delete("/:id", deleteProductController);

export { route as productRoute };

<<<<<<< HEAD
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
=======
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
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834

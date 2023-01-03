import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  updateProductController,
  readProductController,
} from "../controllers";

const router = Router();

router
  .get("/", readProductController)
  .post("/", createProductController)
  .post("/:id", updateProductController)
  .delete("/:id", deleteProductController);

export { router as productRoute };

import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  updateProductController,
  readProductController,
} from "../controllers";

const router = Router();

router
  .get("/read", readProductController)
  .post("/create", createProductController)
  .post("/delete/:id", deleteProductController)
  .post("/update/:id", updateProductController);

export { router as productRoute };

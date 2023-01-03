import { Router } from "express";
import {
  createStockController,
  deleteStockController,
  updateStockController,
  readStockController,
} from "../controllers";

const router = Router();

router
  .get("/", readStockController)
  .post("/", createStockController)
  .post("/:id", updateStockController)
  .delete("/:id", deleteStockController);

export { router as stockRoute };

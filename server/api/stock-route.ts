import { Router } from "express";
import {
  createStockController,
  deleteStockController,
  updateStockController,
  readStockController,
} from "../controllers";

const router = Router();

router
  .get("/read", readStockController)
  .post("/create", createStockController)
  .post("/delete/:id", deleteStockController)
  .post("/update/:id", updateStockController);

export { router as stockRoute };

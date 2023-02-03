<<<<<<< HEAD
import {
  getStockController,
  createStockController,
  getStocksController,
} from "../controllers/StockController";
import { Router } from "express";

const route = Router();

route
  .get("/", getStocksController)
  .get("/:id", getStockController)
  .post("/", createStockController);

export { route as stockRoute };
=======
import {
  getStockController,
  createStockController,
  getStocksController,
} from "../controllers/StockController";
import { Router } from "express";

const route = Router();

route
  .get("/", getStocksController)
  .get("/:id", getStockController)
  .post("/", createStockController);

export { route as stockRoute };
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834

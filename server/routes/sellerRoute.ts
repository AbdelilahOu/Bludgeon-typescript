import {
  getSellerController,
  getSellersController,
  createSellerController,
  updateSellerController,
  deleteSellerController,
} from "../controllers/sellerController";
import { Router } from "express";

const route = Router();

route
  .get("/", getSellersController)
  .get("/:id", getSellerController)
  .post("/", createSellerController)
  .put("/:id", updateSellerController)
  .delete("/:id", deleteSellerController);

export { route as sellerRoute };

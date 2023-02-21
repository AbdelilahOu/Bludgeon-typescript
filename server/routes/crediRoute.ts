import {
  createCrediController,
  deleteCrediController,
  getCredisController,
  updateCrediController,
} from "../controllers/CrediController";
import { Router } from "express";

const route = Router();

route
  .get("/", getCredisController)
  .get("/:id", updateCrediController)
  .post("/", createCrediController)
  .delete("/:id", deleteCrediController);

export { route as crediRoute };

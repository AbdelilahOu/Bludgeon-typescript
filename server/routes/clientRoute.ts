import {
  getClientController,
  getClientsController,
  createClientController,
  updateClientController,
  deleteClientController,
} from "../controllers/clientController";
import { Router } from "express";

const route = Router();

route
  .get("/", getClientsController)
  // .get("/stats", getClientStatsController)
  .post("/", createClientController)
  .get("/:id", getClientController)
  .put("/:id", updateClientController)
  .delete("/:id", deleteClientController);

export { route as clientRoute };

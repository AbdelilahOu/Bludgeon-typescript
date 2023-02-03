<<<<<<< HEAD
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
=======
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
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834

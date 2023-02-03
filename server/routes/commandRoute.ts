<<<<<<< HEAD
import {
  getCommandController,
  getCommandsController,
  createCommandController,
  updateCommandController,
  deleteCommandController,
  deleteCommandItemController,
} from "../controllers/commandController";
import { Router } from "express";

const route = Router();

route
  .get("/", getCommandsController)
  // .get("/stats",getCommandsStatsController)
  .get("/:id", getCommandController)
  .post("/", createCommandController)
  .put("/:id", updateCommandController)
  .delete("/:id", deleteCommandController)
  .delete("/item/:id", deleteCommandItemController);

export { route as commandRoute };
=======
import {
  getCommandController,
  getCommandsController,
  createCommandController,
  updateCommandController,
  deleteCommandController,
  deleteCommandItemController,
} from "../controllers/commandController";
import { Router } from "express";

const route = Router();

route
  .get("/", getCommandsController)
  // .get("/stats",getCommandsStatsController)
  .get("/:id", getCommandController)
  .post("/", createCommandController)
  .put("/:id", updateCommandController)
  .delete("/:id", deleteCommandController)
  .delete("/item/:id", deleteCommandItemController);

export { route as commandRoute };
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834

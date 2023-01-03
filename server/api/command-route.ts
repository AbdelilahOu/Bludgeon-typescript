import { Router } from "express";
import {
  createCommandController,
  deleteCommandController,
  updateCommandController,
  readCommandController,
} from "../controllers";

const router = Router();

router
  .get("/", readCommandController)
  .post("/", createCommandController)
  .post("/:id", updateCommandController)
  .delete("/:id", deleteCommandController);

export { router as commandRoute };

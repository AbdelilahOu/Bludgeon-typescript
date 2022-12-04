import { Router } from "express";
import {
  createCommandController,
  deleteCommandController,
  updateCommandController,
  readCommandController,
} from "../controllers";

const router = Router();

router
  .get("/read", readCommandController)
  .post("/create", createCommandController)
  .post("/delete/:id", deleteCommandController)
  .post("/update/:id", updateCommandController);

export { router as commandRoute };

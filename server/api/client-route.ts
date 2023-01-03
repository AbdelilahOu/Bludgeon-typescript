import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  updateClientController,
  readClientController,
} from "../controllers";

const router = Router();

router
  .get("/", readClientController)
  .post("/", createClientController)
  .post("/:id", updateClientController)
  .delete("/:id", deleteClientController);

export { router as clientRoute };

import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  updateClientController,
  readClientController,
} from "../controllers";

const router = Router();

router
  .get("/read", readClientController)
  .post("/create", createClientController)
  .post("/delete/:id", deleteClientController)
  .post("/update/:id", updateClientController);

export { router as clientRoute };

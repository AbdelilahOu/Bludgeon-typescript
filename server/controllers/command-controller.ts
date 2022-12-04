import { errorResponse } from "../utils/error.handler";
import { Response, Request } from "express";
import {
  createCommand,
  deleteCommand,
  readCommand,
  updateCommand,
} from "../database/repository";

export const deleteCommandController = async (req: Request, res: Response) => {
  try {
    await deleteCommand(Number(req.params?.id));
    res.json({ msg: "done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const createCommandController = async (req: Request, res: Response) => {
  try {
    await createCommand(req.body?.command, req.body?.command?.commandLine);
    res.status(200).json({ msg: "creation is done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const updateCommandController = async (req: Request, res: Response) => {
  try {
    await updateCommand(Number(req.params?.id), req.body?.command);
    res.status(200).json({ msg: "update is done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const readCommandController = async (req: Request, res: Response) => {
  try {
    const rows = await readCommand();
    res.status(200).json(rows);
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

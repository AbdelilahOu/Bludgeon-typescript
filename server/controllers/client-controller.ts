import { errorResponse } from "../utils/error.handler";
import { Response, Request, NextFunction } from "express";
import {
  createClient,
  deleteClient,
  readClients,
  updateClient,
} from "../database/repository";

export const readClientController = async (req: Request, res: Response) => {
  try {
    const rows = await readClients();
    console.log(rows);
    res.status(200).json(rows);
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const deleteClientController = async (req: Request, res: Response) => {
  try {
    await deleteClient(Number(req.params?.id));
    res.json({ msg: "done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const updateClientController = async (req: Request, res: Response) => {
  try {
    await updateClient(Number(req.params?.id), req.body?.client);
    res.status(200).json({ msg: "update is done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const createClientController = async (req: Request, res: Response) => {
  try {
    console.log(req.body.client);
    await createClient(req.body?.client);

    res.status(200).json({ msg: "creation is done" });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

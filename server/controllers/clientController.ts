<<<<<<< HEAD
import { errorResponse } from "../utils/error.handler";
import {
  getAllClients,
  createClient,
  updateClient,
  deleteClient,
  getClient,
} from "../database/repository";
import { Response, Request } from "express";

export const getClientsController = async (req: Request, res: Response) => {
  try {
    const rows = await getAllClients();
    res.status(200).json({ rows });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const getClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await getClient(Number(id));
    res.status(200).json({ row });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const createClientController = async (req: Request, res: Response) => {
  const { Client } = req.body.data;
  if (!Client) return res.status(404).json({ message: "invalide client" });
  try {
    const row = await createClient(Client);
    res.status(200).json({ row });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const updateClientController = async (req: Request, res: Response) => {
  const { Client } = req.body.data;
  const { id } = req.params;
  if (!Client) return res.status(404).json({ message: "invalide client" });
  try {
    const row = await updateClient({ id: Number(id), data: Client });
    res.status(200).json({ row });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const deleteClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await deleteClient(Number(id));
    res.status(200).json({ row: row.id });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};
=======
import { errorResponse } from "../utils/error.handler";
import {
  getAllClients,
  createClient,
  updateClient,
  deleteClient,
  getClient,
} from "../database/repository";
import { Response, Request } from "express";

export const getClientsController = async (req: Request, res: Response) => {
  try {
    const rows = await getAllClients();
    res.status(200).json({ rows });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const getClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await getClient(Number(id));
    res.status(200).json({ row });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const createClientController = async (req: Request, res: Response) => {
  const { Client } = req.body.data;
  if (!Client) return res.status(404).json({ message: "invalide client" });
  try {
    const row = await createClient(Client);
    res.status(200).json({ row });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const updateClientController = async (req: Request, res: Response) => {
  const { Client } = req.body.data;
  const { id } = req.params;
  if (!Client) return res.status(404).json({ message: "invalide client" });
  try {
    const row = await updateClient({ id: Number(id), data: Client });
    res.status(200).json({ row });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const deleteClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await deleteClient(Number(id));
    res.status(200).json({ row: row.id });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834

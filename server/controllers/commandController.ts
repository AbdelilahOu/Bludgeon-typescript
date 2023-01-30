import { errorResponse } from "../utils/error.handler";
import {
  createCommandItem,
  updateCommandItem,
  deleteCommandItem,
  getAllCommands,
  createCommand,
  updateCommand,
  deleteCommand,
  getCommand,
} from "../database/repository";
import { Response, Request } from "express";
import { incomingCommandT } from "../database/models";
import { serializeBigInt } from "../utils/serializeBigInt";

export const getCommandsController = async (req: Request, res: Response) => {
  try {
    const rows = await getAllCommands();
    res.status(200).json({
      rows: serializeBigInt(rows),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const getCommandController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await getCommand(Number(id));
    res.status(200).json({
      row: serializeBigInt(row),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const createCommandController = async (req: Request, res: Response) => {
  const { Command }: { Command: incomingCommandT } = req.body.data;
  const { status, clientId, commandItems } = Command;
  try {
    const commandRow = await createCommand({ status, clientId });

    let commandRowItems: any[] = [];
    for await (const item of commandItems) {
      const itemRow = await createCommandItem({
        ...item,
        commandId: commandRow.id,
      });
      commandRowItems.push(itemRow);
    }

    res.status(200).json({
      row: serializeBigInt({
        ...commandRow,
        commandItems: {
          ...commandRowItems,
        },
      }),
    });
  } catch (error) {
    errorResponse(res, error.message, 404, false);
  }
};

export const updateCommandController = async (req: Request, res: Response) => {
  const { Command }: { Command: incomingCommandT } = req.body.data;
  const { id } = req.params;
  try {
    const { status, clientId, commandItems } = Command;

    const updatedCommand = await updateCommand({
      id: Number(id),
      data: {
        status,
        clientId,
      },
    });

    let updatedCommandItem: any[] = [];
    for await (const item of commandItems) {
      const updatedItem = await updateCommandItem({
        ...item,
        commandId: updatedCommand.id,
      });
      updatedCommandItem.push(updatedItem);
    }

    res.status(200).json({
      row: serializeBigInt({
        ...updatedCommand,
        commandItems: updatedCommandItem,
      }),
    });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const deleteCommandController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const row = await deleteCommand(Number(id));
    res.status(200).json({ row: row.id });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

export const deleteCommandItemController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const row = await deleteCommandItem(Number(id));
    res.status(200).json({ row: row.id });
  } catch (error) {
    console.log(error);
    errorResponse(res, error.message, 404, false);
  }
};

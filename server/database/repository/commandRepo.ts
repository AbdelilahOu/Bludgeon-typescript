import { prisma } from "..";

import {
  newCommandItemT,
  newCommandT,
  updateCommmandT,
  updateData,
  updateCommandItemT,
} from "../models";

export const getCommand = (id: number) => {
  return prisma.command.findUnique({ where: { id } });
};

export const getAllCommands = () => {
  return prisma.command.findMany({
    include: {
      commandItems: true,
    },
    orderBy: {
      id: "desc",
    },
  });
};

export const createCommand = (data: newCommandT) => {
  return prisma.command.create({
    data: {
      status: data.status,
      client: {
        connect: {
          id: data.clientId,
        },
      },
    },
  });
};

export const createCommandItem = (data: newCommandItemT) => {
  return prisma.commandItem.create({
    data: {
      product: {
        connect: {
          id: data.productId,
        },
      },
      command: {
        connect: {
          id: data.commandId,
        },
      },
      quantity: data.quantity,
      stock: {
        create: {
          product: {
            connect: {
              id: data.productId,
            },
          },
          quantity: -data.quantity,
          model: "OUT",
        },
      },
    },
  });
};

export const updateCommandItem = (data: updateCommandItemT) => {
  return prisma.commandItem.upsert({
    where: {
      id: data.id ? data.id : 0,
    },
    update: {
      quantity: data.quantity,
      product: {
        connect: {
          id: data.productId,
        },
      },
    },
    create: {
      product: {
        connect: {
          id: data.productId,
        },
      },
      command: {
        connect: {
          id: data.commandId,
        },
      },
      quantity: data.quantity,
      stock: {
        create: {
          product: {
            connect: {
              id: data.productId,
            },
          },
          quantity: -data.quantity,
          model: "OUT",
        },
      },
    },
  });
};

export const deleteCommandItem = (id: number) => {
  return prisma.commandItem.delete({
    where: {
      id,
    },
  });
};

export const updateCommand = (command: updateData<updateCommmandT>) => {
  return prisma.command.update({
    where: {
      id: command.id,
    },
    data: {
      status: command.data.status,
      client: command.data.clientId
        ? { connect: { id: command.data.clientId } }
        : undefined,
    },
  });
};

export const deleteCommand = (id: number) => {
  return prisma.command.delete({
    where: {
      id,
    },
  });
};

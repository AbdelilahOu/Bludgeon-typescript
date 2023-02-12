import { prisma } from "..";

import {
  newCommandItemT,
  newCommandT,
  updateCommmandT,
  updateData,
  updateCommandItemT,
} from "../models";

export const getCommand = (id: number) => {
  return prisma.command.findUnique({
    where: { id },
    include: {
      commandItems: {
        include: {
          product: {
            select: {
              name: true,
              price: true,
              type: true,
            },
          },
        },
      },
      vendor: true,
    },
  });
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
      vendor: {
        connect: {
          id: data.vendorId,
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
          quantity: data.quantity,
          model: "IN",
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
      stock: {
        update: {
          quantity: data.quantity,
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
          quantity: data.quantity,
          model: "IN",
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
      vendor: command.data.vendorId
        ? { connect: { id: command.data.vendorId } }
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

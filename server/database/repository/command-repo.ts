import { newCommandItemT, updateCommandT } from "../models";
import { prisma } from "..";

export const createCommand = (lines: newCommandItemT[], id: number) => {
  return prisma.command.create({
    data: {
      items: {
        create: lines.map((line) => ({
          product: { connect: { id: line.productId } },
          quantity: line.quantity,
        })),
      },
      Invoice: {},
      client: {
        connect: {
          id,
        },
      },
    },
  });
};

export const readCommand = (): Promise<any[]> => {
  return prisma.command.findMany({
    include: {
      items: {
        select: {
          product: true,
        },
      },
      client: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const deleteCommand = (id: number) => {
  return prisma.command.delete({
    where: {
      id: id,
    },
  });
};

export const updateCommand = (id: number, updateData: updateCommandT) => {
  return prisma.command.update({
    where: {
      id: id,
    },
    data: {
      items: {
        update: updateData.items.map((item) => ({
          where: { id: item.productId },
          data: { quantity: item.quantity },
        })),
      },
    },
  });
};

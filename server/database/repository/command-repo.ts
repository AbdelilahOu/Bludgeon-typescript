import { prisma } from "..";
import { commandlineT, createCommandT, updateCommandT } from "../models";

export const createCommand = (command: createCommandT, line: commandlineT) => {
  return prisma.command.create({
    data: {
      ...command,
      commandLine: {
        create: {
          ...line,
        },
      },
    },
  });
};

export const readCommand = (): Promise<any[]> => {
  return prisma.command.findMany({
    include: {
      commandLine: {
        select: {
          product: true,
        },
      },
      client: {
        select: {
          c_name: true,
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
      ...updateData,
    },
  });
};

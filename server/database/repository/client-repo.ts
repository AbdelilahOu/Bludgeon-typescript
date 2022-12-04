import { clientT, createClientT, updateClientT } from "../models";
import { prisma } from "..";

export const readClients = (): Promise<clientT[]> => {
  return prisma.client.findMany();
};

export const deleteClient = (id: number) => {
  return prisma.client.delete({
    where: {
      id: id,
    },
  });
};

export const updateClient = (id: number, updateData: updateClientT) => {
  return prisma.client.update({
    where: {
      id: id,
    },
    data: {
      ...updateData,
    },
  });
};

export const createClient = (client: createClientT) => {
  return prisma.client.create({
    data: {
      ...client,
    },
  });
};

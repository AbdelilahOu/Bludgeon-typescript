import { prisma } from "..";
import { createStockT, stockT, updateStockT } from "../models";

export const readStock = (): Promise<stockT[]> => {
  return prisma.stock.findMany({});
};

export const deleteStock = (id: number) => {
  return prisma.stock.delete({
    where: {
      id: id,
    },
  });
};

export const createStock = (createData: createStockT) => {
  return prisma.stock.create({
    data: {
      ...createData,
    },
  });
};

export const updateStock = (id: number, updateData: updateStockT) => {
  return prisma.stock.update({
    where: {
      id: id,
    },
    data: {
      ...updateData,
    },
  });
};

import { prisma } from "../index";
import { newProductT, productT, updateProductT } from "../models";

export const readProduct = (): Promise<productT[]> => {
  return prisma.product.findMany({});
};

export const deleteProduct = (id: number) => {
  return prisma.product.delete({
    where: {
      id: id,
    },
  });
};

export const updateProduct = (id: number, updateData: updateProductT) => {
  return prisma.product.update({
    where: {
      id: id,
    },
    data: {
      ...updateData,
    },
  });
};

export const createProduct = (createData: newProductT) => {
  return prisma.product.create({
    data: {
      ...createData,
    },
  });
};

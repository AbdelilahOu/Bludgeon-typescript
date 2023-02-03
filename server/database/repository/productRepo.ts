<<<<<<< HEAD
import { newProductT, updateData, updateProductT } from "../models";
import { prisma } from "..";

export const createProduct = (data: newProductT) => {
  return prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
      stockMouvements: {
        create: {
          quantity: Number(data.quantity),
          model: "IN",
        },
      },
    },
  });
};

export const updateProduct = (update: updateData<updateProductT>) => {
  return prisma.product.update({
    where: { id: update.id },
    data: {
      name: update.data.name,
      price: update.data.price,
      description: update.data.description,
    },
  });
};

export const getProduct = (id: number) => {
  return prisma.product.findUnique({ where: { id } });
};

export const getAllProducts = () => {
  return prisma.product.findMany({
    include: {
      stockMouvements: {
        select: {
          quantity: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });
};

export const deleteProduct = (id: number) => {
  return prisma.product.delete({ where: { id } });
};
=======
import { newProductT, updateData, updateProductT } from "../models";
import { prisma } from "..";

export const createProduct = (data: newProductT) => {
  return prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
      stockMouvements: {
        create: {
          quantity: Number(data.quantity),
          model: "IN",
        },
      },
    },
  });
};

export const updateProduct = (update: updateData<updateProductT>) => {
  return prisma.product.update({
    where: { id: update.id },
    data: {
      name: update.data.name,
      price: update.data.price,
      description: update.data.description,
    },
  });
};

export const getProduct = (id: number) => {
  return prisma.product.findUnique({ where: { id } });
};

export const getAllProducts = () => {
  return prisma.product.findMany({
    include: {
      stockMouvements: {
        select: {
          quantity: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });
};

export const deleteProduct = (id: number) => {
  return prisma.product.delete({ where: { id } });
};
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834

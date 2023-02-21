import { prisma } from "..";
import { newStockT } from "../models";

export const createStockMouvement = (data: newStockT) => {
  return prisma.stockMouvement.create({
    data: {
      quantity: data.quantity,
      model: data.model,
      product: {
        connect: {
          id: data.productId,
        },
      },
    },
  });
};

export const getStockMouvement = (id: number) => {
  return prisma.stockMouvement.findUnique({
    where: { id },
    select: {
      commandItem: {
        select: {
          quantity: true,
        },
      },
    },
  });
};

export const getStockMouvements = () => {
  return prisma.stockMouvement.findMany({
    include: {
      product: {
        select: {
          price: true,
          name: true,
        },
      },
      commandItem: {
        select: {
          quantity: true,
          commandId: true,
        },
      },
      invoiceItem: {
        select: {
          quantity: true,
          invoiceId: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });
};

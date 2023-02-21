import { prisma } from "..";
import { newSellerT, updateData, updateSellerT } from "../models";

export const createSeller = (data: newSellerT) => {
  return prisma.vendor.create({ data });
};

export const updateSeller = (Seller: updateData<updateSellerT>) => {
  return prisma.vendor.update({
    where: { id: Seller.id },
    data: Seller.data,
  });
};

export const getSeller = (id: number) => {
  return prisma.vendor.findUnique({ where: { id } });
};

export const getAllSellers = () => {
  return prisma.vendor.findMany({
    orderBy: {
      id: "desc",
    },
  });
};

export const deleteSeller = (id: number) => {
  return prisma.vendor.delete({ where: { id } });
};

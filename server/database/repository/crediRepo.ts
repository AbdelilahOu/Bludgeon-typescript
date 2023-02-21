import { prisma } from "..";

export const createCredi = (Credi: any) => {
  return prisma.credi.create({
    data: {
      client: {
        connect: {
          id: 1,
        },
      },
      price: 20,
    },
  });
};

export const updateCredi = (id: number, Credi: any) => {
  return prisma.credi.update({
    where: {
      id: 1,
    },
    data: {
      price: 30,
    },
  });
};

export const getCredis = () => {
  return prisma.credi.findMany({
    include: {
      client: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const deleteCredi = (id: number) => {
  return prisma.credi.delete({
    where: {
      id,
    },
  });
};

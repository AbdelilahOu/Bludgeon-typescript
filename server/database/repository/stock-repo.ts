import { prisma } from "..";
import { stockMovementT } from "../models";

export const readStock = (): Promise<stockMovementT[]> => {
  return prisma.stockMovement.findMany({});
};

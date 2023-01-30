import {
  newInvoiceT,
  updateInvoiceT,
  updateData,
  newInvoiceItemT,
  updateInvoiceItemT,
} from "../models";
import { prisma } from "..";

export const createInvoice = (data: newInvoiceT) => {
  return prisma.invoice.create({
    data: {
      total: data.total ?? 0,
      vendor: { connect: { id: data.vendorId } },
    },
  });
};

export const updateInvoice = (invoice: updateData<updateInvoiceT>) => {
  return prisma.invoice.update({
    where: { id: invoice.id },
    data: {
      total: invoice.data.total ? invoice.data.total : undefined,
      vendor: invoice.data.vendorId
        ? { connect: { id: invoice.data.vendorId } }
        : undefined,
    },
  });
};

export const getInvoice = (id: number) => {
  return prisma.invoice.findUnique({ where: { id } });
};

export const getAllInvoices = () => {
  // {
  //   select: {
  //     id: true,
  //     quantity: true,
  //     product: {
  //       select: {
  //         price: true,
  //       },
  //     },
  //   },
  // },
  return prisma.invoice.findMany({
    include: {
      invoiceItems: true,
    },

    orderBy: {
      id: "desc",
    },
  });
};

export const deleteInvoice = (id: number) => {
  return prisma.invoice.delete({ where: { id } });
};

export const createInvoiceItem = (data: newInvoiceItemT) => {
  return prisma.invoiceItem.create({
    data: {
      product: {
        connect: {
          id: data.productId,
        },
      },
      invoice: {
        connect: {
          id: data.invoiceId,
        },
      },
      quantity: data.quantity,
      stock: {
        create: {
          product: {
            connect: {
              id: data.productId,
            },
          },
          quantity: data.quantity,
          model: "IN",
        },
      },
    },
  });
};

export const updateInvoiceItem = (data: updateInvoiceItemT) => {
  console.log(data);

  return prisma.invoiceItem.upsert({
    where: {
      id: data.id ? data.id : 0,
    },
    update: {
      quantity: data.quantity,
      product: {
        connect: {
          id: data.productId,
        },
      },
      stock: {
        update: {
          quantity: data.quantity,
        },
      },
    },
    create: {
      product: {
        connect: {
          id: data.productId,
        },
      },
      invoice: {
        connect: {
          id: data.invoiceId,
        },
      },
      quantity: data.quantity,
      stock: {
        create: {
          product: {
            connect: {
              id: data.productId,
            },
          },
          quantity: data.quantity,
          model: "IN",
        },
      },
    },
  });
};

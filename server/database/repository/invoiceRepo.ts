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
      client: { connect: { id: data.clientId } },
    },
  });
};

export const updateInvoice = (invoice: updateData<updateInvoiceT>) => {
  return prisma.invoice.update({
    where: { id: invoice.id },
    data: {
      total: invoice.data.total ? invoice.data.total : undefined,
      client: invoice.data.clientId
        ? { connect: { id: invoice.data.clientId } }
        : undefined,
    },
  });
};

export const getInvoice = (id: number) => {
  return prisma.invoice.findUnique({
    where: { id },
    include: {
      invoiceItems: {
        include: {
          product: {
            select: {
              price: true,
              name: true,
              tva: true,
            },
          },
        },
      },
      client: true,
    },
  });
};

export const getAllInvoices = () => {
  return prisma.invoice.findMany({
    include: {
      invoiceItems: {
        include: {
          product: {
            select: {
              price: true,
            },
          },
        },
      },
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
          quantity: -data.quantity,
          model: "OUT",
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
          quantity: -data.quantity,
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
          quantity: -data.quantity,
          model: "OUT",
        },
      },
    },
  });
};

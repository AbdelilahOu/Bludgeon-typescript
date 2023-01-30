import type {
  invoiceState,
  invoiceT,
  dataRowT,
  dataRowsT,
  newInvoiceT,
  //   updateInvoiceT,
} from "@/types";
import axios from "axios";
import { defineStore } from "pinia";

const api: string = "http://localhost:3111/invoice/";

export const useInvoiceStore = defineStore("InvoiceStore", {
  state: (): invoiceState => {
    return {
      invoices: [],
      invoice: null,
    };
  },
  actions: {
    getAllInvoices: async function () {
      const res: dataRowsT<invoiceT> = await axios.get(api);
      this.invoices = res.data.rows;
      console.log(res.data.rows);
    },
    createOneInvoice: async function (Invoice: newInvoiceT) {
      const res: dataRowT<invoiceT> = await axios.post(api, {
        data: {
          Invoice,
        },
      });
      if (res.data.row) {
        this.getAllInvoices();
      }
    },
    updateOneInvoice: async function (id: number, Invoice: any) {
      const res: dataRowT<invoiceT> = await axios.put(api + id, {
        data: {
          Invoice,
        },
      });
      this.invoices.map((pro) => {
        if (pro.id === res.data.row.id) pro = res.data.row;
      });
    },
    deleteOneInvoice: async function (id: number) {
      const res: dataRowT<number> = await axios.delete(api + id);
      if (res.data.row) {
        this.invoices.splice(
          this.invoices.findIndex((pr) => pr.id === id),
          1
        );
      }
    },
    deleteOneInvoiceItem: async function (id: number) {
      const res: dataRowT<number> = await axios.delete(api + "item/" + id);
      if (res.data.row) {
        // const InvoiceIndex = this.invoices.findIndex(
        //   (pr) => pr.id === InvoiceId
        // );
        // const InvoiceItemIndex = this.invoices[
        //   InvoiceIndex
        // ].InvoiceItems?.findIndex((ct) => ct.id == id);
        // this.invoices[InvoiceIndex].InvoiceItems?.splice(InvoiceItemIndex, 1);
      }
    },
  },
});

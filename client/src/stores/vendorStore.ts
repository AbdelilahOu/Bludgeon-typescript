import type {
  vendorT,
  dataRowT,
  dataRowsT,
  vendorState,
  updateVendorT,
  newVendorT,
} from "@/types";
import { defineStore } from "pinia";
import axios from "axios";

const api: string = "http://localhost:3111/vendor/";

export const useVendorStore = defineStore("VendorStore", {
  state: (): vendorState => {
    return {
      vendors: [],
      vendor: null,
    };
  },
  actions: {
    getAllVendors: async function () {
      const res: dataRowsT<vendorT> = await axios.get(api);
      this.vendors = res.data.rows;
    },
    getOneVendor: async function (id: number) {
      this.vendor = this.vendors.find((cli) => cli.id === id) ?? null;
      if (!this.vendor) {
        const res: dataRowT<vendorT> = await axios.get(api + id);
        this.vendor = res.data.row;
      }
    },
    createOneVendor: async function (Vendor: newVendorT) {
      const res: dataRowT<vendorT> = await axios.post(api, {
        data: {
          Vendor,
        },
      });
      if (res.data.row) {
        this.vendors.unshift(res.data.row);
      }
    },
    deleteOneVendor: async function (id: number) {
      const res: dataRowT<number> = await axios.delete(api + id);
      if (res.data.row) {
        this.vendors.filter((cli) => cli.id !== id);
      }
    },
    updateOneVendor: async function (id: number, Vendor: updateVendorT) {
      const res: dataRowT<vendorT> = await axios.put(api + id, {
        data: {
          Vendor,
        },
      });
      this.vendors.map((Vendor) => {
        if (Vendor.id == res.data.row.id) Vendor = res.data.row;
      });
    },
  },
});

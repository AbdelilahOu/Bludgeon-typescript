import type {
  clientT,
  commandT,
  editModalArgsT,
  modalsState,
  productT,
  vendorT,
} from "@/types";
import { defineStore } from "pinia";

export const useModalStore = defineStore("ModalStore", {
  state: (): modalsState => {
    return {
      theModal: {
        show: false,
        name: "",
      },
      client: null,
      product: null,
      vendor: null,
      command: null,
    };
  },
  actions: {
    updateModal: function ({ key, value }: editModalArgsT) {
      this.theModal[key] = value;
    },
    updateClientRow: function (value: clientT | null) {
      this.client = value;
    },
    updateProductRow: function (value: productT | null) {
      this.product = value;
    },
    updateVendorRow: function (value: vendorT | null) {
      this.vendor = value;
    },
    updateCommandRow: function (value: commandT | null) {
      this.command = value;
    },
  },
});

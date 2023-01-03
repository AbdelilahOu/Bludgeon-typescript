import type { clientState } from "@/interfaces";
import { defineStore } from "pinia";

export const useClientStore = defineStore("ClientStore", {
  state: (): clientState => {
    return {
      clients: [
        {
          id: 1,
          name: "abdelilah",
          adresse: "marrakech",
          phone: "06082387782",
        },
      ],
    };
  },
  actions: {
    getAllClients: async function () {},
  },
});

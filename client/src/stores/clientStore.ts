import type { clientState } from "@/interfaces";
import { defineStore } from "pinia";

export const useClientStore = defineStore("ClientStore", {
  state: (): clientState => {
    return {
      clients: [],
    };
  },
  actions: {
    getAllClients: async function () {},
  },
});

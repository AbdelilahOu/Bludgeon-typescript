import type { client, clientState, dataRow, dataRows } from "@/types";
import axios from "axios";
import { defineStore } from "pinia";
const api: string = "http://localhost:3111/client/";
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
    getAllClients: async function () {
      const res: dataRows<client> = await axios.get(api);
      console.log(res.data.rows);
    },
  },
});

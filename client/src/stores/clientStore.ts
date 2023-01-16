import type {
  clientT,
  dataRow,
  dataRows,
  clientState,
  updateClientT,
} from "@/types";
import { defineStore } from "pinia";
import axios from "axios";

const api: string = "http://localhost:3111/client/";

export const useClientStore = defineStore("ClientStore", {
  state: (): clientState => {
    return {
      clients: [
        {
          id: 1,
          name: "abdelilah",
          phone: "06082387782",
        },
      ],
      client: null,
    };
  },
  actions: {
    getAllClients: async function () {
      const res: dataRows<clientT> = await axios.get(api);
      this.clients = res.data.rows;
    },
    getOneClient: async function (id: number) {
      this.client = this.clients.find((cli) => cli.id === id) ?? null;
      if (!this.client) {
        const res: dataRow<clientT> = await axios.get(api + id);
        this.client = res.data.row;
      }
    },
    createOneClient: async function (Client: updateClientT) {
      const res: dataRow<clientT> = await axios.post(api, {
        data: {
          Client,
        },
      });
      if (res.data.row) {
        this.clients.unshift(res.data.row);
      }
    },
    deleteOneClient: async function (id: number) {
      const res: dataRow<clientT> = await axios.delete(api + id);
      if (res.data.row.name) {
        this.clients.filter((cli) => cli.id !== res.data.row.id);
      }
    },
    updateOneClient: async function (id: number, Client: updateClientT) {
      const res: dataRow<clientT> = await axios.put(api + id, {
        data: {
          Client,
        },
      });
      this.clients.map((client) => {
        if (client.id == res.data.row.id) client = res.data.row;
      });
    },
  },
});

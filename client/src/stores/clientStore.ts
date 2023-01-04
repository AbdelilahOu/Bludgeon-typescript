import type {
  client,
  dataRow,
  dataRows,
  clientState,
  updateClient,
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
          adresse: "marrakech",
          phone: "06082387782",
        },
      ],
      client: null,
    };
  },
  actions: {
    getAllClients: async function () {
      const res: dataRows<client> = await axios.get(api);
      this.clients = res.data.rows;
    },
    getOneClient: async function (id: number) {
      this.client = this.clients.find((cli) => cli.id === id) ?? null;
    },
    createOneClient: async function (client: client) {
      const res: dataRow<client> = await axios.post(api, {
        body: {
          client,
        },
      });
      if (res) {
        this.clients.unshift(res.data.row);
      }
    },
    deleteOneClient: async function (id: number) {
      const res: { data: { msg: string } } = await axios.delete(api + id);
      console.log(res);
    },
    updateOneClient: async function (id: number, client: updateClient) {
      const res: dataRow<client> = await axios.post(api + id, {
        body: {
          client,
        },
      });
      this.clients.map((client) => {
        if (client.id == res.data.row.id) client = res.data.row;
      });
    },
  },
});

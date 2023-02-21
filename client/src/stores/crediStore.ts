import type { crediT, dataRowsT, dataRowT, newCrediT } from "@/types";
import axios from "axios";
import { defineStore } from "pinia";

const api: string = "http://localhost:3111/credi/";

export const useCrediStore = defineStore("CrediStore", {
  state: (): { Credis: crediT[] } => {
    return {
      Credis: [],
    };
  },
  actions: {
    getAllCredis: async function () {
      const res: dataRowsT<crediT> = await axios.get(api);
      this.Credis = res.data.rows;
      console.log(res);
    },
    createCredi: async function (Credi: newCrediT) {
      const res: dataRowT<crediT> = await axios.post(api, {
        data: {
          Credi,
        },
      });
      if (res.data.row.id) {
        this.getAllCredis();
      }
    },
    deleteOneCredi: async function (id: number) {
      const res: dataRowT<number> = await axios.delete(api + id);
      if (res.data.row) {
        this.Credis = this.Credis.filter((cli) => cli.id !== id);
      }
    },
  },
});

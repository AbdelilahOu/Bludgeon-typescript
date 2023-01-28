import type { stockMvmT } from "@/types";
import axios from "axios";
import { defineStore } from "pinia";

const api: string = "http://localhost:3111/stats/";

export const useStatsStore = defineStore("StatsStore", {
  actions: {
    getStockMouvementStats: function (stocks: stockMvmT[]): stockMvmT[] {
      return stocks.map((item) => ({
        ...item,
        date: new Date().toLocaleDateString("fr-fr", {
          month: "long",
        }),
      }));
    },
    ////////////////// GET FROM DB /////////////
    getPastThreeMonths: async function () {
      const beforeThreeMonths = new Date(
        new Date().getTime() - 3 * 30 * 24 * 60 * 60 * 1000
      );
      const res = await axios.get(api);
    },
    getBestThreeClients: async function () {
      const res = await axios.get(api);
    },
    getBestThreeVendors: async function () {
      const res = await axios.get(api);
    },
    getBestThreeProducts: async function () {
      const res = await axios.get(api);
    },
  },
});

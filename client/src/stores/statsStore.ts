import type { FilteredStockData, stockMvmT } from "@/types";
import { defineStore } from "pinia";
import axios from "axios";

const api: string = "http://localhost:3111/stats/";

const getMonth = (i: number) =>
  new Date(
    new Date().getTime() - i * 30 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("fr-fr", {
    month: "long",
  });

export const useStatsStore = defineStore("StatsStore", {
  actions: {
    getStockMouvementStats: (
      stocks: stockMvmT[]
    ): [result: FilteredStockData, months: string[]] => {
      let result: FilteredStockData = {};
      const months: string[] = [getMonth(2), getMonth(1), getMonth(0)];
      //group based on the month {january:[...]}
      let dataSet: { [key: string]: stockMvmT[] } = stocks
        .filter(
          ({ date }) =>
            new Date(date) >
            new Date(new Date().getTime() - 2 * 30 * 24 * 60 * 60 * 1000)
        )
        .map(({ date, quantity, model }) => ({
          date: new Date(date).toLocaleDateString("fr-fr", {
            month: "long",
          }),
          model,
          quantity,
        }))
        .reduce((r, { date, quantity, model }) => {
          r[date] = r[date] || [];
          r[date].push({ date, quantity, model });
          return r;
        }, Object.create(null));
      // group based on the model of the sstock mouvmenet {january:{IN:[...],OUT:[...]}}
      for (const month of months) {
        if (dataSet[month]) {
          result[month] = dataSet[month].reduce((r, { model, quantity }) => {
            r[model] = r[model] || 0;
            r[model] += Math.abs(Number(quantity));
            return r;
          }, Object.create(null));
        }
      }
      return [result, months];
    },
    ////////////////// GET FROM DB /////////////
    getPastThreeMonths: async function () {
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

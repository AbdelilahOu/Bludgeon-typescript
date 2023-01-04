import type { dataRow, dataRows, product, productState } from "@/types";
import { defineStore } from "pinia";
import axios from "axios";

const api: string = "http://localhost:3111/product/";

export const useProductStore = defineStore("ProductStore", {
  state: (): productState => {
    return {
      products: [],
    };
  },
  actions: {
    getAllProducts: async function () {
      const res: dataRows<product> = await axios.get(api);
      this.products = res.data.rows;
    },
    createOneProduct: async function (product: product) {
      const res: dataRow<product> = await axios.post(api, {
        body: {
          product,
        },
      });
      if (res) {
        this.products.unshift(res.data.row);
      }
    },
    updateOneProduct: async function (id: number, product: product) {
      const res: dataRow<product> = await axios.post(api + id, {
        body: {
          product,
        },
      });
      this.products.map((pro) => {
        if (pro.id === res.data.row.id) pro = res.data.row;
      });
    },
    deleteOneProduct: async function (id: number) {
      const res: { data: { msg: string } } = await axios.delete(api + id);
      if (res) {
        this.products.splice(
          this.products.findIndex((pr) => pr.id === id),
          1
        );
      }
    },
  },
});

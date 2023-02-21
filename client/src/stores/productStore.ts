import type {
  dataRowT,
  dataRowsT,
  productT,
  productState,
  newProductT,
  updateProductT,
  productTfromApiT,
} from "@/types";
import { defineStore } from "pinia";
import axios from "axios";

const api: string = "http://localhost:3111/product/";

export const useProductStore = defineStore("ProductStore", {
  state: (): productState => {
    return {
      products: [
        // {
        //   id: 1,
        //   name: "aaaaaa",
        //   price: 12,
        //   stock: 0,
        // },
        // {
        //   id: 1,
        //   name: "aaaaaa",
        //   price: 12,
        //   stock: 0,
        // },
        // {
        //   id: 1,
        //   name: "aaaaaa",
        //   price: 12,
        //   stock: 0,
        // },
        // {
        //   id: 1,
        //   name: "aaaaaa",
        //   price: 12,
        //   stock: 0,
        // },
        // {
        //   id: 1,
        //   name: "aaaaaa",
        //   price: 12,
        //   stock: 0,
        // },
        // {
        //   id: 1,
        //   name: "aaaaaa",
        //   price: 12,
        //   stock: 0,
        // },
        // {
        //   id: 1,
        //   name: "aaaaaa",
        //   price: 12,
        //   stock: 0,
        // },
      ],
    };
  },
  actions: {
    getAllProducts: async function () {
      const res: dataRowsT<productTfromApiT> = await axios.get(api);
      console.log(res.data.rows);
      this.products = res.data.rows.map((item: productTfromApiT) => {
        return {
          ...item,
          quantity: item.stockMouvements.reduce((a, b) => a + b.quantity, 0),
        };
      });
    },
    createOneProduct: async function (Product: newProductT) {
      const res: dataRowT<productT> = await axios.post(api, {
        data: {
          Product,
        },
      });
      if (res) {
        this.products.unshift({ id: res.data.row.id, ...Product });
      }
    },
    updateOneProduct: async function (id: number, Product: updateProductT) {
      console.log(id, Product);
      const res: dataRowT<productT> = await axios.put(api + id, {
        data: {
          Product,
        },
      });
      this.getAllProducts();
    },
    deleteOneProduct: async function (id: number) {
      const res: dataRowT<number> = await axios.delete(api + id);
      if (res.data.row) {
        this.products.splice(
          this.products.findIndex((pr) => pr.id === id),
          1
        );
      }
    },
  },
});
